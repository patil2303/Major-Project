const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Review = require("./reviews.js");
const { ref } = require("joi");

const ImageSchema = new Schema({
  url: String,
  filename: String
});

const listingSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: String,
    image: {
        url: String,
        filename: String,
    },
    otherImages: [ImageSchema],
    price: Number,
  category: String,
    location: String,
    country: String,
    reviews : [
        {
            type: Schema.Types.ObjectId,
            ref: "Review"
        },
    ],
    owner: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
    ownerEmail: {
        type: String,
        required: true,
        validate: {
            validator: function(v) {
                return /\S+@\S+\.\S+/.test(v);
            },
            message: 'Invalid email format'
        }
    },
    ownerPhone: {
        type: String,
        required: true,
        validate: {
            validator: function(v) {
                return /^\+?[1-9]\d{1,14}$/.test(v);
            },
            message: 'Phone number must be in E.164 format (+1234567890)'
        }
    },
    geometry: {
        type: {
          type: String,
          enum: ['Point'], // Only allow 'Point' geometries (not LineString, Polygon, etc.)
          required: true
        },
        coordinates: {
          type: [Number], // Expect an array: [longitude, latitude]
          required: true
        }
      }
      
});

listingSchema.post("findOneAndDelete", async (listing) => {
    if (listing) {
      await Review.deleteMany({ _id: { $in: listing.reviews } });
    }
  });
  

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;
