if (process.env.NODE_ENV !== "production") {
    require("dotenv").config({ path: "../.env" });
}

const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");
const User = require("../models/user.js");

const Mongo_Url = process.env.ATLASDB_URL || process.env.MONGO_URL || "mongodb://127.0.0.1:27017/homigo";

const categoryList = ['trending', 'room', 'iconic', 'views', 'beach', 'pools', 'farms'];

const locationCoordinates = {
    "Malibu": [-118.7798, 34.0259],
    "New York City": [-74.0060, 40.7128],
    "Aspen": [-106.8175, 39.1911],
    "Florence": [11.2558, 43.7696],
    "Portland": [-122.6784, 45.5152],
    "Cancun": [-86.8515, 21.1619],
    "Lake Tahoe": [-120.0324, 39.0968],
    "Los Angeles": [-118.2437, 34.0522],
    "Verbier": [7.2286, 46.0968],
    "Serengeti National Park": [34.8333, -2.3333],
    "Amsterdam": [4.9041, 52.3676],
    "Fiji": [178.0650, -17.7134],
    "Cotswolds": [-1.8433, 51.8330],
    "Boston": [-71.0589, 42.3601],
    "Bali": [115.1889, -8.4095],
    "Banff": [-115.5708, 51.1784],
    "Miami": [-80.1918, 25.7617],
    "Phuket": [98.3923, 7.8804],
    "Scottish Highlands": [-4.2026, 57.3229],
    "Dubai": [55.2708, 25.2048],
    "Montana": [-110.3626, 46.8797],
    "Mykonos": [25.3289, 37.4467],
    "Costa Rica": [-84.0739, 9.7489],
    "Charleston": [-79.9311, 32.7765],
    "Tokyo": [139.6917, 35.6895],
    "New Hampshire": [-71.5724, 43.1939],
    "Maldives": [73.2207, 3.2028]
};

async function main() {
    await mongoose.connect(Mongo_Url);
    console.log("Connected to database for initialization");

    // Ensure a default owner user exists
    let hostUser = await User.findOne({ username: "homigo_host" });
    if (!hostUser) {
        const newUser = new User({
            username: "homigo_host",
            email: "host@homigo.com",
            phoneNumber: "+919876543210"
        });
        hostUser = await User.register(newUser, "admin123");
        console.log("Created default host user: homigo_host (password: admin123)");
    }

    await Listing.deleteMany({});

    const formattedListings = initData.data.map((obj, idx) => {
        const coords = (obj.geometry && obj.geometry.coordinates) || locationCoordinates[obj.location] || [77.2090, 28.6139];
        const category = obj.category || categoryList[idx % categoryList.length];
        return {
            ...obj,
            owner: hostUser._id,
            ownerEmail: hostUser.email || "host@homigo.com",
            ownerPhone: hostUser.phoneNumber || "+919876543210",
            category,
            geometry: obj.geometry || {
                type: "Point",
                coordinates: coords
            },
            otherImages: (Array.isArray(obj.otherImages) && obj.otherImages.length > 0) ? obj.otherImages : []
        };
    });

    await Listing.insertMany(formattedListings);
    console.log(`Successfully initialized database with ${formattedListings.length} listings!`);

    await mongoose.disconnect();
}

main().catch((err) => {
    console.error("Initialization error:", err);
    process.exit(1);
});
