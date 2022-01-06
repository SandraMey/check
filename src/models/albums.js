const connexion = require('../connexion');

const findAllAlbums = () => connexion.promise().query('SELECT * FROM albums');

const findOneAlbumsById = (id) => connexion.promise().query('SELECT * FROM albums WHERE id = ?', [id]);

const findTracksById = (id) => connexion.promise().query('SELECT * FROM track WHERE id_album = ?', [id]);

const insertAlbums = ({
    title,
    genre,
    picture,
    artist
}) => connexion.promise().query('INSERT INTO albums (title, genre, picture, artist) VALUES (?, ?, ?, ?)',[
    title,
    genre,
    picture,
    artist
]);

const updateAlbums = (object, id) => connexion.promise().query('UPDATE albums SET ? WHERE id = ?', [object, id]);

module.exports = {
    findAllAlbums,
    findOneAlbumsById,
    findTracksById,
    insertAlbums,
    updateAlbums
}