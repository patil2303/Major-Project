const path = require("path");
const dns = require("dns");
try {
  dns.setServers(["8.8.8.8", "1.1.1.1"]);
} catch (e) {}

require("dotenv").config({ path: path.resolve(__dirname, "../.env") });
const mongoose = require("mongoose");
const Listing = require("../models/listing");
const User = require("../models/user");

async function run() {
  const url = process.env.ATLASDB_URL || process.env.MONGO_URL;
  console.log("Connecting to DB...");
  await mongoose.connect(url, { family: 4, serverSelectionTimeoutMS: 15000 });
  console.log("Connected!");

  const users = await User.find({}, "_id username email phoneNumber");
  console.log("Users in DB:", users);

  const listings = await Listing.find({}).populate("owner", "username email");
  console.log(`Total listings in DB: ${listings.length}`);

  let nullOwners = 0;
  for (const l of listings) {
    if (!l.owner) {
      nullOwners++;
      console.log(`Listing with NULL owner: [${l._id}] ${l.title} (owner field in doc: ${l.toObject().owner}, ownerEmail: ${l.ownerEmail})`);
    }
  }
  console.log(`Total listings with null owner: ${nullOwners}`);

  await mongoose.disconnect();
}

run().catch(console.error);
