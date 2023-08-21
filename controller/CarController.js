const Cars = require('../models/Cars');

class CarController {
    static async Update ( req, res ) {
        let id = req.params.id;

        if( id == null ) {
            return res.status(400).send("Invalid ID")
        }
        let { car } = req.body;
        try{
            let updated = await Cars.findByIdAndUpdate(
                id,
                {
                    color: car.color,
                    year : car.year,
                    brand: car.brand,
                    model: car.model
                }
            );
            return res.status(200).send({ message: "Update successfully", data : updated});
        }
        catch{
            return res.status(500).send({ message: "internal server error" });
        }
    };

    static async Delete ( req,res ) {
        let id = req.params.id;

        try{
            await Cars.findByIdAndRemove(id)
            return res.status(201).send({ message: "Successfully deleted item"})
        }
        catch{
            return res.status(500).send({ message: "Internal server error"});
        }
    };

    static async Create ( req, res ) {
        let { year, brand, model, color  } = req.body;

        if(!brand || !model || !year)
            return res.status(400).send({ message: "Invalid data" });

        let car = {
            color: color,
            year: year,
            brand: brand,
            model: model
        };
        try{
            await Cars.create(car);
            return res.status(200).send({ message: "Car successfully inserted"});
        }
        catch{
            return res.status(500).send({ message: "internal server error" });
        }
    };

    static async GetById ( req, res ) {
        let id = req.params.id;
        try{
            let car = await Cars.findById(id)
            return res.status(201).send({ data: car })
        }
        catch{
            return res.status(500).send({ message: "internal server error"})
        }
    };

    static async GetAll ( req, res ) {
        let cars = await Cars.find();
        return res.status(201).send({ data:cars })
    };
}

module.exports = CarController;