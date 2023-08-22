const express = require('express');
const ProductController = require('../controller/ProductController');
const router = express.Router();

router
    .post('/', ProductController.CreateProduct)
    .delete('/:id', ProductController.DeleteProduct)

module.exports = router;