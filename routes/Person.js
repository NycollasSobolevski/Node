const express = require('express');
const router = express.Router();
const PersonController = require('../controller/PersonController');

router
    .post('/', PersonController.CreatePerson)
    .get('/', PersonController.GetAll)
    .get('/:id', PersonController.GetById)
    .delete('/:id', PersonController.Delete)

module.exports = router;