const connexion = require('../connexion');

const findAllAlbum = () => connexion.promise().query('SELECT * FROM albums');

module.exports = {
    findAllAlbum
}