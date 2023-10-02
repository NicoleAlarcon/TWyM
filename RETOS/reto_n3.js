const montoInput = document.getElementById('monto');
const porcentajeSelect = document.getElementById('porcentaje');
const calcularButton = document.getElementById('calcular');
const resultadoDiv = document.getElementById('resultado');
const montoPropinaSpan = document.getElementById('montoPropina');
const totalPagarSpan = document.getElementById('totalPagar');

calcularButton.addEventListener('click', () => {
    const monto = parseFloat(montoInput.value);
    const porcentaje = parseFloat(porcentajeSelect.value);
    
    if (calcular.style.display === 'block') {
        calcular.style.display = 'none';
    } else {
        calcular.style.display = 'block';
    }

    const propina = (monto * porcentaje) / 100;
    const totalPagar = monto + propina;

    montoPropinaSpan.textContent = propina.toFixed(2);
    totalPagarSpan.textContent = totalPagar.toFixed(2);

    resultadoDiv.style.display = 'block';
});
