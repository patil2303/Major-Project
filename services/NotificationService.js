const nodemailer = require('nodemailer');
const twilio = require('twilio');
require('dotenv').config();

class NotificationService {
    constructor() {
        // Initialize email transporter
        this.emailTransporter = process.env.EMAIL_USER ? nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_APP_PASSWORD
            }
        }) : null;

        // Initialize Twilio client
        this.twilioClient = (process.env.TWILIO_ACCOUNT_SID && process.env.TWILIO_AUTH_TOKEN) ? 
            twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN) : null;

        // Store verified numbers (you should verify these in Twilio console)
        this.verifiedNumbers = new Set([
            process.env.TWILIO_VERIFIED_NUMBER, // Add your verified number here
            '+18106891776' // Your Twilio number
        ]);

        // Log initialization status
        if (!this.emailTransporter) console.warn('⚠️ Email service not configured');
        if (!this.twilioClient) console.warn('⚠️ SMS service not configured');
    }

    async sendBookingNotifications(booking, listing, user) {
        try {
            // Always try to send email
            await this.sendEmail(booking, listing, user);
            console.log('✅ Email sent successfully');

            // Only try SMS if number is verified
            const ownerPhone = listing.ownerPhone;
            if (this.isVerifiedNumber(ownerPhone)) {
                await this.sendSMS(booking, listing, user);
                console.log('✅ SMS sent successfully');
            } else {
                console.warn(`⚠️ Skip SMS: Number ${ownerPhone} not verified. Verify at twilio.com/console`);
            }

            return true;
        } catch (error) {
            console.error('❌ Notification error:', error.message);
            throw error;
        }
    }

    isVerifiedNumber(phoneNumber) {
        return this.verifiedNumbers.has(phoneNumber);
    }

    async sendEmail(booking, listing, user) {
        return this.emailTransporter.sendMail({
            from: process.env.EMAIL_USER,
            to: listing.ownerEmail,
            subject: `New Booking for ${listing.title || 'your property'}`,
            html: `
                <h2>New Booking Details</h2>
                <p>Guest: ${user.username}</p>
                <p>Check-in: ${booking.checkIn.toLocaleDateString()}</p>
                <p>Check-out: ${booking.checkOut.toLocaleDateString()}</p>
                <p>Total Price: $${booking.totalPrice}</p>
                <p>Property: ${listing.title || 'Not specified'}</p>
                <p>Location: ${listing.location || 'Not specified'}</p>
            `
        });
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

// Export a singleton instance
module.exports = new NotificationService();
