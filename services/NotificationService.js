const nodemailer = require('nodemailer');
const twilio = require('twilio');
require('dotenv').config();

// Helper to identify demo, fake, or placeholder emails
function isDemoEmail(email) {
    if (!email || typeof email !== 'string') return true;
    const clean = email.trim().toLowerCase();

    // Known testing and placeholder addresses
    const demoExact = [
        'demo@gmail.com',
        'demo1@gmail.com',
        'demo2@gmail.com',
        'demo@homigo.com',
        'host@homigo.com',
        'user@homigo.com',
        'test@gmail.com',
        'test@test.com',
        'admin@admin.com',
        'admin@gmail.com',
        'fake@gmail.com',
        'sample@gmail.com'
    ];
    if (demoExact.includes(clean)) return true;

    // Test/invalid domains
    if (clean.endsWith('@example.com') || 
        clean.endsWith('@test.com') || 
        clean.endsWith('@invalid') || 
        clean.endsWith('@fake.com') || 
        clean.endsWith('@localhost')) {
        return true;
    }

    // Demo prefixes like demo123@gmail.com, test_user@...
    if (/^(demo|test|dummy|fake|sample)[0-9_.-]*@/i.test(clean)) {
        return true;
    }

    return false;
}

class NotificationService {
    constructor() {
        this.initTransporter();

        // Initialize Twilio client
        this.twilioClient = (process.env.TWILIO_ACCOUNT_SID && process.env.TWILIO_AUTH_TOKEN) ? 
            twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN) : null;

        this.verifiedNumbers = new Set([
            process.env.TWILIO_VERIFIED_NUMBER,
            '+18106891776'
        ]);

