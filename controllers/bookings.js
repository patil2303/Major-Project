const Booking = require("../models/booking");
const Listing = require("../models/listing");
const notificationService = require("../services/NotificationService");
const ExpressError = require("../utils/ExpressError");
const wrapAsync = require("../utils/wrapAsync");

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
module.exports.cancelBooking = wrapAsync(async (req, res) => {
    const { id, bookingId } = req.params;
    await Booking.findByIdAndUpdate(bookingId, { status: "cancelled" });
    req.flash("success", "Booking cancelled successfully!");
    res.redirect(`/listings/${id}`);
});
