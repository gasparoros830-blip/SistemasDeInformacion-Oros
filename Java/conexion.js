let mysql = require('mysql');

let conexion = mysql.createConnection({
    host: "localhost",
    database: "RegistroAlumnos",
    user: "root",
    password: ""
})

conexion.connect(function (error) {
    if (error) {
        throw error;
    } else {
        console.log("Conexion exitosa");
    }
})
