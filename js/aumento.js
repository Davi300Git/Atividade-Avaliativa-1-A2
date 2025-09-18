function calcularAumento() {
    // pega o valor digitado e converte para número
    let salario = parseFloat(document.getElementById("salario").value);

    if (isNaN(salario) || salario <= 0) {
        alert("Por favor, digite um salário válido!");
        return;
    }

    // calcula aumento de 25%
    let salarioComAumento = salario * 1.25;

    // mostra os resultados na página
    document.getElementById("salarioAtual").innerText =
        "💰 Salário atual: R$ " + salario.toFixed(2);

    document.getElementById("salarioAjustado").innerText =
        "📈 Salário com aumento de 25%: R$ " + salarioComAumento.toFixed(2);
}
