
const mongoose = require('mongoose');

const meetingSchema = new mongoose.Schema({
  eventTypeUri: {
    type: String,
    required: true,
  },
  eventName: {
    type: String,
    required: true,
  },
  invitee: {
    name: { type: String, required: true },
    email: { type: String, required: true },
  },
  startTime: {
    type: Date,
    required: true,
  },
  endTime: {
    type: Date,
    required: true,
  },
  meetingLink: {
    type: String,
    default: 'No meeting link provided',
  },
  calendlyEventUri: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Meeting', meetingSchema);