/* Crear una función que calcule el total de una factura tras aplicarle el IVA.
La función debe recibir la cantidad sin IVA y el procentaje de IVA a aplicar,
y devolver el total de la factura (la cantidad y porcentaje debe ingresar el usuario
por navegador). Si se invoca la función sin pasarle el porcentaje de IVA, deberá aplicar un 19% por defecto
*/

function calcularTotalConIVA(cantidadSinIVA, porcentajeIVA = 19) {
    if (typeof cantidadSinIVA !== 'number' || cantidadSinIVA < 0) {
      return "La cantidad sin IVA debe ser un número positivo";
    }
  
    if (typeof porcentajeIVA !== 'number' || porcentajeIVA < 0) {
      return "El porcentaje de IVA debe ser un número positivo";
    }
  
    let total = cantidadSinIVA + (cantidadSinIVA * (porcentajeIVA / 100));
  
    return total;
  }
  
  let cantidadSinIVA = parseFloat(prompt("Ingrese la cantidad sin IVA: "));
  let porcentajeIVA = parseFloat(prompt("Ingrese el porcentaje de IVA (opcional, 19% por defecto): ")) || 19;
  
  let totalFactura = calcularTotalConIVA(cantidadSinIVA, porcentajeIVA);
  
  if (typeof totalFactura === 'number') {
    document.write(`El total de la factura con ${porcentajeIVA}% de IVA es: $${totalFactura.toFixed(2)}`);
  } else {
    document.write(totalFactura);
  }
  