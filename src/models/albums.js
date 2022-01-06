const connexion = require('../connexion');

const findAllAlbum = () => connexion.promise().query('SELECT * FROM albums');

const findOneAlbumsById = (id) => connexion.promise().query('SELECT * FROM albums WHERE id = ?', [id]);

module.exports = {
    findAllAlbum,
    findOneAlbumsById
}