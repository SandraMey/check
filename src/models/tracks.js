const connexion = require('../connexion');

const findAll = () => connexion.promise().query('SELECT * FROM tracks');

const findOneById = (id) => connexion.promise().query('SELECT * FROM tracks WHERE id = ?', [id])

module.exports = {
    findAll,
    findOneById
}