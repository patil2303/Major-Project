const path = require("path");
const dns = require("dns");
try { dns.setServers(["8.8.8.8", "1.1.1.1"]); } catch (e) {}

require("dotenv").config({ path: path.resolve(__dirname, "../.env") });
const mongoose = require("mongoose");
const Listing = require("../models/listing");
const initData = require("../init/data");

async function check() {
  const url = process.env.ATLASDB_URL || process.env.MONGO_URL;
  await mongoose.connect(url, { family: 4, serverSelectionTimeoutMS: 15000 });

  const existing = await Listing.find({}, "title");
  const existingTitles = new Set(existing.map(e => e.title.trim().toLowerCase()));

  console.log(`Existing listings in DB: ${existing.length}`);
  
  const toAdd = initData.data.filter(item => !existingTitles.has(item.title.trim().toLowerCase()));
  console.log(`Listings in data.js to add: ${toAdd.length}`);

  await mongoose.disconnect();
}

check().catch(console.error);
