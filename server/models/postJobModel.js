const mongoose = require('mongoose');

const postJobSchema = new mongoose.Schema({
  job: {
    type: String,
    required: true,
    trim: true,
  },
  department: {
    type: String,
    trim: true,
  },
  jobType: {
    type: String,
    trim: true,
  },
  location: {
    type: String,
    trim: true,
  },
  payScale: {
    type: String,
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
}, {
  timestamps: true,
});

module.exports = mongoose.model('postJob', postJobSchema);


  