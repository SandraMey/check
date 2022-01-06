const tracksRouter = require('express').Router();
const { findAll, findOneById, insertTracks } = require('../models/tracks');

tracksRouter.get('/', async (req, res) => {
    const [[tracks]] = await findAll()
        .then(([tracks]) => {
            res.json(tracks)
        })
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
    }, id_album);
});

module.export = tracksRouter;