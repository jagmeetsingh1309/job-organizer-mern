const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const jobSchema = new Schema({
    createdBy: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    title: {
        type: String,
        required: true
    },
    company: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true
    },
    appliedOn: {
        type: Date,
        required: true
    },
    status: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Job',jobSchema);