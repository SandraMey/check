const albumsRouter = require('express').Router();
const {  findAllAlbums,
  findOneAlbumsById ,
  insertAlbum,
  deleteAlbum,
  updateAlbum,
  findAllTracksFromAlbum,

} = require('../models/albums');

albumsRouter.get('/', (req, res) => {
  findAllAlbums().then(([albums]) => {
    res.json(albums);
  });
});

albumsRouter.get('/:id', async (req, res) => {
  const [[album]] = await findOneAlbumsById(req.params.id);
  if (album) {
    res.json(album);
  } else {
    res.status(404).json();
  }
})

albumsRouter.get('/1/tracks', async (req, res) => {
  const [[tracks]] = await findAllTracksFromAlbum();
  if (tracks) {
    res.json(tracks);
  } else {
    res.status(404).json();
  }
})

albumsRouter.post('/', async (req, res) => {
  const [{insertId: id}] = await insertAlbum(req.body);
  const newAlbum = req.body;
  res.status(201).json({
    id,
    ...newAlbum
  });
})

albumsRouter.delete('/:id', async (req, res) => {
  await deleteAlbum(req.params.id);
  res.status(204).json();
})

albumsRouter.put('/:id', async (req, res) => {
  await updateAlbum(req.body, req.params.id)
  res.status(204).json();
})

module.exports = albumsRouter;