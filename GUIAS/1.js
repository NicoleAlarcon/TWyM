//Crear un algoritmo que solicite al usuario un número entero positivo. 

let numero = parseInt(prompt('Ingrese un número entero positivo:', 0));

//Luego, utilizar un ciclo
//para calcular la suma de todos los números pares desde 1 hasta el número ingresado por el
//usuario. Mostrar el resultado de la operación en el navegador.

if (!isNaN(numero) && numero > 0) {
    let suma = 0;

for (let i = 2; i <= numero; i +=2) {
        suma += i;
    }
    document.write('La suma de todos los números pares ingresados desde  el 1 hasta ' + numero + ' es: ' + suma);
}
    else {
        document.write("Por favor ingrese lo que se solicita");
}