function calcular() {
    // Pega os valores dos inputs
    let HT = parseFloat(document.getElementById("ht").value);
    let VH = parseFloat(document.getElementById("vh").value);
    let PA = parseFloat(document.getElementById("pa").value);

    // Calcula Salário Bruto
    let SB = HT * VH;

    // Calcula Novo Salário com aumento
    let NS = SB + ((SB * PA) / 100);

    // Exibe os resultados
    document.getElementById("salarioBruto").innerText = "Salário Bruto (SB): R$ " + SB.toFixed(2);
    document.getElementById("novoSalario").innerText = "Novo Salário (NS): R$ " + NS.toFixed(2);
  }