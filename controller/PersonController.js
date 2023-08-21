const Person = require('../models/Person');

class PersonController {
    static async CreatePerson ( req, res ){
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
    };

    static async GetAll ( req, res ){
        try{
            let person = await Person.find();
            return res.status(200).send({ data: person })
        }
        catch{
            return res.status(500, "Internal server error")
        }
    }

    static async GetById ( req, res ){
        let id = req.params.id;
        try{
            let person = await Person.findById(id);
            if(person === null)
                return res.status(401, "This id is null")
            return res.status(201, { data: person})
        }
        catch{
            return res.status(500, "Internal server error")
        }
    }

    static async Delete ( req, res ) {
        let { id } = req.params.id;
        if ( !id ) {
            return res.status(400, { message: "No id provider" })
        }

        try{
            await Person.findByIdAndRemove(id);
            return res.status(200, "Person deleted seccessfully")
        }
        catch( err ) {

        }
    }
}

module.exports = PersonController;