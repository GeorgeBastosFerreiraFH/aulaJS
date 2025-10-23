let listaTarefas = []

const adicionarTarefa = function (nome) {
    if (!nome || nome.trim() === "") {
        alert("Nome da tarefa inválido!");
        return;
    }
    listaTarefas.push({ nome: nome.trim(), concluida: "❌" });
    alert(`Tarefa "${nome}" adicionada com sucesso!`);
};

const listarTarefas = () => {
    if (listaTarefas.length === 0) {
        console.log("Nenhuma tarefa cadastrada.");
        alert("Nenhuma tarefa cadastrada.");
        return;
    }
    let mensagem = "📋 Lista de Tarefas:\n";
    listaTarefas.forEach((tarefa, index) => {
        mensagem += `${index + 1}. ${tarefa.concluida} ${tarefa.nome}\n`;
    });
    console.log(mensagem);
    alert(mensagem)
};

function executarOperacao(callback) {
    callback();
}

let opcao = "";

while (opcao !== "6") {
    opcao = prompt(
        "===== Gerenciador de Tarefas =====\n" +
        "1 - Adicionar tarefa\n" +
        "2 - Listar tarefas\n" +
        "3 - Remover tarefa\n" +
        "4 - Atualizar tarefa\n" +
        "5 - Concluir tarefa\n" +
        "6 - Sair\n"
    );

    switch (opcao) {
        case "1":
            const nomeTarefa = prompt("Digite o nome da tarefa:");
            adicionarTarefa(nomeTarefa);
            break;

        case "2":
            listarTarefas();
            break;

        case "3":
            listarTarefas();
            const indiceRemover = parseInt(prompt("Digite o número da tarefa para remover:")) - 1;
            executarOperacao(() => {
                if (listaTarefas[indiceRemover]) {
                    let removida = listaTarefas.splice(indiceRemover, 1);
                    alert(`Tarefa "${removida[0].nome}" removida com sucesso!`);
                    console.log(`Tarefa "${removida[0].nome}" removida com sucesso!`);
                } else {
                    alert("Índice inválido!");
                }
            });
            break;

        case "4":
            listarTarefas();
            const indiceAtualizar = parseInt(prompt("Digite o número da tarefa para atualizar:")) - 1;
            executarOperacao(() => {
                if (listaTarefas[indiceAtualizar]) {
                    let novoNome = prompt("Digite o novo nome da tarefa:");
                    if (novoNome && novoNome.trim() !== "") {
                        listaTarefas[indiceAtualizar].nome = novoNome.trim();
                        alert(`Tarefa atualizada para "${novoNome}" com sucesso!`);
                        console.log(`Tarefa atualizada para "${novoNome}" com sucesso!`);
                    } else {
                        alert("Nome inválido. Atualização cancelada.");
                    }
                } else {
                    alert("Índice inválido!");
                }
            });
            break;

        case "5":
            listarTarefas();
            const indiceConcluir = parseInt(prompt("Digite o número da tarefa para concluir:")) - 1;
            executarOperacao(() => {
                if (listaTarefas[indiceConcluir]) {
                    listaTarefas[indiceConcluir].concluida = "✅";
                    alert(`Tarefa "${listaTarefas[indiceConcluir].nome}" marcada como concluída!`);
                    console.log(`Tarefa "${listaTarefas[indiceConcluir].nome}" marcada como concluída!`);
                } else {
                    alert("Índice inválido!");
                }
            });
            break;

        case "6":
            alert("Encerrando o programa... Até mais!");
            break;

        default:
            alert("Opção inválida! Escolha um número entre 1 e 6.");
    }
}