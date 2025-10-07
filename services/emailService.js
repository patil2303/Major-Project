const transporter = require('../config/emailConfig');
const { createBookingEmailTemplate } = require('../utils/emailTemplate');

const sendBookingEmail = async (booking, user, hotel) => {
    try {
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: hotel.ownerEmail,
            subject: `New Booking - ${hotel.name}`,
            html: createBookingEmailTemplate(booking, user, hotel)
        };

        await transporter.sendMail(mailOptions);
        return true;
    } catch (error) {
        console.error('Email sending failed:', error);
        return false;
    }
};

module.exports = { sendBookingEmail };
