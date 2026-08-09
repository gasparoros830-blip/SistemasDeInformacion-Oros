let UltimoCalculo=null

function insertar(valor) {
    document.getElementById("display").value += valor;
}

function limpiar() {
    document.getElementById("display").value = "";
}

function borrar() {
    let display = document.getElementById("display");
    display.value = display.value.slice(0, -1);
}

function calcular() {
 try{
    UltimoCalculo=(document.getElementById("display").value);
    let resultado = eval(document.getElementById("display").value);
    document.getElementById("display").value = resultado;
    }
    catch {
    document.getElementById("display").value = "Error";
    }
}

function anterior() {
    let display = document.getElementById("display");
    document.getElementById("display").value = "";
    document.getElementById("display").value += UltimoCalculo;
}