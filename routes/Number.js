const express = require("express");
const router = express.Router();

router
    .get("/number/:number?", ( req, res ) => {
        const { number } = req.params;
        res.send(`Received number: ${ number }`);
    })
    .get('/query', ( req, res ) => {
        const { number } = req.query;
        const { seccondNumber } = req.query;
        res.send(`Numero passado pela query ${number}, ${seccondNumber}`)
    })

module.exports = router;