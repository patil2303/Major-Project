// scripts/checkCategories.js
// Run with: node scripts/checkCategories.js
// It connects to the DB (ATLASDB_URL or local fallback) and reports counts for selected categories.

const mongoose = require('mongoose');
const Listing = require('../models/listing');

const atlas = process.env.ATLASDB_URL;
const local = 'mongodb://127.0.0.1:27017/homigo';
const mongoUrl = atlas || local;

async function main() {
  try {
    await mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('Connected to', mongoUrl);

    const categories = ['trending', 'room', 'iconic', 'views'];
    for (const cat of categories) {
      const count = await Listing.countDocuments({ category: cat });
      console.log(`${cat}: ${count}`);
    }

    const distinct = await Listing.distinct('category');
    console.log('\nDistinct categories in DB:', distinct.filter(Boolean));

    await mongoose.disconnect();
  } catch (err) {
    console.error('Error:', err.message || err);
    process.exit(1);
  }
}

main();
