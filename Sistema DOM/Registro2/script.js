const Boton = document.getElementById("BotonAgregar");
let Nombre = document.getElementById("inputNombre").value;
let Legajo = document.getElementById("inputLegajo").value;

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

Boton.addEventListener("click", function(AgregarAlumno) {
        const Alumno1 = new Alumno(Nombre, Legajo)
    console.log(Alumno1)
});
