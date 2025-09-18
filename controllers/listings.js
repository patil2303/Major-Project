const { response } = require("express");
const Listing = require("../models/listing");
const mbxGeocoding = require('@mapbox/mapbox-sdk/services/geocoding');
const mapToken = process.env.MAP_TOKEN;
const geocodingClient = mbxGeocoding({ accessToken: mapToken });



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
  let response = await geocodingClient.forwardGeocode({
    query: req.body.listing.location,
    limit: 1
  }).send();

  let { listing } = req.body;

  // debug
  console.log('createListing - uploaded files count:', req.files && req.files.length);

  // Handle uploaded files: first uploaded file -> mainImage, rest -> otherImages
  let mainImage = { url: '', filename: '' };
  let otherImages = [];

  if (req.files && req.files.length > 0) {
    const first = req.files[0];
    mainImage.url = first.path || first.location || first.secure_url || first.url;
    mainImage.filename = first.filename;
    if (req.files.length > 1) {
      otherImages = req.files.slice(1).map(f => ({ url: f.path || f.location || f.secure_url || f.url, filename: f.filename }));
    }
  } else if (req.file) {
    mainImage.url = req.file.path || req.file.location || req.file.secure_url || req.file.url;
    mainImage.filename = req.file.filename;
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

  // Now create and save
  const newListing = new Listing({
    ...listing,
    image: mainImage,
    otherImages,
    owner: req.user._id,
    geometry: response.body.features[0].geometry
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
    updatedListing.image = { url: first.path || first.location || first.secure_url || first.url, filename: first.filename };
    const newOtherFromFiles = req.files.slice(1).map(f => ({ url: f.path || f.location || f.secure_url || f.url, filename: f.filename }));
    updatedListing.otherImages = (updatedListing.otherImages || []).concat(newOtherFromFiles);
  } else if (req.file) {
    updatedListing.image = { url: req.file.path || req.file.location || req.file.secure_url || req.file.url, filename: req.file.filename };
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
  updatedListing.location = listing.location;
  updatedListing.country = listing.country;
  updatedListing.price = listing.price;
  if (listing.category !== undefined) updatedListing.category = listing.category;

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

