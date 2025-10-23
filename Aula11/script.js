const cadastroForm = document.getElementById('cadastroForm');
const nomeInput = document.getElementById('nomeUsuario');
const senhaInput = document.getElementById('senhaUsuario');
const numeroTelefone = document.getElementById('numeroTelefone');
const dataNascimento = document.getElementById('dataNascimento');
const emailInput = document.getElementById('emailUsuario');
const listaUsuarios = document.getElementById('usuariosContainer');
const botaoLimpar = document.getElementById('botaoLimpar');
const erroNome = document.getElementById('erroNome');
const erroSenha = document.getElementById('erroSenha');
const erroTelefone = document.getElementById('erroTelefone');
const erroData = document.getElementById('erroData');
const erroEmail = document.getElementById('erroEmail');
const limparListaContainer = document.getElementById('limparListaContainer');

function renderizarBotaoLimparLista() {
    if (listaUsuarios.children.length === 0) {
        limparListaContainer.innerHTML = '';
        return;
    }
    if (document.getElementById('botaoLimparLista')) {
        return;
    }

    const botaoLimparLista = document.createElement('button');
    botaoLimparLista.type = 'button';
    botaoLimparLista.id = 'botaoLimparLista';
    botaoLimparLista.textContent = 'Limpar Lista de Usuários';

    botaoLimparLista.addEventListener('click', function() {
        listaUsuarios.innerHTML = '';
        limparListaContainer.innerHTML = '';
    });

    limparListaContainer.appendChild(botaoLimparLista);
}

cadastroForm.addEventListener('submit', function(event) {
    event.preventDefault();

    erroNome.textContent = '';
    erroSenha.textContent = '';
    erroTelefone.textContent = '';
    erroData.textContent = '';
    erroEmail.textContent = '';

    let valido = true;

    if (nomeInput.value.trim() === '') {
        erroNome.textContent = 'O nome de usuário é obrigatório.';
        console.log('O nome de usuário é obrigatório.');
        valido = false;
    }

    if (senhaInput.value.trim() === '') {
        erroSenha.textContent = 'A senha é obrigatória.';
        console.log('A senha é obrigatória.');
        valido = false;
    } else if (senhaInput.value.length < 6) {
        erroSenha.textContent = 'A senha deve ter pelo menos 6 caracteres.';
        console.log('A senha deve ter pelo menos 6 caracteres.');
        valido = false;
    }

    if (numeroTelefone.value.trim() === '') {
        erroTelefone.textContent = 'O número de telefone é obrigatório.';
        console.log('O número de telefone é obrigatório.');
        valido = false;
    }

    if (dataNascimento.value === '') {
        erroData.textContent = 'A data de nascimento é obrigatória.';
        console.log('A data de nascimento é obrigatória.');
        valido = false;
    }

    if (emailInput.value.trim() === '') {
        erroEmail.textContent = 'O email é obrigatório.';
        console.log('O email é obrigatório.');
        valido = false;
    }

    if (valido) {
        alert('Cadastro realizado com sucesso!');

        const card = document.createElement('div');
        card.classList.add('card-usuario');

        const nomeCard = document.createElement('h3');
        nomeCard.textContent = nomeInput.value;

        const telefoneCard = document.createElement('p');
        telefoneCard.textContent = `Telefone: ${numeroTelefone.value}`;

        const dataCard = document.createElement('p');
        dataCard.textContent = `Data de Nascimento: ${dataNascimento.value}`;

        const emailCard = document.createElement('p');
        emailCard.textContent = `Email: ${emailInput.value}`;

        card.appendChild(nomeCard);
        card.appendChild(telefoneCard);
        card.appendChild(dataCard);
        card.appendChild(emailCard);

        listaUsuarios.appendChild(card);

        cadastroForm.reset();

        renderizarBotaoLimparLista();
    }
});

botaoLimpar.addEventListener('click', function() {
    nomeInput.value = '';
    senhaInput.value = '';
    numeroTelefone.value = '';
    dataNascimento.value = '';
    emailInput.value = '';

    erroNome.textContent = '';
    erroSenha.textContent = '';
    erroTelefone.textContent = '';
    erroData.textContent = '';
    erroEmail.textContent = '';
});

renderizarBotaoLimparLista();
