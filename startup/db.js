const mongoose = require('mongoose');
const config = require('config');

module.exports = function () {
    let db = config.get('db');
    mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true,})
        .then( () => console.log(`Connected to ${db}`));
}