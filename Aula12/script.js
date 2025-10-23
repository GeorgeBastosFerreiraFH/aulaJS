function salvarNoArmazenamento(notas) {
    localStorage.setItem('notas', JSON.stringify(notas));
}

function carregarDoArmazenamento() {
    return JSON.parse(localStorage.getItem('notas') || '[]');
}

const tituloNota = document.getElementById('tituloNota');
const btnAdicionarNota = document.getElementById('btnAdicionarNota');
const listaNotas = document.getElementById('listaNotas');
const contadorNotas = document.getElementById('contadorNotas');

function gerarId() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

function renderizarNotas() {
    const notas = carregarDoArmazenamento();
    listaNotas.innerHTML = '';

    contadorNotas.textContent = notas.length > 0 
        ? `${notas.length} nota${notas.length !== 1 ? 's' : ''} armazenada${notas.length !== 1 ? 's' : ''}`
        : '';

    if (notas.length === 0) {
        listaNotas.innerHTML = `
            <div class="estadoVazio">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                </svg>
                <p>Nenhuma nota adicionada ainda</p>
            </div>
        `;
        return;
    }

    notas.forEach(nota => {
        const li = document.createElement('li');
        li.className = 'itemNota';
        
        const spanTitulo = document.createElement('span');
        spanTitulo.className = 'tituloNotaTexto';
        spanTitulo.textContent = nota.titulo;
        
        const btnRemover = document.createElement('button');
        btnRemover.className = 'btnRemover';
        btnRemover.textContent = 'Remover';
        btnRemover.onclick = () => removerNota(nota.id);
        
        li.appendChild(spanTitulo);
        li.appendChild(btnRemover);
        listaNotas.appendChild(li);
    });
}

function adicionarNota() {
    const titulo = tituloNota.value.trim();
    
    if (titulo === '') {
        alert('Por favor, digite um título para a nota!');
        return;
    }

    const notas = carregarDoArmazenamento();

    const notaExistente = notas.find(nota => nota.titulo.toLowerCase() === titulo.toLowerCase());
    if (notaExistente) {
        alert('Já existe uma nota com este título!');
        return;
    }

    const novaNota = {
        id: gerarId(),
        titulo: titulo,
        criadaEm: new Date().toISOString()
    };

    notas.push(novaNota);
    salvarNoArmazenamento(notas);
    
    tituloNota.value = '';
    tituloNota.focus();
    
    renderizarNotas();
}

function removerNota(id) {
    const notas = carregarDoArmazenamento();
    const notasFiltradas = notas.filter(nota => nota.id !== id);
    
    salvarNoArmazenamento(notasFiltradas);
    renderizarNotas();
}

btnAdicionarNota.addEventListener('click', adicionarNota);

tituloNota.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        adicionarNota();
    }
});

renderizarNotas();