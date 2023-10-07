/* Escribir un programa en el que se pregunte al usuario una frase y una letra,
y muestre por pantalla el número de veces que aparece la letra en la frase */

let frase = prompt("Ingrese una frase: ");

let letra = prompt("Ingrese una letra:");

let contador = 0;

for (let i = 0; i < frase.length; i++) {
  if (frase.charAt(i).toLowerCase() === letra.toLowerCase()) {
    contador++;
  }
}

document.write("La letra '" + letra + "' aparece " + contador + " veces en la frase: '" + frase + "'");
