function calcularMedia() {
    // Pega os valores digitados
    let n1 = parseFloat(document.getElementById("num1").value);
    let n2 = parseFloat(document.getElementById("num2").value);
    let n3 = parseFloat(document.getElementById("num3").value);
    let n4 = parseFloat(document.getElementById("num4").value);
  
    // Calcula a média aritmética
    let media = (n1 + n2 + n3 + n4) / 4;
  
    // Exibe o resultado na página
    document.getElementById("resultado").innerText = "Média Aritmética: " + media.toFixed(2);
  }
  