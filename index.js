const express = require('express');
const cors = require('cors')
const router = require('./routes');
const app = express();

app.use(cors({
    origin:'*'
}));

require('./startup/db')();
require('./startup/routes')(app);

const port = 8080;

router(app);
const server = app.listen(port, () => 
    console.log(`Listening on port ${port} \nhttp://localhost:${port}/api/ \n`)
);


module.exports = server;
