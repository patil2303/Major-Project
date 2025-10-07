const Booking = require("../models/booking");
const Hotel = require("../models/Hotel");
const User = require("../models/user"); // Fix case sensitivity
const NotificationService = require("../services/NotificationService");

// @desc Create new booking
// @route POST /api/bookings
// @access Private
const createBooking = async (req, res) => {
  try {
    const { hotelId, userId, checkInDate, checkOutDate, totalAmount } = req.body;

    // Validate input data
    if (!hotelId || !userId || !checkInDate || !checkOutDate || !totalAmount) {
      return res
        .status(400)
        .json({ success: false, message: "Please provide all required fields" });
    }

    // Check if hotel exists
    const hotel = await Hotel.findById(hotelId);
    if (!hotel) {
      return res
        .status(404)
        .json({ success: false, message: "Hotel not found" });
    }

    // Check if user exists
    const user = await User.findById(userId);
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }

    // Create new booking
    const booking = await Booking.create({
      hotel: hotelId,
      user: userId,
      checkInDate,
      checkOutDate,
      totalAmount,
    });

    // Send notifications (Email + SMS)
    try {
      await Promise.all([
        NotificationService.sendEmail(booking, hotel, user),
        NotificationService.sendSMS(booking, hotel, user),
      ]);
      console.log("✅ Notifications sent successfully (Email + SMS)");
    } catch (notifyError) {
      console.error("❌ Notification sending failed:", notifyError);
    }

    res.status(201).json({
      success: true,
      message: "Booking created and notifications sent successfully",
      booking,
    });
  } catch (error) {
    console.error("Booking creation failed:", error);
    res.status(500).json({
      success: false,
      message: "Booking creation failed",
      error: error.message,
    });
  }
};

// @desc Get all bookings
// @route GET /api/bookings
// @access Private
const getAllBookings = async (req, res) => {
  try {
    const bookings = await Booking.find()
      .populate("user", "name email")
      .populate("hotel", "name location");
    res.status(200).json({
      success: true,
      bookings,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

// @desc Get booking by ID
// @route GET /api/bookings/:id
// @access Private
const getBookingById = async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id)
      .populate("user", "name email")
      .populate("hotel", "name location");

    if (!booking) {
      return res
        .status(404)
        .json({ success: false, message: "Booking not found" });
    }

    res.status(200).json({
      success: true,
      booking,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

// @desc Update booking
// @route PUT /api/bookings/:id
// @access Private
const updateBooking = async (req, res) => {
  try {
    const { checkInDate, checkOutDate, totalAmount } = req.body;

    // Validate input data
    if (!checkInDate || !checkOutDate || !totalAmount) {
      return res
        .status(400)
        .json({ success: false, message: "Please provide all required fields" });
    }

    const booking = await Booking.findByIdAndUpdate(
      req.params.id,
      { checkInDate, checkOutDate, totalAmount },
      { new: true }
    );

    if (!booking) {
      return res
        .status(404)
        .json({ success: false, message: "Booking not found" });
    }

    res.status(200).json({
      success: true,
      message: "Booking updated successfully",
      booking,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

// @desc Delete booking
// @route DELETE /api/bookings/:id
// @access Private
const deleteBooking = async (req, res) => {
  try {
    const booking = await Booking.findByIdAndDelete(req.params.id);
    if (!booking) {
      return res
        .status(404)
        .json({ success: false, message: "Booking not found" });
    }

    res.status(200).json({
      success: true,
      message: "Booking deleted successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

module.exports = {
  createBooking,
  getAllBookings,
  getBookingById,
  updateBooking,
  deleteBooking,
};
