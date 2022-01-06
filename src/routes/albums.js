const albumsRouter = require('express').Router();
const { findAllAlbums, findOneAlbumsById } = require('../models/albums');

albumsRouter.get('/', async (req, res) => {
    const [albums] = await findAllAlbums()
    if (albums) {
        res.json(albums)
    } else {
        res.status(404).json();
    }
});

albumsRouter.get('/:id', async (req, res) => {
    const [[albums]] = await findOneAlbumsById(req.params.id);
    if (albums) {
        res.json(albums);
    } res.status(404).json();
});

module.exports = albumsRouter;