import express from 'express';
import sqlite from 'sqlite3';

const app = express();
app.use(express.urlencoded({ extended: true }));

const dbPath = './database.db';
const db = new sqlite.Database(dbPath);

// Ruta para recibir los datos del formulario HTML
app.post('/agregar', async (req, res) => {
  const { nombre, apellido, edad, correo } = req.body;
  try {
    await db.run("INSERT INTO users (nombre, apellido, edad, correo) VALUES (?, ?, ?, ?)", [nombre, apellido, edad, correo]);
    res.send('¡Información agregada con éxito!');
  } catch (error) {
    res.status(500).send('Error al insertar datos');
  }
});

// Ruta para extraer y mostrar la información almacenada
app.get('/alumnos', async (req, res) => {
  try {
    const alumnos = await db.all("SELECT * FROM alumnos");
    res.json(alumnos);
  } catch (error) {
    res.status(500).send('Error al extraer datos');
  }
});

app.listen(3000, () => console.log('Servidor en ejecución en http://localhost:3000'));