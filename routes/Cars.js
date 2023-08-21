const express = require('express');
const router = express.Router();
const CarController = require("../controller/CarController")

router
    .get('/', CarController.GetAll )
    .get('/:id', CarController.GetById)
    .post('/', CarController.Create )
    .delete('/:id', CarController.Delete )
    .put('/:id', CarController.Update )

module.exports = router;