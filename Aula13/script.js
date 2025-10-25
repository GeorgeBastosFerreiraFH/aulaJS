const formCadastro = document.getElementById('formCadastro');
const inputNome = document.getElementById('inputNome');
const inputUsuario = document.getElementById('inputUsuario');
const inputSenha = document.getElementById('inputSenha');
const inputEmail = document.getElementById('inputEmail');
const inputDataNascimento = document.getElementById('inputDataNascimento');

const erroNome = document.getElementById('erroNome');
const erroUsuario = document.getElementById('erroUsuario');
const erroSenha = document.getElementById('erroSenha');
const erroEmail = document.getElementById('erroEmail');
const erroDataNascimento = document.getElementById('erroDataNascimento');
const mensagemSucesso = document.getElementById('mensagemSucesso');

function calcularIdade(dataNascimento) {
    const nascimento = new Date(dataNascimento);

    if (isNaN(nascimento.getTime())) {
        throw new Error("Data inválida. Use o formato AAAA-MM-DD.");
    }

    const hoje = new Date();
    let idade = hoje.getFullYear() - nascimento.getFullYear();
    const mes = hoje.getMonth() - nascimento.getMonth();

    if (mes < 0 || (mes === 0 && hoje.getDate() < nascimento.getDate())) {
        idade--;
    }
    return idade;
}

function mostrarErro(input, elementoErro, mensagem) {
    elementoErro.textContent = mensagem;
    elementoErro.classList.add('mostrar');
    input.classList.add('inputErro');
}

function limparErro(input, elementoErro) {
    elementoErro.textContent = '';
    elementoErro.classList.remove('mostrar');
    input.classList.remove('inputErro');
}

[inputNome, inputUsuario, inputSenha, inputEmail, inputDataNascimento].forEach((input) => {
    input.addEventListener('keyup', () => validarCampo(input));
    input.addEventListener('blur', () => validarCampo(input));
});


function validarCampo(input) {
    switch (input.id) {
        case 'inputNome':
            try {
                if (input.value.trim() === '') {
                    throw new Error('Por favor, insira seu nome completo.');
                }
                limparErro(input, erroNome);
            } catch (erro) {
                mostrarErro(input, erroNome, erro.message);
            }
            break;

        case 'inputUsuario':
            try {
                if (input.value.trim() === '') {
                    throw new Error('Por favor, insira um nome de usuário.');
                }
                limparErro(input, erroUsuario);
            } catch (erro) {
                mostrarErro(input, erroUsuario, erro.message);
            }
            break;

        case 'inputSenha':
            try {
                if (input.value.trim() === '') {
                    throw new Error('Por favor, insira uma senha.');
                }
                if (input.value.length < 6) {
                    throw new Error('A senha deve ter pelo menos 6 caracteres.');
                }
                limparErro(input, erroSenha);
            } catch (erro) {
                mostrarErro(input, erroSenha, erro.message);
            }
            break;

        case 'inputEmail':
            try {
                if (input.value.trim() === '') {    
                    throw new Error('Por favor, insira seu email.');
                }
                if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value)) {
                    throw new Error('Por favor, insira um email válido (ex: seu@email.com).');
                }
                limparErro(input, erroEmail);
            } catch (erro) {
                mostrarErro(input, erroEmail, erro.message);
            }
            break;

        case 'inputDataNascimento':
            try {
                if (input.value.trim() === '') {
                    throw new Error("Por favor, insira sua data de nascimento.");
                }

                const idade = calcularIdade(input.value);
                
                if (idade < 18) {
                    throw new Error("Você deve ter pelo menos 18 anos para se cadastrar.");
                }
                limparErro(input, erroDataNascimento);
            } catch (erro) {
                mostrarErro(input, erroDataNascimento, erro.message);
            }
            break;
    }
}

formCadastro.addEventListener('submit', function(event) {
    event.preventDefault();
    mensagemSucesso.classList.remove('mostrar');

    [inputNome, inputUsuario, inputSenha, inputEmail, inputDataNascimento].forEach(input => validarCampo(input));

    const errosAtivos = document.querySelectorAll('.inputErro');

    if (errosAtivos.length === 0) {
        mensagemSucesso.textContent = "Cadastro realizado com sucesso!";
        mensagemSucesso.classList.add('mostrar');
        console.log("Formulário enviado com sucesso!");
        console.log("Nome:", inputNome.value);
        console.log("Usuário:", inputUsuario.value);
        console.log("Senha:", inputSenha.value);
        console.log("Email:", inputEmail.value);
        console.log("Data de Nascimento:", inputDataNascimento.value);
        formCadastro.reset();
    }
});