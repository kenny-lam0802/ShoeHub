const mongoose = require('mongoose');

const shoeSchema = new mongoose.Schema({
    shoeName: {
        type: String,
        required: [true, 'You must input the name of the shoe'],
        minlength: [3, 'The shoe name must be longer than 3 letters']
    },

    type: {
        type: String,
        required: [true, 'You must input the shoe type'],
        minlength: [3, 'The shoe type must be longer than 3 letters']
    },

    description: {
        type: String,
        required: [true, 'You must describe the shoe'],
        minlength: [3, 'The shoe description must be at lest three letters']
    },

    image: {
        type: String,
        required: [true, 'You must add an image link'],
    },

});

const Shoe = mongoose.model('Shoe', shoeSchema);

module.exports = Shoe;