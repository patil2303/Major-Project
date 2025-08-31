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
    populate: {
      path: "author"
    },
  })
  .populate("owner");
  if(!listing) {
    req.flash("error" ,"Listing u requested for does not exist!");
    res.redirect("/listings");
  }
  console.log(listing);
  res.render("listings/show.ejs", { listing });
}

module.exports.createListing = async (req, res, next) => {
  let response = await geocodingClient.forwardGeocode({
    query: req.body.listing.location,
    limit: 1
  }).send();

  let { listing } = req.body;

  // Handle main image: file or URL
  let mainImage = { url: '', filename: '' };
  if (req.file) {
    mainImage.url = req.file.path;
    mainImage.filename = req.file.filename;
  } else if (listing.imageUrl) {
    mainImage.url = listing.imageUrl;
    mainImage.filename = '';
  } else {
    mainImage.url = "https://media.istockphoto.com/id/474185479/photo/barbados.jpg?s=612x612&w=0&k=20&c=CoMAIsVOAPd6IzyrigoQdTn6POtp-OSnMv0cS9AzBzc=";
    mainImage.filename = "default.jpg";
  }

  // Handle other images: files and/or URLs
  let otherImages = [];
  if (req.files && req.files.length > 0) {
    otherImages = req.files.map(f => ({ url: f.path, filename: f.filename }));
  }
  if (listing.otherImageUrls) {
    // Accept comma-separated URLs
    let urls = listing.otherImageUrls.split(',').map(u => u.trim()).filter(u => u);
    urls.forEach(url => {
      otherImages.push({ url, filename: '' });
    });
    // Limit to 5 images
    otherImages = otherImages.slice(0, 5);
  }

  // Now, create the listing
  const newListing = new Listing({
  ...listing,
    image: mainImage,
    otherImages,
    owner: req.user._id,
    geometry: response.body.features[0].geometry
  });

  let savedListing = await newListing.save();
  console.log(savedListing);
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

  // Handle main image: file or URL
  if (req.file) {
    updatedListing.image = { url: req.file.path, filename: req.file.filename };
  } else if (listing.imageUrl) {
    updatedListing.image = { url: listing.imageUrl, filename: '' };
  }

  // Handle other images: files and/or URLs
  let otherImages = [];
  if (req.files && req.files.length > 0) {
    otherImages = req.files.map(f => ({ url: f.path, filename: f.filename }));
  }
  if (listing.otherImageUrls) {
    let urls = listing.otherImageUrls.split(',').map(u => u.trim()).filter(u => u);
    urls.forEach(url => {
      otherImages.push({ url, filename: '' });
    });
    otherImages = otherImages.slice(0, 5);
  }
  if (otherImages.length > 0) {
    updatedListing.otherImages = otherImages;
  }

  // Update other fields
  updatedListing.title = listing.title;
  updatedListing.description = listing.description;
  updatedListing.location = listing.location;
  updatedListing.country = listing.country;
  updatedListing.price = listing.price;
  // Persist category if present
  if (listing.category !== undefined) {
    updatedListing.category = listing.category;
  }

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

