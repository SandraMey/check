require('dotenv').config();
const express = require('express');
const tracksRouter = require('./routes/tracks');
const albumsRouter = require('./routes/albums');

const app = express();

app.use(express.json());

app.use('./api/tracks', tracksRouter);
app.use('./api/albums', albumsRouter);

// Please keep this module.exports app, we need it for the tests !
module.exports = app;
