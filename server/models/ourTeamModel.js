const mongoose = require('mongoose');

const ourTeamSchema = new mongoose.Schema({
  image: {
    type: String, 
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  designation: {
    type: String,
    required: true,
  },

},{ timestamps: true});

const ourTeam = mongoose.model('ourTeam', ourTeamSchema);

module.exports = ourTeam;