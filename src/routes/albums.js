const albumsRouter = require('express').Router();
const { findAllAlbums } = require('../models/albums');

albumsRouter.get('/', async (req, res) => {
    const [albums] = await findAllAlbums()
    if (albums) {
        res.json(albums)
    } else {
        res.status(404).json();
    }
});

module.exports = albumsRouter;