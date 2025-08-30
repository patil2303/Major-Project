const express = require('express');
const router = express.Router();
const bookings = require('../controllers/bookings');
const { isLoggedIn } = require('../Middleware');

router.get('/', isLoggedIn, bookings.getUserBookings);

module.exports = router;
