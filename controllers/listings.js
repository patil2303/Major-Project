const Listing = require("../models/listing");

async function geocodeAddress(address) {
    const defaultCoords = [77.2090, 28.6139];
    if (!address || typeof address !== 'string') {
        return { type: "Point", coordinates: defaultCoords };
    }

    const googleKey = process.env.GOOGLE_MAPS_API_KEY;

    // 1. Try Google Maps Geocoding API
    if (googleKey && googleKey.trim()) {
        try {
            const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${googleKey.trim()}`;
            const res = await fetch(url);
            const data = await res.json();
            if (data.status === "OK" && data.results && data.results[0] && data.results[0].geometry) {
                const { lat, lng } = data.results[0].geometry.location;
                return { type: "Point", coordinates: [lng, lat] };
            }
        } catch (err) {
            console.warn("Google geocoding error:", err.message);
        }
    }

    // 2. Try OpenStreetMap Nominatim as fallback
    try {
        const osmUrl = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}`;
        const res = await fetch(osmUrl, {
            headers: { 'User-Agent': 'HomigoPropertyApp/1.0' }
        });
        const data = await res.json();
        if (Array.isArray(data) && data.length > 0 && data[0].lat && data[0].lon) {
            return {
                type: "Point",
                coordinates: [parseFloat(data[0].lon), parseFloat(data[0].lat)]
            };
        }
    } catch (err) {
        console.warn("OSM geocoding fallback notice:", err.message);
    }

    return { type: "Point", coordinates: defaultCoords };
}

function getFileUrl(file) {
    if (!file) return '';
    if (file.path && (file.path.startsWith('http://') || file.path.startsWith('https://'))) {
        return file.path;
    }
    if (file.secure_url) return file.secure_url;
    if (file.url) return file.url;
    if (file.filename) return '/uploads/' + file.filename;
    return file.path || '';
}



module.exports.index = async (req, res) => {
  let search = req.query.search || "";
  let category = req.query.category || "";
  let filter = {};
  if (search) {
    // Case-insensitive search by location
    filter.location = { $regex: search, $options: "i" };
  }
  if (category) {
    filter.category = category;
  }
  const allListings = await Listing.find(filter);
  res.render("listings/index", { allListings, search, category });
}

module.exports.renderNewform = (req, res) => {
    return res.render("listings/new");
  }

module.exports.showListing = async (req, res) => {
  let { id } = req.params;
  const listing = await Listing.findById(id)
    .populate({
      path: "reviews",
      populate: { path: "author" },
    })
    .populate("owner");
  if (!listing) {
    req.flash("error", "Listing u requested for does not exist!");
    return res.redirect("/listings");
  }

  // Build a single gallery array (main image first, then unique otherImages)
  const galleryImages = [];
  const seen = new Set();
  if (listing.image && listing.image.url) {
    galleryImages.push(listing.image);
    seen.add(listing.image.url);
  }
  if (Array.isArray(listing.otherImages)) {
    listing.otherImages.forEach(img => {
      if (img && img.url && !seen.has(img.url)) {
        galleryImages.push(img);
        seen.add(img.url);
      }
    });
  }

  console.log('galleryImages count:', galleryImages.length);
  res.render("listings/show.ejs", { listing, galleryImages });
}

module.exports.createListing = async (req, res, next) => {
  let geometry = await geocodeAddress(req.body.listing.location);

  let { listing } = req.body;

  // debug
  console.log('createListing - uploaded files count:', req.files && req.files.length);

  // Handle uploaded files: first uploaded file -> mainImage, rest -> otherImages
  let mainImage = { url: '', filename: '' };
  let otherImages = [];

  if (req.files && req.files.length > 0) {
    const first = req.files[0];
    mainImage.url = getFileUrl(first);
    mainImage.filename = first.filename || 'uploaded-image';
    if (req.files.length > 1) {
      otherImages = req.files.slice(1).map(f => ({ url: getFileUrl(f), filename: f.filename || 'uploaded-image' }));
    }
  } else if (req.file) {
    mainImage.url = getFileUrl(req.file);
    mainImage.filename = req.file.filename || 'uploaded-image';
  } else if (listing.imageUrl) {
    mainImage.url = listing.imageUrl;
    mainImage.filename = '';
  } else {
    mainImage.url = "https://media.istockphoto.com/id/474185479/photo/barbados.jpg?s=612x612&w=0&k=20&c=CoMAIsVOAPd6IzyrigoQdTn6POtp-OSnMv0cS9AzBzc=";
    mainImage.filename = "default.jpg";
  }

  // Accept other images provided as URLs too
  if (listing.otherImageUrls) {
    let urls = listing.otherImageUrls.split(',').map(u => u.trim()).filter(u => u);
    urls.forEach(url => otherImages.push({ url, filename: '' }));
  }

  // Remove duplicates and any equal to mainImage.url
  otherImages = otherImages.filter(img => img.url && img.url !== mainImage.url);
  const unique = [];
  const seenOther = new Set();
  otherImages.forEach(img => {
    if (!seenOther.has(img.url)) {
      seenOther.add(img.url);
      unique.push(img);
    }
  });
  otherImages = unique.slice(0, 5); // limit if desired

  const ownerEmail = (listing.ownerEmail && listing.ownerEmail.trim()) || (req.user && req.user.email) || "host@homigo.com";
  const ownerPhone = (listing.ownerPhone && listing.ownerPhone.trim()) || (req.user && req.user.phoneNumber) || "+919999999999";

  // Now create and save
  const newListing = new Listing({
    ...listing,
    ownerEmail,
    ownerPhone,
    image: mainImage,
    otherImages,
    owner: req.user._id,
    geometry
  });

  await newListing.save();
  req.flash("success", "New listing created!");
  res.redirect("/listings");
}

module.exports.renderEditForm = async (req, res) => {
  let { id } = req.params;
  const listing = await Listing.findById(id);
  if(!listing) {
    req.flash("error" ,"Listing u requested for does not exist!");
    res.redirect("/listings");
  }
  let originalImageUrl = listing.image.url;
  originalImageUrl = originalImageUrl.replace("/upload","/upload/h_300,w_250,c_fill");
  res.render("listings/edit.ejs", { listing, originalImageUrl });
}

module.exports.updateListing = async (req, res) => {
  let { id } = req.params;
  let { listing } = req.body;
  let updatedListing = await Listing.findById(id);

  console.log('updateListing - uploaded files count:', req.files && req.files.length);

  // Handle uploaded files: first file => main image, rest append to otherImages
  if (req.files && req.files.length > 0) {
    const first = req.files[0];
    updatedListing.image = { url: getFileUrl(first), filename: first.filename || 'uploaded-image' };
    const newOtherFromFiles = req.files.slice(1).map(f => ({ url: getFileUrl(f), filename: f.filename || 'uploaded-image' }));
    updatedListing.otherImages = (updatedListing.otherImages || []).concat(newOtherFromFiles);
  } else if (req.file) {
    updatedListing.image = { url: getFileUrl(req.file), filename: req.file.filename || 'uploaded-image' };
  } else if (listing.imageUrl) {
    updatedListing.image = { url: listing.imageUrl, filename: '' };
  }

  // Add other image URLs from form (comma-separated)
  if (listing.otherImageUrls) {
    let urls = listing.otherImageUrls.split(',').map(u => u.trim()).filter(u => u);
    urls.forEach(url => {
      updatedListing.otherImages = (updatedListing.otherImages || []).concat({ url, filename: '' });
    });
  }

  // Deduplicate and remove any that equal main image
  if (updatedListing.otherImages && updatedListing.otherImages.length > 0) {
    const seenUrls = new Set();
    const filtered = [];
    const mainUrl = updatedListing.image && updatedListing.image.url;
    updatedListing.otherImages.forEach(img => {
      if (!img || !img.url) return;
      if (mainUrl && img.url === mainUrl) return;
      if (!seenUrls.has(img.url)) {
        seenUrls.add(img.url);
        filtered.push(img);
      }
    });
    updatedListing.otherImages = filtered.slice(0, 5);
  }

  // Update other scalar fields
  updatedListing.title = listing.title;
  updatedListing.description = listing.description;
  if (listing.location && listing.location !== updatedListing.location) {
    updatedListing.geometry = await geocodeAddress(listing.location);
    updatedListing.location = listing.location;
  }
  updatedListing.country = listing.country;
  updatedListing.price = listing.price;
  if (listing.category !== undefined) updatedListing.category = listing.category;
  if (listing.ownerEmail) updatedListing.ownerEmail = listing.ownerEmail;
  if (listing.ownerPhone) updatedListing.ownerPhone = listing.ownerPhone;

  await updatedListing.save();
  req.flash("success", "Listing Updated!");
  res.redirect(`/listings/${id}`);
}

module.exports.destroyListing = async (req, res) => {
    let { id } = req.params;
    let deletedListing = await Listing.findByIdAndDelete(id);
    console.log(deletedListing);
    req.flash("success", "Listing Deleted!");
    res.redirect("/listings");
  }

