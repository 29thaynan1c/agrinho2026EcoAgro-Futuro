function calcularImpacto() {
    // Captura o elemento select do HTML
    const dropdown = document.getElementById("pratica-agro");
    // Pega o valor da porcentagem selecionada
    const porcentagemEconomia = parseInt(dropdown.value);
    // Captura a div onde o resultado será exibido
    const resultadoDiv = document.getElementById("resultado");

    if (porcentagemEconomia === 0) {
        resultadoDiv.style.color = "#d32f2f";
        resultadoDiv.innerHTML = "Por favor, selecione uma prática válida!";
        return;
    }

    // Supondo um consumo médio padrão de 500.000 litros de água por hectare/ano em cultivos irrigados tradicionais
    const consumoPadrao = 500000;
    const aguaEconomizada = (consumoPadrao * porcentagemEconomia) / 100;

    // Altera o estilo e o texto do resultado na tela
    resultadoDiv.style.color = "#1b4d3e";
    resultadoDiv.innerHTML = `
        <strong>Excelente escolha!</strong><br><br>
        Implementando essa prática, estima-se uma economia de 
        <span style="color: #2e7d32; font-size: 20px;">${aguaEconomizada.toLocaleString('pt-BR')}</span> 
        litros de água por hectare ao ano!
    `;
}