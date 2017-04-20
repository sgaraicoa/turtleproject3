const db = require('../db');

const Cocktails = {};

Cocktails.findAll = () => {
    return db.any(`SELECT * FROM cocktails`);
}

module.exports = Cocktails;
