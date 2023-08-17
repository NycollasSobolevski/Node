const express = require('express');
const router = express.Router();

var cars = [
    {
        "id": 0,
        "ano": 2022,
        "marca": "Ford",
        "modelo": "Mustang"
    },
    {
        "id": 1,
        "ano": 2021,
        "marca": "VW",
        "modelo": "Polo"
    },
    {
        "id": 2,
        "ano": 2000,
        "marca": "GM",
        "modelo": "Chevette"
    }
];

router
    .get('/api/cars', ( req, res ) => {
        return res.status(201).send({ data:cars })
    })
    .get('/api/cars/:id', ( req, res ) => {
        const id = req.params.id;
        const car = cars.filter( (car) => car.id == id );
        console.log(car);
        return res.status(201).send({ data: car })
    })
    .post('/api/cars', ( req, res ) => {
        const { year, brand, model  } = req.body;

        if(!brand || !model || !year)
            return res.status(400).send({ message: "Invalid data" });

        const car = {
            id: cars.length,
            year: year,
            brand: brand,
            model: model
        };

        cars.push(car);

        return res.status(201).send({ message: "Successfully inserted" });
    })
    .delete('/api/cars/:id', ( req,res ) => {
        cars.pop( (car) => car.id == req.params.id );

        return res.status(201).send({ message: "Successfully deleted item"});
    })
    .put('/api/cars/:id', ( req, res ) => {
        let id = parseInt(req.params.id);

        if(id === NaN || (id < 0 || id > cars.length))
            return res.status(400).send("Invalid ID")

        let { year, brand, model  } = req.body;

        let updated = {
            id: id,
            year: year,
            brand: brand,
            model: model
        }

        let index = cars.findIndex( (car) => car.id == id );
        cars[index] = updated

        return res.status(201).send({ message: "Successfully updated item" });

    })

module.exports = router;