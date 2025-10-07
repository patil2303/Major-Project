const createBookingEmailTemplate = (booking, user, hotel) => {
    return `
        <h2>New Booking Notification</h2>
        <p>Dear ${hotel.ownerName},</p>
        <p>A new booking has been made for your hotel ${hotel.name}.</p>
        
        <h3>Booking Details:</h3>
        <ul>
            <li>Check-in: ${booking.checkIn}</li>
            <li>Check-out: ${booking.checkOut}</li>
            <li>Number of Guests: ${booking.guests}</li>
            <li>Total Amount: ${booking.totalAmount}</li>
        </ul>

        <h3>Guest Information:</h3>
        <ul>
            <li>Name: ${user.name}</li>
            <li>Email: ${user.email}</li>
            <li>Phone: ${user.phone}</li>
        </ul>
    `;
};

module.exports = { createBookingEmailTemplate };
