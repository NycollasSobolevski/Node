const express = require('express');
const router = express.Router();
const Person = require('../models/Person');

const people = []

router
    .get('/api/person/first', ( req, res ) => {
        console.log("Hello in console");
        return;
    })
    .post('/api/person', async ( req, res ) => {
        let { name, lastname, salary } = req.body;

        if(!name || !lastname || !salary)
            return res.status(400).send({ message: "Invalid data"});

        let person = {
            name: name,
            lastname: lastname,
            salary: salary
        };

        let p = await Person.create(person);
        return res.status(201).send({ message: "Pessoa inserida com sucesso", body: p });
    })
    .get('/api/person', ( req, res ) => {
        return res.status(200).send({ data: people })
    })

module.exports = router;