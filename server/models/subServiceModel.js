const mongoose = require('mongoose');

const subServiceSchema = new mongoose.Schema({
    serviceCategoryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Service',
        required: true
    },
    name: {
        type: String,
        required: true,
        trim: true
    },
    image: {
        type: String,
        required: false
    },
    headerOne: {
        type: String,
        required: false
    },
    SubHeaderTwo: {
        type: String,
        required: false
    },
    paragraphOne: {
        type: String,
        required: false
    },
    headerThree: {
        type: String,
        required: false
    },
    SubHeaderThree: {
        type: String,
        required: false
    },
    paragraphTwo: {
        type: String,
        required: false
    },
    headerFour: {
        type: String,
        required: false
    },
    SubHeaderFour: {
        type: String,
        required: false
    },
    paragraphThree: {
        type: String,
        required: false
    },
    headerFive: {
        type: String,
        required: false
    },
    SubHeaderFive: {
        type: String,
        required: false
    },
    paragraphFour: {
        type: String,
        required: false
    },
    headerSix: {
        type: String,
        required: false
    },
    SubHeaderSix: {
        type: String,
        required: false
    },
    paragraphFive: {
        type: String,
        required: false
    },
    headerSeven: {
        type: String,
        required: false
    },
    SubHeaderSeven: {
        type: String,
        required: false
    },
    paragraphSix: {
        type: String,
        required: false
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('SubService', subServiceSchema);