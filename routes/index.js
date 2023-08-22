const bodyParser = require('body-parser');
const person = require('./Person');
const number = require('./Number');
const cars = require('./Cars');
const auth = require('./auth');
const product = require('./Products');

module.exports = (app) => {
        app.use(
        bodyParser.json(),
        person,
        number,
        cars,
        auth,
        product
    )
}