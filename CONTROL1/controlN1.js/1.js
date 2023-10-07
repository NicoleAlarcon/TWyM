/*
En una empresa del área TI, sus trabajadores son calificados al final de cada año. Los puntos que pueden
obtener  en la evaluación comienzan en 0.0 y pueden ir aumentando, y de esta forma se traduce en mejores beneficios.
Los puntos que pueden conseguir los empleados pueden ser 0.0, 0.2, 0.4, 0.6, 0.8, pero no valores intermedios entre las cifras mencionadas.
A continuación se muestra una tabla con los niveles correspondientes a cada puntuación. La cantidad de dinero conseguida
en cada nivel es de $350.000 multiplicada por la puntuación del nivel correspondiente.
*/

let puntos = parseFloat(prompt("Ingrese la puntuación del empleado:" ));

if (puntos === 0.0 || puntos === 0.2 || puntos === 0.4 || puntos === 0.6 || puntos === 0.8) {
    let rendimiento = {
        0.2: "Insuficiente",
        0.4: "Aceptable",
        0.6: "Meritorio",
        0.8: "Excelente"
      };

      let nivelDeRendimiento = rendimiento[puntos];

  let cantidadDinero = 350000 * puntos;

  document.write("El empleado obtiene $" + cantidadDinero + " en función de su puntuación de " + puntos + " " + nivelDeRendimiento );
} else {
  document.write("La puntuación ingresada no es válida. Debe ser 0.0, 0.2, 0.4, 0.6 o 0.8.");
}
