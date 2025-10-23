let idade = Number(prompt("Digite sua idade: "));
let statusUsuario = Number(prompt("Qual o status do seu registro? \n(1 - Registrado / 2 - Não Registrado): "));

let resultadoIdade = ( idade >= 18 ) ? "Maior de idade" : "Menor de idade";

let resultadoStatus;

switch (statusUsuario) {
    case 1:
        resultadoStatus = 'Seja bem-vindo, usuário registrado!';
        break;
    case 2:
        resultadoStatus = 'Por favor, registre-se para continuar.';
        break;

    default:
        resultadoStatus = 'Status desconhecido.';
        break;
}

if (resultadoIdade === "Maior de idade" && statusUsuario === 1) {
    console.log("Acesso permitido. " + resultadoStatus);
} else {
    console.log("Acesso limitado. " + resultadoIdade + ", " + resultadoStatus);
}