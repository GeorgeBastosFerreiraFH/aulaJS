const botaoTarefa = document.getElementById('addTarefaBtn');
const inputTarefa = document.getElementById('nomeTarefa');
const listaDeTarefas = document.getElementById('listaDeTarefas');
const mensagem = document.getElementById('menssagem');

botaoTarefa.addEventListener('click', adicionarTarefa);
inputTarefa.addEventListener('keypress', function(evento) {
    if (evento.key === 'Enter') {
        adicionarTarefa();
    }
});

function adicionarTarefa() {
    const nomeTarefa = inputTarefa.value.trim();

    if (nomeTarefa !== "") {
        const itemTarefa = document.createElement('li');

        const iconeStatus = document.createElement('button');
        iconeStatus.textContent = '🔲';
        iconeStatus.className = 'icone-status';

        const spanNome = document.createElement('span');
        spanNome.textContent = nomeTarefa;

        const removerTarefa = document.createElement('button');
        removerTarefa.textContent = 'Remover';
        removerTarefa.className = 'remover-btn';

        itemTarefa.appendChild(iconeStatus);
        itemTarefa.appendChild(spanNome);
        itemTarefa.appendChild(removerTarefa);
        listaDeTarefas.appendChild(itemTarefa);

        mensagem.textContent = `Tarefa "${nomeTarefa}" adicionada.`;
        mensagem.className = 'sucesso';
        inputTarefa.value = "";

        function toggleTarefa() {
            const concluida = itemTarefa.classList.toggle('tarefa-completa');
            iconeStatus.textContent = concluida ? '✔️' : '🔲';
        }

        iconeStatus.addEventListener('click', toggleTarefa);
        spanNome.addEventListener('click', toggleTarefa);

        removerTarefa.addEventListener('click', function(e) {
            e.stopPropagation();
            listaDeTarefas.removeChild(itemTarefa);
            mensagem.textContent = `Tarefa "${nomeTarefa}" removida.`;
            mensagem.className = 'erro';
        });

    } else {
        mensagem.textContent = 'Por favor, digite o nome da tarefa.';
        mensagem.className = 'erro';
    }

    setTimeout(() => {
        mensagem.textContent = "";
    }, 3000);
}