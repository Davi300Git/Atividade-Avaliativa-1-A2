function calcularConsumo(kmInicial, kmFinal, litros, precoLitro) {
    // Distância percorrida
    let distancia = kmFinal - kmInicial;

    // Consumo médio (km por litro)
    let consumoMedio = distancia / litros;

    // Valor gasto
    let valorGasto = litros * precoLitro;

    return {
        distancia,
        consumoMedio,
        valorGasto
    };
}

function calcular() {
    let kmInicial = parseFloat(document.getElementById("kmInicial").value);
    let kmFinal = parseFloat(document.getElementById("kmFinal").value);
    let litros = parseFloat(document.getElementById("litros").value);
    let precoLitro = parseFloat(document.getElementById("precoLitro").value);

    let resultado = calcularConsumo(kmInicial, kmFinal, litros, precoLitro);

    document.getElementById("distancia").innerText = "Distância percorrida: " + resultado.distancia + " km";
    document.getElementById("consumo").innerText = "Consumo médio: " + resultado.consumoMedio.toFixed(2) + " km/l";
    document.getElementById("valor").innerText = "Valor gasto: R$ " + resultado.valorGasto.toFixed(2);
}
