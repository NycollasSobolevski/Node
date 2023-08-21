const express = require('express');
const person = require('../routes/Person');


module.exports = function (app) {
    app.use(express.json());
    app.use('/api/person', person);
}