        if (this.emailTransporter) {
            console.log(`📧 Email service active: ${process.env.EMAIL_USER}`);
        } else {
            console.warn('⚠️ Email service not configured');
        }
        if (!this.twilioClient) console.warn('⚠️ SMS service not configured');
    }

    initTransporter() {
        if (process.env.EMAIL_USER && process.env.EMAIL_APP_PASSWORD) {
            this.emailTransporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: process.env.EMAIL_USER,
                    pass: process.env.EMAIL_APP_PASSWORD
                }
            });
        } else {
            this.emailTransporter = null;
        }
    }

    async sendBookingNotifications(booking, listing, user) {
        try {
            await this.sendEmail(booking, listing, user);

            const ownerPhone = listing.ownerPhone;
            if (this.isVerifiedNumber(ownerPhone)) {
                await this.sendSMS(booking, listing, user);
                console.log('✅ SMS sent successfully');
            } else if (ownerPhone) {
                console.log(`ℹ️ [SMS Skipped] Phone number ${ownerPhone} not verified in Twilio.`);
            }

            return true;
        } catch (error) {
            console.error('❌ Notification error:', error.message);
            return false;
        }
    }

    isVerifiedNumber(phoneNumber) {
        return Boolean(phoneNumber && this.verifiedNumbers.has(phoneNumber));
    }

    async sendEmail(booking, listing, user) {
        if (!this.emailTransporter) {
            this.initTransporter();
        }

        if (!this.emailTransporter) {
            console.log('ℹ️ Email notifications skipped (EMAIL_USER or EMAIL_APP_PASSWORD not set in .env)');
            return true;
        }

        const senderEmail = process.env.EMAIL_USER;
        const checkInFormatted = booking.checkIn ? new Date(booking.checkIn).toLocaleDateString("en-IN", { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' }) : 'N/A';
        const checkOutFormatted = booking.checkOut ? new Date(booking.checkOut).toLocaleDateString("en-IN", { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' }) : 'N/A';
        
        // Host information (strictly from the listing's owner account)
        const hostUser = listing.owner;
        const hostName = (hostUser && hostUser.username) ? hostUser.username : 'Host';
        const hostEmail = (hostUser && hostUser.email) ? hostUser.email.trim() : (listing.ownerEmail ? listing.ownerEmail.trim() : null);

        // Guest information
        const guestName = (user && user.username) ? user.username : 'Guest';
        const guestEmail = (user && user.email) ? user.email.trim() : null;

        // ---------------------------------------------------------------------
        // 1. Send Booking Confirmation Email to the GUEST (Client who booked)
        // ---------------------------------------------------------------------
        if (!guestEmail) {
            console.log('ℹ️ Guest has no email registered. Confirmation email skipped.');
        } else if (isDemoEmail(guestEmail)) {
            console.log(`ℹ️ [Demo Mode] Guest (${guestName}) registered with a demo email (${guestEmail}). Confirmation email skipped.`);
        } else {
            try {
                await this.emailTransporter.sendMail({
                    from: `"Homigo Booking Confirmation" <${senderEmail}>`,
                    to: guestEmail,
                    subject: `Booking Confirmed: ${listing.title || 'Your Stay'} — Homigo`,
                    html: `
                        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 16px; overflow: hidden; border: 1px solid #e2e8f0; box-shadow: 0 10px 30px rgba(0,0,0,0.06);">
                            <!-- Header -->
                            <div style="background: linear-gradient(135deg, #fe424d 0%, #ff6b6b 100%); padding: 30px 24px; text-align: center; color: #ffffff;">
                                <h1 style="margin: 0; font-size: 26px; font-weight: 800; letter-spacing: -0.5px;">🧭 Homigo</h1>
                                <p style="margin: 6px 0 0 0; font-size: 14px; opacity: 0.95;">Reservation Confirmed & Verified</p>
                            </div>

                            <div style="padding: 28px;">
                                <h2 style="color: #0f172a; font-size: 20px; font-weight: 700; margin-top: 0;">Pack your bags, ${guestName}! 🎉</h2>
                                <p style="color: #475569; font-size: 14px; line-height: 1.6; margin-bottom: 24px;">Your reservation for <strong>${listing.title || 'your stay'}</strong> is officially confirmed. Here is your trip itinerary:</p>

                                <!-- Itinerary Details Card -->
                                <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 20px; margin-bottom: 24px;">
                                    <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
                                        <tr>
                                            <td style="padding: 8px 0; color: #64748b;">Property</td>
                                            <td style="padding: 8px 0; color: #0f172a; font-weight: 600; text-align: right;">${listing.title || 'Homigo Stay'}</td>
                                        </tr>
                                        <tr>
                                            <td style="padding: 8px 0; color: #64748b;">Location</td>
                                            <td style="padding: 8px 0; color: #0f172a; font-weight: 600; text-align: right;">${listing.location || 'India'}, ${listing.country || 'India'}</td>
                                        </tr>
                                        <tr>
                                            <td style="padding: 8px 0; color: #64748b;">Check-in</td>
                                            <td style="padding: 8px 0; color: #0f172a; font-weight: 600; text-align: right;">${checkInFormatted}</td>
                                        </tr>
                                        <tr>
                                            <td style="padding: 8px 0; color: #64748b;">Check-out</td>
                                            <td style="padding: 8px 0; color: #0f172a; font-weight: 600; text-align: right;">${checkOutFormatted}</td>
                                        </tr>
                                        <tr style="border-top: 1px solid #e2e8f0;">
                                            <td style="padding: 12px 0 0 0; color: #0f172a; font-weight: 700; font-size: 15px;">Total Paid</td>
                                            <td style="padding: 12px 0 0 0; color: #fe424d; font-weight: 800; font-size: 18px; text-align: right;">₹${booking.totalPrice ? booking.totalPrice.toLocaleString("en-IN") : '0'}</td>
                                        </tr>
                                    </table>
                                </div>

                                <!-- Host Information -->
                                <div style="background: #fff5f5; border-left: 4px solid #fe424d; padding: 14px 18px; border-radius: 6px; margin-bottom: 24px;">
                                    <p style="margin: 0; color: #0f172a; font-size: 13px;"><strong>Host:</strong> ${hostName}</p>
                                    <p style="margin: 4px 0 0 0; color: #64748b; font-size: 12px;">Need assistance? Reply directly to this email or visit your reservations page on Homigo.</p>
                                </div>

                                <div style="text-align: center; margin-top: 28px;">
                                    <a href="http://localhost:3000/bookings" style="background: #fe424d; color: #ffffff; text-decoration: none; padding: 12px 28px; border-radius: 9999px; font-weight: 600; font-size: 14px; display: inline-block;">View My Itinerary</a>
                                </div>
                            </div>

                            <div style="background: #f1f5f9; padding: 16px; text-align: center; font-size: 12px; color: #94a3b8; border-top: 1px solid #e2e8f0;">
                                &copy; ${new Date().getFullYear()} Homigo Hospitality. Handcrafted for travelers across India.
                            </div>
                        </div>
                    `
                });
                console.log(`✅ [Guest Email Delivered] Confirmation sent to client: ${guestEmail}`);
            } catch (guestMailErr) {
                console.error(`❌ Failed to send confirmation email to guest (${guestEmail}):`, guestMailErr.message);
            }
        }

        // ---------------------------------------------------------------------
        // 2. Send New Reservation Notification to the HOST (Owner of property)
        // ---------------------------------------------------------------------
        if (!hostEmail) {
            console.log('ℹ️ Property has no host email. Host notification skipped.');
        } else if (isDemoEmail(hostEmail)) {
            console.log(`ℹ️ [Demo Mode] Host (${hostName}) has a demo email (${hostEmail}). Host alert email skipped.`);
        } else if (guestEmail && hostEmail.toLowerCase() === guestEmail.toLowerCase()) {
            // Edge case: if hostEmail is identical to guestEmail, skip sending host email to avoid confusing the guest
            console.log(`ℹ️ Host email (${hostEmail}) matches guest email. Host notification skipped to prevent duplicate delivery to client.`);
        } else {
            try {
                await this.emailTransporter.sendMail({
                    from: `"Homigo Host Alerts" <${senderEmail}>`,
                    to: hostEmail,
                    subject: `New Reservation Received: ${listing.title || 'Your Property'} — Homigo`,
                    html: `
                        <div style="font-family: Arial, sans-serif; padding: 20px; border: 1px solid #e2e8f0; border-radius: 10px; max-width: 580px;">
                            <h2 style="color: #fe424d; margin-top: 0;">🎉 You Have a New Booking!</h2>
                            <p>Hi ${hostName},</p>
                            <p>A guest has just booked your property on Homigo.</p>
                            <hr style="border: none; border-top: 1px solid #e2e8f0;">
                            <p><strong>Property:</strong> ${listing.title || 'N/A'}</p>
                            <p><strong>Guest:</strong> ${guestName} (${guestEmail || 'N/A'})</p>
                            <p><strong>Check-in:</strong> ${checkInFormatted}</p>
                            <p><strong>Check-out:</strong> ${checkOutFormatted}</p>
                            <p><strong>Earnings:</strong> ₹${booking.totalPrice ? booking.totalPrice.toLocaleString("en-IN") : '0'}</p>
                            <br>
                            <p>Best regards,<br><strong>Homigo Team</strong></p>
                        </div>
                    `
                });
                console.log(`✅ [Host Email Delivered] Reservation alert sent to host: ${hostEmail}`);
            } catch (hostMailErr) {
                console.error(`❌ Failed to send host notification email (${hostEmail}):`, hostMailErr.message);
            }
        }

        return true;
    }

    async sendSMS(booking, listing, user) {
        if (!this.isVerifiedNumber(listing.ownerPhone)) {
            throw new Error(`Phone number ${listing.ownerPhone} is not verified`);
        }

        return this.twilioClient.messages.create({
            body: `New booking from ${user.username} for ${listing.title}. Check-in: ${booking.checkIn.toLocaleDateString()}`,
            from: process.env.TWILIO_PHONE_NUMBER,
            to: listing.ownerPhone
        });
    }
}

NotificationService.isDemoEmail = isDemoEmail;
module.exports = new NotificationService();
