const User = require('../models/User')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
require('dotenv').config();

class AuthController {
    static async login ( req, res ) {

        let { email, password } = req.body;

        if(!email || !password)
            return res.status(401).send({ message: "Not all data provided" });

        try {

            let user = await User.findOne({ email:email });
            let secret = process.env.SECRET;

            if( !user )
                return res.status(401).send({ message: "User not found" });
            if(!await bcrypt.compare(password, user.password))
                return res.status(401).send({ message: "User not found" });
            
            let token  = jwt.sign(
                {
                    id: user._id
                },
                secret,
                {
                    expiresIn: '2 days'
                }
            );
            return res.status(200).send({ token: token });
        }
        catch (err) {
            return res.status(500).send({ message: ("Something failed. " + err)});
        }
    };


    static async register ( req, res ) {
        const { name, email, password } = req.body;

        if( !name|| !email || !password)
            return res.status(400).send({message: "No all data providaded"})

        let salt = await bcrypt.genSalt(12);
        let passwordHash = await bcrypt.hash(password, salt);

        let user = new User({
            name,
            email,
            password : passwordHash
        })

        try {
            await user.save();
            return res.status(201).send( {message: "User successfull inserted!"} );
        }
        catch {
            return res.status(500).send( {message: "Something failed"} )
        }
    };
}

module.exports = AuthController;