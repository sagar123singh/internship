const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        //required: true,
    },
    password: {
        type: String,
    },

    isVerified: {
        type: Boolean,
        default: false,
    },
    emailToken:{
        type:String
    },

    googleId: {
        type: String,
    },
    facebookId: {
        type: String,
    },
    provider: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model('user', userSchema);