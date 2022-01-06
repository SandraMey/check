const albumsRouter = require('express').Router();
const { findAllAlbums, findOneAlbumsById, findTracksById, insertAlbums, updateAlbums } = require('../models/albums');

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

albumsRouter.get('/:id/tracks', async (req, res) => {
    const [tracks] = await findTracksById(req.params.id);
    if (tracks) {
        res.json(tracks);
    } else {
        res.status(404).json();
    }
});

albumsRouter.post('/', async (req, res) => {
    const [{insertId: id}] = await insertAlbums(req.body);
    const newAlbums = req.body;
    res.status(201).json({
        id,
        ...newAlbums
    });
});

albumsRouter.put('/:id', async (req, res) => {
    await updateAlbums(req.body, req.params.id)
    res.status(204).json();
})

module.exports = albumsRouter;