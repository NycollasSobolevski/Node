const express = require('express');
const router = require('./routes');
const app = express();

require('./startup/db')();

const port = 8080;

router(app);


const server = app.listen(port, () => 
    console.log(`Listening on port ${port} \nhttp://localhost:${port}/api/ \n`)
);


module.exports = server;
