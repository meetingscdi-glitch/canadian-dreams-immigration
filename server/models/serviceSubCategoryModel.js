// models/serviceSubCategory.js
const mongoose = require('mongoose');

const serviceSubCategorySchema = new mongoose.Schema({
  serviceCategoryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'serviceCategory',
    required: true,
  },
  name: {
    type: String,
    required: true,
    trim: true,
  },
  image: {
    type: String,
    trim: true,
  },
  headerOne: {
    type: String,
    trim: true,
  },
  headerTwo: {
    type: String,
    trim: true,
  },
  SubHeaderTwo: {
    type: String,
    trim: true,
  },
  paragraphOne: {
    type: String,
    trim: true,
  },
  headerThree: {
    type: String,
    trim: true,
  },
  SubHeaderThree: {
    type: String,
    trim: true,
  },
  paragraphTwo: {
    type: String,
    trim: true,
  },
  headerFour: {
    type: String,
    trim: true,
  },
  SubHeaderFour: {
    type: String,
    trim: true,
  },
  paragraphThree: {
    type: String,
    trim: true,
  },
  headerFive: {
    type: String,
    trim: true,
  },
  SubHeaderFive: {
    type: String,
    trim: true,
  },
  paragraphFour: {
    type: String,
    trim: true,
  },
  headerSix: {
    type: String,
    trim: true,
  },
  SubHeaderSix: {
    type: String,
    trim: true,
  },
  paragraphFive: {
    type: String,
    trim: true,
  },
  headerSeven: {
    type: String,
    trim: true,
  },
  SubHeaderSeven: {
    type: String,
    trim: true,
  },
  paragraphSix: {
    type: String,
    trim: true,
  }
}, {
  timestamps: true,
});

const serviceSubCategory = mongoose.model('serviceSubCategory', serviceSubCategorySchema);
module.exports=serviceSubCategory;