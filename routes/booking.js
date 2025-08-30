const express = require("express");
const router = express.Router({ mergeParams: true });
const bookings = require("../controllers/bookings");
const { isLoggedIn } = require("../Middleware");

router.post("/", isLoggedIn, bookings.createBooking);
router.get("/user", isLoggedIn, bookings.getUserBookings);
router.post("/:bookingId/cancel", isLoggedIn, bookings.cancelBooking);

module.exports = router;
