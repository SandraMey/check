const tracksRouter = require('express').Router();
const { findAll, findOneById } = require('../models/tracks');

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

module.export = tracksRouter;