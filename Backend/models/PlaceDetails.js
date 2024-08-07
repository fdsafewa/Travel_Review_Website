const { default: mongoose } = require('mongoose');
const mongodb = require('mongoose');

const reviewSchema = new mongoose.Schema({
    userName:String,
    profileImage:String,
    rating:Number,
    reviewText:String
});

const placeDetailsSchema = new mongoose.Schema({
    placeId: { type: String, required: true }, 
    placeName: String,
    address: String,
    reviewsCount: Number,
    description:String,
    photos: [String],
    
    location: {
      mapUrl: String,
      address: String,
      phone: String
    },
    convenience: {
      accessibility: [String],
      amenities: [String],
      children: [String],
      pets: [String]
    },
    rating: Number,
    reviews: [reviewSchema],
    openingHours: {
      periods: [{
        open: {
          day: Number,
          time: String
        },
        close: {
          day: Number,
          time: String
        }
      }],
      weekday_text: [String]
    },
    tags: [String],
    finalTags:[String]
  });

const PlaceDetails = mongoose.model('PlaceDetails', placeDetailsSchema, 'placeDetails');

module.exports = PlaceDetails;