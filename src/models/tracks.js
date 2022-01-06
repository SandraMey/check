const connexion = require('../connexion');

const findAll = () => connexion.promise().query('SELECT * FROM tracks');

const findOneById = (id) => connexion.promise().query('SELECT * FROM tracks WHERE id = ?', [id]);

const insertTracks = ({
    title,
    youtube_url
}, id_album) => connexion.promise().query('INSERT INTO tracks (title, youtube_url) VALUES (?, ?)',[
    title,
    youtube_url
])

module.exports = {
    findAll,
    findOneById,
    insertTracks
}