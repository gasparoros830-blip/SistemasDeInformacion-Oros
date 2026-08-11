class Alumno {
    constructor(nombre, legajo) {
        this.nombre = nombre;
        this.legajo = legajo;
    }
    getInfo() {
        return `${this.nombre} (Leg. ${this.legajo})`;
    }
}
class RegistroAlumnos {
    constructor() {
        this.alumnos = [];
    }
    agregar(alumno) {
        this.alumnos.push(alumno);
    }
    listar() {
        return this.alumnos;
    }
}

function Registrar() {
    const Alumno = new Alumno(this.nombre this.legajo);
}
