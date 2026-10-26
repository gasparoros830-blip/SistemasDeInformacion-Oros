
const express = require('express');
const cors = require('cors');
const db = require('./db');

const app = express();
const PUERTO = 3000;

// --- Middlewares ---
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// --- Arranque ---
app.listen(PUERTO, () => {
  console.log(`Servidor escuchando en http://localhost:${PUERTO}`);
});

app.post('/api/registro', (req, res) => {


  // 1. Extraemos los datos que envió el formulario
  const { nombre, email, password } = req.body;

  // 2. Validación básica
  if (!nombre || !email || !password) {
    return res.status(400).json({
      ok: false,
      mensaje: 'Todos los campos son obligatorios'
    });
  }

  // 3. Intentamos guardar en la base de datos
  try {
    const sentencia = db.prepare(
      'INSERT INTO usuarios (nombre, email, password) VALUES (?, ?, ?)'
    );

    const resultado = sentencia.run(nombre, email, password);

    res.status(201).json({
      ok: true,
      mensaje: 'Usuario registrado correctamente',
      id: resultado.lastInsertRowid
    });

  } catch (error) {

    // 4. Email duplicado (restricción UNIQUE)
    if (error.code === 'SQLITE_CONSTRAINT_UNIQUE') {
      return res.status(409).json({
        ok: false,
        mensaje: 'Ese email ya está registrado'
      });
    }

    // 5. Cualquier otro error
    console.error('Error al insertar:', error);
    res.status(500).json({
      ok: false,
      mensaje: 'Error interno del servidor'
    });
  }

});

app.get('/api/respuestas', (req, res) => {
  
})