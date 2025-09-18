const mongoose = require('mongoose');
const Listing = require('../models/listing');

const dbUrl = process.env.DB_URL || 'mongodb://localhost:27017/your-db-name';

async function migrate() {
  await mongoose.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true });
  console.log('Connected to DB');

  const listings = await Listing.find({});
  console.log(`Found ${listings.length} listings`);

  for (const l of listings) {
    let modified = false;

    // collect candidate images from various possible legacy fields
    const candidates = [];

    // case: legacy array field named 'images' or 'imgs'
    if (Array.isArray(l.images) && l.images.length) {
      l.images.forEach(i => {
        if (i && (i.url || i.path || i.location)) {
          candidates.push({ url: i.url || i.path || i.location, filename: i.filename || '' });
        }
      });
    }
    if (Array.isArray(l.imgs) && l.imgs.length) {
      l.imgs.forEach(i => {
        if (i && (i.url || i.path || i.location)) {
          candidates.push({ url: i.url || i.path || i.location, filename: i.filename || '' });
        }
      });
    }

    // case: a single main image already exists (l.image)
    if (l.image && l.image.url) {
      // keep it as candidate start if no candidates collected
      if (candidates.length === 0) {
        candidates.push({ url: l.image.url, filename: l.image.filename || '' });
      }
    }

    // case: string of otherImageUrls (comma-separated)
    if (l.otherImageUrls && typeof l.otherImageUrls === 'string') {
      const urls = l.otherImageUrls.split(',').map(u => u.trim()).filter(Boolean);
      urls.forEach(u => candidates.push({ url: u, filename: '' }));
    }

    // If we have at least two distinct candidate URLs, ensure schema fields are set
    const unique = [];
    const seen = new Set();
    candidates.forEach(c => {
      if (c.url && !seen.has(c.url)) {
        seen.add(c.url);
        unique.push(c);
      }
    });

    if (unique.length > 0) {
      // set main image to first unique
      const first = unique[0];
      if (!l.image || l.image.url !== first.url) {
        l.image = { url: first.url, filename: first.filename || '' };
        modified = true;
      }

      // set otherImages to the rest, but don't overwrite if otherImages already populated
      const rest = unique.slice(1);
      if ((!Array.isArray(l.otherImages) || l.otherImages.length === 0) && rest.length > 0) {
        l.otherImages = rest;
        modified = true;
      }
    }

    if (modified) {
      await l.save();
      console.log(`Migrated listing ${l._id}`);
    }
  }

  console.log('Migration complete');
  await mongoose.disconnect();
  process.exit(0);
}

migrate().catch(err => {
  console.error(err);
  process.exit(1);
});
