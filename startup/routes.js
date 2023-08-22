const express = require('express');
const person = require('../routes/Person');
const cars = require('../routes/Cars');
const auth = require('../routes/auth');
const products  = require("../routes/Products");

module.exports = function (app) {
    app.use(express.json());
    app.use('/api/person', person);
    app.use('/api/cars', cars);
    app.use('/api/auth', auth);
    app.use('/api/product', products);
}