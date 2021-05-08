const mongoose = require('mongoose');

const ContactSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },
    name: {
        type: String,
        required: true
    },

    phone: {
        type: String,
    },
    email: {
        type: String,
    },
    type: {
        type: String,
        default: 'personal'
    },

    date: {
        type: Date,
        default: Date.Now
    }
});

module.exports = mongoose.model('contact', ContactSchema);