const mongoose = require('mongoose');

const serviceCategorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
}, { timestamps: true });



const serviceCategory= mongoose.model('serviceCategory', serviceCategorySchema);
module.exports=serviceCategory;

 