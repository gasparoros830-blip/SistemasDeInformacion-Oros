   const sqlite3 = require('sqlite3').verbose();

   // Conecta al archivo local existente o lo crea si no existe
   const db = new sqlite3.Database('Database\\RegistroAlumnos.db', (err) => {
     if (err) {
       console.error('Error al conectar:', err.message);
     } else {
       console.log('Conectado exitosamente a la base de datos SQLite local.');
     }
   });