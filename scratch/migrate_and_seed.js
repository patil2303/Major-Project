const path = require("path");
const dns = require("dns");
try { dns.setServers(["8.8.8.8", "1.1.1.1"]); } catch (e) {}

require("dotenv").config({ path: path.resolve(__dirname, "../.env") });
const mongoose = require("mongoose");
const Listing = require("../models/listing");
const User = require("../models/user");
const initData = require("../init/data");

async function migrate() {
  const url = process.env.ATLASDB_URL || process.env.MONGO_URL;
  console.log("Connecting to MongoDB Atlas...");
  await mongoose.connect(url, { family: 4, serverSelectionTimeoutMS: 20000 });
  console.log("Connected successfully!");

  // 1. Host user Kalpesh (demo@gmail.com)
  const hostUser = await User.findById("68e545da03feb967928ffcc3");
  if (!hostUser) {
    throw new Error("Target host user Kalpesh not found in DB!");
  }

  // 2. Fix all listings where owner is not populated or null
  const allCurrent = await Listing.find({}).populate("owner");
  for (const item of allCurrent) {
    let dirty = false;
    if (!item.owner) {
      item.owner = hostUser._id;
      dirty = true;
    }
    if (!item.ownerEmail) {
      item.ownerEmail = "demo@gmail.com";
      dirty = true;
    }
    if (!item.ownerPhone) {
      item.ownerPhone = "+919876543210";
      dirty = true;
    }
    if (dirty) {
      await item.save();
      console.log(`Updated listing: "${item.title}"`);
    }
  }

  // 3. Fix 403 image for "The Postcard Velha, Goa"
  const postcardListing = await Listing.findOne({ title: { $regex: "Postcard Velha", $options: "i" } });
  if (postcardListing) {
    postcardListing.image = {
      url: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=80",
      filename: "postcard-velha-goa"
    };
    await postcardListing.save();
  }

  // 4. Seed 20 new listings from init/data.js
  const existingListings = await Listing.find({}, "title");
  const existingTitles = new Set(existingListings.map(l => l.title.trim().toLowerCase()));

  const candidatesToAdd = initData.data.slice(0, 20);
  let addedCount = 0;

  for (const raw of candidatesToAdd) {
    if (!existingTitles.has(raw.title.trim().toLowerCase())) {
      const newListing = new Listing({
        title: raw.title,
        description: raw.description,
        image: raw.image,
        otherImages: raw.otherImages || [],
        price: raw.price,
        location: raw.location,
        country: raw.country,
        category: raw.category || "trending",
        geometry: raw.geometry || {
          type: "Point",
          coordinates: [77.2090, 28.6139]
        },
        owner: hostUser._id,
        ownerEmail: "demo@gmail.com",
        ownerPhone: "+919876543210"
      });

      await newListing.save();
      addedCount++;
    }
  }

  console.log(`Successfully added ${addedCount} new listings!`);
  const finalCount = await Listing.countDocuments();
  console.log(`Final total listings in Atlas DB: ${finalCount}`);

  await mongoose.disconnect();
}

migrate().catch(console.error);
