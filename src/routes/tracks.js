const tracksRouter = require('express').Router();
const { findAll, findOneById, insertTracks, updateTracks, deleteTracks } = require('../models/tracks');

tracksRouter.get('/', async (req, res) => {
    const [track] = await findAll()
    if (track) {
        res.json(tracks)
    } else {
        res.status(404).json();
    }
});

tracksRouter.get('/:id', async (req, res) => {
    const [[track]] = await findOneById(req.params.id);
    if (track) {
        res.json(track);
    } res.status(404).json();
});

tracksRouter.post('/', async (req, res) => {
    const [{insertId: id}] = await insertTracks(req.body);
    const newTracks = req.body;
    res.status(201).json({
        id,
        ...newTracks
    });
});

tracksRouter.put('/:id', async (req, res) => {
    await updateTracks(req.body, req.params.id)
    res.status(204).json();
})

tracksRouter.delete('/:id', async (req, res) => {
    await deleteTracks(req.params.id);
    res.status(204).json();
})

module.exports = tracksRouter;