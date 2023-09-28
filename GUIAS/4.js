//Solicitar al usuario que ingrese una serie de números separados por comas. Encontrar y
//mostrar el número más grande entre los números ingresados.

let serieDeNumeros = prompt('Ingrese números separados por comas: ');
let numeros = serieDeNumeros.split(',').map(function(numero) {
  return parseFloat(numero);
});

let numeroMaximo = numeros.filter(function(numero) {
  return !isNaN(numero);
});

if (numeroMaximo.length > 0) {
  let maximo = Math.max.apply(null, numeroMaximo);
  document.write("El numero ingresado más grande es: " + maximo);
} else {
  document.write ("No se ingresaron números válidos");
}
