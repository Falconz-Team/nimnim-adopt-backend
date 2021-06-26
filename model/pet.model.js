const mongoose = require('mongoose');

const petSchema = new mongoose.Schema({
    breed: { type: String },
    age: { type: String },
    gender: { type: String },
    description: { type: String },
    image_Url: { type: String },
});

module.exports = petSchema;