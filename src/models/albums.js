const connexion = require('../connexion');

const findAllAlbums = () => connexion.promise().query('SELECT * FROM albums');

const findOneAlbumsById = (id) => connexion.promise().query('SELECT * FROM albums WHERE id = ?', [id]);

const findTracksById = (id) => connexion.promise().query('SELECT * FROM track WHERE id_album = ?', [id]);

module.exports = {
    findAllAlbums,
    findOneAlbumsById,
    findTracksById
}