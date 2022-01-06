const connexion = require('../connexion');

const findAll = () => connexion.promise().query('SELECT * FROM tracks');

const findOneById = (id) => connexion.promise().query('SELECT * FROM tracks WHERE id = ?', [id]);

const insertTracks = ({
    title,
    youtube_url,
    id_album
}) => connexion.promise().query('INSERT INTO tracks (title, youtube_url, id_album) VALUES (?, ?, ?)',[
    title,
    youtube_url,
    id_album
]);

const updateTracks = (object, id) => connexion.promise().query('UPDATE tracks SET ? WHERE id = ?', [object, id]);

const deleteTracks = (id) => connexion.promise().query('DELETE FROM tracks WHERE id = ?', [id]);

module.exports = {
    findAll,
    findOneById,
    insertTracks,
    updateTracks,
    deleteTracks
}