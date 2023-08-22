const Product = require('../models/Products');

class ProductController {
    static async CreateProduct ( req, res) {
        let product = req.body;

        try{
            let prod = await Product.create( product )
    
            return res.status(200).send({ message: ("insert successfull" + prod) })
        }
        catch{
            return res.status(401).send({ message: "Server is broken" })
            
        }
    }

    static async DeleteProduct ( req, res ) {
        let id = req.params.id
        try{
            await Product.findByIdAndDelete( id )
    
            return res.status(200).send({ message: "delete successfull" })
        }
        catch{
            return res.status(401).send({ message: "Server is broken" })
            
        }
    }
}

module.exports = ProductController;