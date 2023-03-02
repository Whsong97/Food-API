const mongoose = require('mongoose')

const foodSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    cuisine: {
        type: String,
        required: true,
        enum: ['Chinese', 'Korean', 'Italian', 'Turkish', 'Latin']
    },
    ingredients: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        min: 5
    }
})

module.exports = mongoose.model('Food', foodSchema)