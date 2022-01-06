const connection = require('../config/db-config');
const db = connection.promise();


const findAllAlbums = () => db.query('SELECT * FROM albums');

const findOneAlbumsById = (id) =>
  dataBase.query('SELECT * FROM albums WHERE id = ?', [id]);

const findAllTracksFromAlbum = () => 
  dataBase.query('SELECT * FROM tracks inner join albums on  albums.id = tracks.id_album')

const insertAlbum = ({ title,genre,picture,artist}) =>
  dataBase.query('INSERT INTO albums (title,genre,picture,artist) VALUES (?, ?, ?,?)', [
    title,
    genre,
    picture,
    artist,
  ]);

const deleteAlbum = (id) =>
  dataBase.query('DELETE FROM albums WHERE id = ?', [id]);

const updateAlbum = (object, id) =>
  dataBase.query('UPDATE albums SET ? WHERE id = ?', [object, id]);

module.exports = {
  findAllAlbums,
  findOneAlbumsById ,
  insertAlbum,
  deleteAlbum,
  updateAlbum,
  findAllTracksFromAlbum,
};