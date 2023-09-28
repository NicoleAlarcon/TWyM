//Realizar un programa que permita al usuario ingresar su estatura y peso, para que se
//muestre en el navegador su IMC correspondiente. Además de mostrar el IMC, indicar si está
//en la categoría de: “Bajo Peso”, “Peso Normal” o “Sobrepeso”.

let estatura = parseFloat(prompt("Ingrese su estatura (ejemplo, 1.75):"));
let peso = parseFloat(prompt("Ingrese su peso (ejemplo, 70):"));

if (!isNaN(estatura) && !isNaN(peso) && estatura > 0 && peso > 0) {
  let imc = peso / (estatura * estatura);

  let categoria = "";
  if (imc < 18.5) {
    categoria = "Bajo Peso";
  } else if (imc >= 18.5 && imc < 24.9) {
    categoria = "Peso Normal";
  } else {
    categoria = "Sobrepeso";
  }

  document.write("Su IMC es: " + imc.toFixed(2) + '<br>');
  document.write("Categoría: " + categoria);
} else {
  document.write("Por favor, ingrese estatura y peso válidos.");
}
