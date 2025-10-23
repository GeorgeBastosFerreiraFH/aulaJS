aluno = {
    nome: "George Bastos",
    idade: 37,
    notas: [9, 5, 10],
    calcularMedia() {
        const soma = this.notas.reduce((acc, n) => acc + n, 0);
        return media = soma / this.notas.length;
    }
}

const {nome, idade } = aluno;

aluno.notas = [...aluno.notas, 8];

const verificarSituacao = media => media >= 7 ? "Aprovado" : "Reprovado";

console.log(`--- Boletim Escolar ---`);
console.log(`Nome: ${nome}`);
console.log(`Idade: ${idade} anos`);
console.log(`-----------------------`);
console.log("Todas as notas:");

aluno.notas.forEach((nota, index) => {
  console.log(`Nota ${index + 1}: ${nota}`);
});

console.log(`-----------------------`);

const mediaFinal = aluno.calcularMedia();

console.log(`Média Final: ${mediaFinal.toFixed(2)}`);
console.log(`=======================`);
console.log(`Situação: ${verificarSituacao(mediaFinal)}`);
console.log(`=======================`);