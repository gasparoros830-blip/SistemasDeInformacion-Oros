const Database = require('better-sqlite3');
const path = require('path');

const rutaArchivo = path.join(__dirname, 'datos.db');

const db = new Database(rutaArchivo);

db.pragma('journal_mode = WAL');

db.exec(`
  CREATE TABLE IF NOT EXISTS usuarios (
    id             INTEGER PRIMARY KEY AUTOINCREMENT,
    nombre         TEXT    NOT NULL,
    email          TEXT    NOT NULL UNIQUE,
    password       TEXT    NOT NULL,
    fecha_registro TEXT    DEFAULT CURRENT_TIMESTAMP
  )
`);

module.exports = db;