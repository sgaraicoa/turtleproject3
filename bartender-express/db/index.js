const pgp = require('pg-promise')();

const db = pgp(process.env.DATABASE_URL || 'postgres://samanthagaraicoa@localhost:5432/cocktaildb')

module.exports = db;
