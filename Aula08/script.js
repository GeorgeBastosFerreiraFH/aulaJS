// Objetos literais em JavaScript são estruturas usadas para organizar dados em pares de chave: valor, permitindo armazenar e manipular informações relacionadas dentro de um único agrupamento. Eles são declarados utilizando chaves {} e podem conter tanto propriedades (como variáveis internas) quanto métodos (funções associadas ao objeto).

// Abaixo segue um exemplo prático de um objeto literal chamado aluno, com as propriedades nome, notas e o método calcularMedia(). Além disso, utilizamos desestruturação para acessar o nome do aluno e o spread operator para adicionar uma nova nota ao array original:

const aluno = {
    nome: "George Bastos",
    notas: [9, 5, 7, 10],
    calcularMedia() {
        const soma = this.notas.reduce((acc, n) => acc + n, 0);
        return soma / this.notas.length;
    }
};

const { nome } = aluno;
console.log(`Nome do aluno com desestruturação: ${nome}`);

aluno.notas = [...aluno.notas, 8];
console.log(`Notas com spread operator: ${aluno.notas}`);

console.log(`Média das notas: ${aluno.calcularMedia()}`);