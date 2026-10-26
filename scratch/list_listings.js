const path = require("path");
const dns = require("dns");
try { dns.setServers(["8.8.8.8", "1.1.1.1"]); } catch (e) {}

require("dotenv").config({ path: path.resolve(__dirname, "../.env") });
const mongoose = require("mongoose");
const Listing = require("../models/listing");

async function run() {
  const url = process.env.ATLASDB_URL || process.env.MONGO_URL;
  await mongoose.connect(url, { family: 4, serverSelectionTimeoutMS: 15000 });
  const listings = await Listing.find({}, "_id title location country price image owner ownerEmail");
  console.log(JSON.stringify(listings, null, 2));
  await mongoose.disconnect();
}

run().catch(console.error);
