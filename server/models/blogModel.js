const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
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
}, { timestamps: true });

const blog = mongoose.model('blog', blogSchema);

module.exports = blog;
