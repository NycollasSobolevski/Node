const express = require('express');
const router = express.Router();
const Cars = require('../models/Cars');
const CarController = require("../controller/CarController")

router
    .get('/api/cars', CarController.GetAll )
    .get('/api/cars/:id', CarController.GetById)
    .post('/api/cars', CarController.Create )
    .delete('/api/cars/:id', CarController.Delete )
    .put('/api/cars/:id', CarController.Update )

module.exports = router;