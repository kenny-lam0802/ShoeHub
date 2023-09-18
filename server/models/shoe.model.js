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

    size: {
        type: Number,
        required: [true, 'You must input a shoe size'],
    },

    inStock: {
        type: Boolean,
        required: true,
    },

    description: {
        type: String,
        required: [true, 'You must describe the shoe'],
        minlength: [3, 'The shoe description must be at lest three letters']
    },

});

const Shoe = mongoose.model('Shoe', shoeSchema);

module.exports = Shoe;