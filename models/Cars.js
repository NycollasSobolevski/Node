const mongoose = require('mongoose');

const Car = mongoose.model('Car', {
    color: String,
    year: Number,
    brand: String,
    model: String
})

module.exports = Car;