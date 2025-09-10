// models/latestNewsModel.js
const mongoose = require('mongoose');

const latestNewsSchema = new mongoose.Schema({
  heading: {
    type: String,
    required: true,
  },
  paragraph: {
    type: String,
    required: true,
  },
  image: {
    type: String,  
    required: true,
  },
},{timestamps:true});

const latestNews = mongoose.model('latestNews', latestNewsSchema);

module.exports = latestNews;