const express = require('express');
const router = express.Router();
const Person = require('../models/Person');
const PersonController = require('../controller/PersonController');

router
    .post('/api/person', PersonController.CreatePerson)
    .get('/api/person', PersonController.GetAll)
    .get('/api/person/:id', PersonController.GetById)
    .delete('/api/person/:id', PersonController.Delete)

module.exports = router;