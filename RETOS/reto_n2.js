//Función para validar si la nota ingresada esta entre 1 y 7

function validarNota(nota) {
    return !isNaN(nota) >= 1 && nota <=7;
}

let nota1 = parseFloat(prompt("Ingrese la primera nota: "));
let nota2 = parseFloat(prompt("Ingrese la segunda nota: "));
let nota3 = parseFloat(prompt("Ingrese la tercera nota: "));

if (validarNota(nota1) && validarNota (nota2) && validarNota (nota3)) {
    let promedioPonderaro = (nota1 * 0.4 + nota2 * 0.3 + nota3 * 0.3).toFixed(2);
    if (promedioPonderaro < 3.95) {
        alert("El estudiante ha reprobado la asignatura con promedio: " + promedioPonderaro);
    } else if (promedioPonderaro >= 3.95 && promedioPonderaro <= 4.94) {
        alert("El estudiante va a examen con promedio: " + promedioPonderaro);
    } else {
        alert("El estudiante se exime de la asignatura con promedio: " + promedioPonderaro);
    }
} else {
    alert("Por favor ingrese notas entre 1 y 7");
}