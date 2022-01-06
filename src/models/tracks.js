const connection = require('../config/db-config');
const db = connection.promise();

const findAll = () => db.query('SELECT * FROM tracks');

const findOneById = (id) => db.query('SELECT * FROM tracks WHERE id = ?', [id]);

const insertTracks = ({
    title,
    youtube_url,
    id_album
}) => db.query('INSERT INTO tracks (title, youtube_url, id_album) VALUES (?, ?, ?)',[
    title,
    youtube_url,
    id_album
]);

const updateTracks = (object, id) => db.query('UPDATE tracks SET ? WHERE id = ?', [object, id]);

const deleteTracks = (id) => db.query('DELETE FROM tracks WHERE id = ?', [id]);

module.exports = {
    findAll,
    findOneById,
    insertTracks,
    updateTracks,
    deleteTracks
}