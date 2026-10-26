const path = require("path");
const dns = require("dns");
try { dns.setServers(["8.8.8.8", "1.1.1.1"]); } catch (e) {}

require("dotenv").config({ path: path.resolve(__dirname, "../.env") });
const mongoose = require("mongoose");
const Listing = require("../models/listing");

async function check() {
  const url = process.env.ATLASDB_URL || process.env.MONGO_URL;
  await mongoose.connect(url, { family: 4, serverSelectionTimeoutMS: 15000 });

  const listings = await Listing.find({}, "_id title image");
  console.log("Checking image status for all 16 DB listings...");
  for (const l of listings) {
    const imgUrl = l.image && l.image.url;
    if (!imgUrl) {
      console.log(`[NO IMAGE] ${l.title} (${l._id})`);
      continue;
    }
    try {
      const res = await fetch(imgUrl, { method: "HEAD", headers: { "User-Agent": "Mozilla/5.0" } });
      console.log(`[${res.status}] ${l.title} (${l._id}) -> ${imgUrl.substring(0, 50)}...`);
    } catch (e) {
      console.log(`[ERR: ${e.message}] ${l.title} (${l._id}) -> ${imgUrl.substring(0, 50)}...`);
    }
  }

  await mongoose.disconnect();
}

check().catch(console.error);
