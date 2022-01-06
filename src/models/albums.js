const connexion = require('../connexion');

const findAllAlbums = () => connexion.promise().query('SELECT * FROM albums');

const findOneAlbumsById = (id) => connexion.promise().query('SELECT * FROM albums WHERE id = ?', [id]);

const findTracksById = (id) => connexion.promise().query('SELECT * FROM track WHERE id_album = ?', [id]);

const insertAlbums = ({
    title,
    genre,
    picture,
    artist
}) => connexion.promise().query('INSERT INTO tracks (title, genre, picture, artist) VALUES (?, ?, ?, ?)',[
    title,
    genre,
    picture,
    artist
]);

module.exports = {
    findAllAlbums,
    findOneAlbumsById,
    findTracksById,
    insertAlbums
}