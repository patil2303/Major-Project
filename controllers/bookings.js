const Booking = require("../models/booking");
const Listing = require("../models/listing");
const notificationService = require("../services/NotificationService");
const ExpressError = require("../utils/ExpressError");
const wrapAsync = require("../utils/wrapAsync");
const { sendCancellationEmail } = require('../services/cancelEmailService');
const transporter = require('../config/emailConfig');



// Create new booking
module.exports.createBooking = wrapAsync(async (req, res) => {
    const { id } = req.params;
    const { checkIn, checkOut } = req.body;

    const listing = await Listing.findById(id);
    if (!listing) {
        throw new ExpressError("Listing not found", 404);
    }

    // Basic validation
    const startDate = new Date(checkIn);
    const endDate = new Date(checkOut);

    if (!(startDate instanceof Date) || isNaN(startDate) || !(endDate instanceof Date) || isNaN(endDate)) {
        req.flash("error", "Invalid dates provided");
        return res.redirect(`/listings/${id}`);
    }

    if (endDate <= startDate) {
        req.flash("error", "Check-out must be after check-in");
        return res.redirect(`/listings/${id}`);
    }

    // Prevent owners from booking their own listing
    if (listing.owner && listing.owner.equals && listing.owner.equals(req.user._id)) {
        req.flash("error", "You cannot book your own listing");
        return res.redirect(`/listings/${id}`);
    }

    // Calculate total price (number of days * price per night)
    const numberOfDays = Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24));
    const totalPrice = numberOfDays * listing.price;

    const booking = new Booking({
        user: req.user._id,
        listing: id,
        checkIn: startDate,
        checkOut: endDate,
        totalPrice
    });

    await booking.save();

    try {
        await notificationService.sendBookingNotifications(booking, listing, req.user);
        console.log("✅ Notifications sent successfully");
    } catch (error) {
        console.error("❌ Notification sending failed:", error.message);
        // Don't throw error - continue with booking creation
    }

    req.flash("success", "Booking created successfully!");
    res.redirect(`/listings/${id}`);
});

// Get user's bookings
module.exports.getUserBookings = wrapAsync(async (req, res) => {
    const bookings = await Booking.find({ user: req.user._id })
        .populate({
            path: "listing",
            populate: { path: "owner", select: "username" }
        })
        .sort("-createdAt");

    res.render("users/bookings", { bookings });
});

// Cancel booking
module.exports.cancelBooking = async (req, res) => {
  try {
    const { id, bookingId } = req.params;

    // Populate listing and owner info
    const booking = await Booking.findById(bookingId).populate({
      path: "listing",
      populate: { path: "owner" },
    });

    if (!booking) {
      req.flash("error", "Booking not found");
      return res.redirect("/listings");
    }

    booking.status = "cancelled";
    await booking.save();

    // ✅ Email to Owner
    if (booking.listing && booking.listing.owner && booking.listing.owner.email) {
      const ownerMail = {
        from: process.env.EMAIL_USER,
        to: booking.listing.owner.email,
        subject: "Booking Cancelled - Homigo",
        html: `
          <div style="font-family: Arial; padding: 15px;">
            <h2 style="color: #dc3545;">Booking Cancelled</h2>
            <p>Dear ${booking.listing.owner.username},</p>
            <p>Your listing <b>${booking.listing.title}</b> was cancelled by a guest.</p>
            <p><b>Guest:</b> ${req.user.username}</p>
            <p><b>Check-in:</b> ${new Date(booking.checkIn).toLocaleDateString()}</p>
            <p><b>Check-out:</b> ${new Date(booking.checkOut).toLocaleDateString()}</p>
            <p><b>Total:</b> ₹${booking.totalPrice}</p>
            <br>
            <p>Regards,<br><b>Homigo Team</b></p>
          </div>
        `,
      };

      await transporter.sendMail(ownerMail);
      console.log("✅ Email sent to owner:", booking.listing.owner.email);
    }

    // ✅ Optional Email to Guest
    if (req.user && req.user.email) {
      const guestMail = {
        from: process.env.EMAIL_USER,
        to: req.user.email,
        subject: "Your Booking has been Cancelled - Homigo",
        html: `
          <div style="font-family: Arial; padding: 15px;">
            <h2 style="color: #dc3545;">Booking Cancelled</h2>
            <p>Dear ${req.user.username},</p>
            <p>Your booking for <b>${booking.listing.title}</b> has been cancelled successfully.</p>
            <p><b>Check-in:</b> ${new Date(booking.checkIn).toLocaleDateString()}</p>
            <p><b>Check-out:</b> ${new Date(booking.checkOut).toLocaleDateString()}</p>
            <p><b>Total:</b> ₹${booking.totalPrice}</p>
            <br>
            <p>Regards,<br><b>Homigo Team</b></p>
          </div>
        `,
      };

      await transporter.sendMail(guestMail);
      console.log("✅ Email sent to guest:", req.user.email);
    }

    req.flash("success", "Booking cancelled successfully. Owner has been notified.");
    res.redirect("/listings");
  } catch (err) {
    console.error("❌ Error cancelling booking:", err);
    req.flash("error", "Something went wrong while cancelling the booking.");
    res.redirect("/bookings/user");
  }
};
