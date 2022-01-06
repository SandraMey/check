const express = require('express');
const setupRoutes = require('./routes/indexRouter');


require('dotenv').config();


const app = express();


app.use(express.json());

setupRoutes(app);

// Please keep this module.exports app, we need it for the tests !
module.exports = app;