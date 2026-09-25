const mongoose = require("mongoose");
const Listing = require("../models/listing");
const User = require("../models/user");
const initData = require("../init/data");

const dbUrl = process.env.ATLASDB_URL;
const localDb = "mongodb://127.0.0.1:27017/homigo";

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

async function seedIfEmpty() {
    try {
        const count = await Listing.countDocuments();
        if (count === 0) {
            console.log("🌱 Database is empty. Seeding initial data...");
            let hostUser = await User.findOne({ username: "homigo_host" });
            if (!hostUser) {
                const newUser = new User({
                    username: "homigo_host",
                    email: "host@homigo.com",
                    phoneNumber: "+919876543210"
                });
                hostUser = await User.register(newUser, "admin123");
                console.log("👤 Created demo host user: 'homigo_host' (password: 'admin123')");
            }

            const formatted = initData.data.map((item, idx) => ({
                ...item,
                owner: hostUser._id,
                ownerEmail: hostUser.email || "host@homigo.com",
                ownerPhone: hostUser.phoneNumber || "+919876543210",
                category: item.category || categoryList[idx % categoryList.length],
                geometry: item.geometry || {
                    type: "Point",
                    coordinates: locationCoordinates[item.location] || [77.2090, 28.6139]
                },
                otherImages: (Array.isArray(item.otherImages) && item.otherImages.length > 0) ? item.otherImages : []
            }));

            await Listing.insertMany(formatted);
            console.log(`✅ Seeded ${formatted.length} sample listings successfully!`);
        }
    } catch (err) {
        console.error("Warning during seed check:", err.message);
    }
}

async function connectDB() {
    // 1. Try Atlas DB if configured
    if (dbUrl && dbUrl.trim() !== "") {
        try {
            await mongoose.connect(dbUrl, { family: 4, serverSelectionTimeoutMS: 5000 });
            console.log("✅ Connected to Atlas DB");
            await seedIfEmpty();
            return dbUrl;
        } catch (err) {
            console.warn("⚠️ Atlas connection failed:", err.message);
        }
    }

    // 2. Try local MongoDB instance
    try {
        await mongoose.connect(localDb, { serverSelectionTimeoutMS: 2500 });
        console.log("✅ Connected to local MongoDB (mongodb://127.0.0.1:27017/homigo)");
        await seedIfEmpty();
        return localDb;
    } catch (err) {
        console.warn("⚠️ Local MongoDB service not reachable on port 27017:", err.message);
    }

    // 3. Fallback to MongoMemoryServer
    try {
        console.log("🚀 Starting embedded MongoMemoryServer for local development...");
        const { MongoMemoryServer } = require("mongodb-memory-server");
        const mongod = await MongoMemoryServer.create();
        const memUri = mongod.getUri();
        await mongoose.connect(memUri);
        console.log("✅ Connected to in-memory MongoDB at:", memUri);
        await seedIfEmpty();
        return memUri;
    } catch (err) {
        console.error("❌ Failed to initialize any database connection:", err);
        throw err;
    }
}

module.exports = { connectDB, seedIfEmpty };
