const mongoose = require('mongoose');

const hotelSchema = new mongoose.Schema({
    // ...existing code...
    ownerEmail: {
        type: String,
        required: true
    },
    ownerPhoneNumber: {
        type: String,
        required: true
    }
    // ...existing code...
});

module.exports = mongoose.model('Hotel', hotelSchema);