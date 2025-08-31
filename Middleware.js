const Listing = require("./models/listing");
const Review = require("./models/reviews");
const ExpressError = require("./utils/ExpressError.js");
const { listingSchema, reviewSchema} = require("./schema.js");

module.exports.isLoggedIn = (req, res, next) => {
    if(!req.isAuthenticated()){
      req.session.redirectUrl = req.originalUrl;
      // Customize message based on the route
      if (req.path.includes('/bookings')) {
        req.flash("error", "You must be logged in to make a booking!");
      } else if (req.path.includes('/listings/new')) {
        req.flash("error", "You must be logged in to create listing!");
      } else {
        req.flash("error", "You must be logged in first!");
      }
      return res.redirect("/login");
    }
    next();
}

module.exports.savRedirectUrl = (req, res, next) =>{
  if (req.session.redirectUrl) {
    res.locals.redirectUrl = req.session.redirectUrl;
  }
  next();
}

module.exports.isOwner = async (req, res, next) => {
  let { id } = req.params;
  let listing = await Listing.findById(id);
  if(!listing.owner._id.equals(res.locals.currUser._id)){
    req.flash("error", "You are not the Owner of this listing");
    return res.redirect(`/listings/${id}`)
  }
  next();
}

module.exports.validateListing = (req, res, next) => {
    // Set default image if not provided
    if (!req.body.listing.image || !req.body.listing.image.url) {
        req.body.listing.image = {
            url: "https://media.istockphoto.com/id/474185479/photo/barbados.jpg?s=612x612&w=0&k=20&c=CoMAIsVOAPd6IzyrigoQdTn6POtp-OSnMv0cS9AzBzc=",
            filename: "default.jpg",
        };
    }

  const { error } = listingSchema.validate(req.body, { abortEarly: false, allowUnknown: true });
    if (error) {
        const errMsg = error.details.map(el => el.message).join(",");
        throw new ExpressError(400, errMsg);
    } else {
        next();
    }
};

module.exports.validateReview = (req,res,next) => {
    let {error} = reviewSchema.validate(req.body);
        if (error) {
            let errMsg = error.details.map((el) => el.message).join(",");
            throw new ExpressError(400,errMsg);
        } else {
            next();
        }
}

module.exports.isReviewAuthor = async (req, res, next) => {
  let { id, reviewId } = req.params;
  let review = await Review.findById(reviewId);
  if(!review.author.equals(res.locals.currUser._id)){
    req.flash("error", "You are not the Owner of this review");
    return res.redirect(`/listings/${id}`)
  }
  next();
}