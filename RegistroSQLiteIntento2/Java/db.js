import sqlite from 'sqlite3'; 
const dbPath = 'Database/RegistroAlumnos.db'; 
const db = new sqlite.Database(dbPath);

async function insertData(nombre, apellido, edad, correo) { 
    try { await db.run("INSERT INTO Alumnos (nombre, apellido, edad, correo) VALUES (?, ?, ?, ?)", [nombre, apellido, edad, correo]); 
    console.log('Datos insertados exitosamente'); 
} catch (error) { 
    console.error('Error al insertar datos:', error);
 } 
}

async function fetchData() { 
    try { const users = await db.all("SELECT * FROM Alumnos"); 
    console.log('Todos los alumnos:', users);
 } catch (error) { 
    console.error('Error al obtener datos:', error);
 } 
}