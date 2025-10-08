const transporter = require('../config/emailConfig');

const sendCancellationEmail = async (booking, user, hotel) => {
    try {
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: hotel.ownerEmail,   // The owner's email
            subject: `Booking Cancelled - ${hotel.name}`,
            html: `
                <h2>Booking Cancelled</h2>
                <p>Dear ${hotel.ownerName || "Owner"},</p>
                <p>The following booking has been <strong>cancelled</strong> by the guest:</p>
                <ul>
                    <li><strong>Guest Name:</strong> ${user.username}</li>
                    <li><strong>Hotel:</strong> ${hotel.name}</li>
                    <li><strong>Check-in:</strong> ${booking.checkIn}</li>
                    <li><strong>Check-out:</strong> ${booking.checkOut}</li>
                </ul>
                <p>Please update your records accordingly.</p>
                <p>Best Regards,<br>Homigo Team</p>
            `
        };

        await transporter.sendMail(mailOptions);
        console.log("Cancellation email sent successfully ✅");
        return true;
    } catch (error) {
        console.error("Cancellation email failed ❌", error);
        return false;
    }
};

module.exports = { sendCancellationEmail };
