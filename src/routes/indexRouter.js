const albumsRouter = require('./albums');
const tracksRouter = require('./tracks');

const setupRoutes = (app) => {
  app.use('/api/albums', albumsRouter );
  app.use('/api/tracks', tracksRouter);
};

module.exports = setupRoutes;