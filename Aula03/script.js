let nomes = [];

while (true) {
    nomeDigitado = prompt("Digite nomes (ou 'sair' para encerrar): ");

    if (nomeDigitado.toLowerCase() === 'sair') {
        alert("Encerrando o programa.");
        break;
    }

    nomes.push(nomeDigitado);
}

for (let i = 0; i < nomes.length; i++) {
    console.log(`Nome ${(i + 1)}: ${nomes[i]}`);
}

for (let nome of nomes) {
    console.log(`Bem-vindo(a), ${nome}`);
}