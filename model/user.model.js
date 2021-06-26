const mongoose = require('mongoose');
const petSchema = require('./pet.model');

const userSchema = new mongoose.Schema({
    email: {
        // unique: true,
        type: String
    },
    pets: [petSchema]
});

const userModel = mongoose.model('User', userSchema);

module.exports = userModel;