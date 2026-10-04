async function insertData(nombre, apellido, edad, correo) {
  try {
    // Insertamos datos en la tabla alumnos
    await db.run("INSERT INTO alumnos (nombre, apellido, edad, correo) VALUES (?, ?, ?, ?)", [nombre, apellido, edad, correo]);
    console.log('Datos insertados exitosamente');
  } catch (error) {
    console.error('Error al insertar datos:', error);
  }
}