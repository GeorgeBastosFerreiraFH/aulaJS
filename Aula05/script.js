let tarefas = [];

while (true) {
    let opcao = prompt(
        "===== Gerenciador de Tarefas =====\n" +
        "1 - Adicionar tarefa\n" +
        "2 - Listar tarefas\n" +
        "3 - Remover tarefa\n" +
        "4 - Concluir tarefa\n" +
        "5 - Encerrar programa\n" +
        "Escolha uma opção:"
    );

    if (opcao === '1') {
        let novaTarefa = prompt("Digite a nova tarefa:");
        if (novaTarefa && novaTarefa.trim() !== "") {
            tarefas.push(`❌ ${novaTarefa.trim()}`);
            alert(`Tarefa "${novaTarefa.trim()}" adicionada com sucesso!`);
        } else {
            alert("Tarefa inválida. Tente novamente.");
        }

    } else if (opcao === '2') {
        if (tarefas.length === 0) {
            alert("Não há tarefas na lista.");
        } else {
            let mensagem = "===== Lista de Tarefas =====\n";
            let indice = 1;
            for (let tarefa of tarefas) {
                mensagem += `${indice} - ${tarefa}\n`;
                indice++;
            }
            alert(mensagem);
        }

    } else if (opcao === '3') {
        if (tarefas.length === 0) {
            alert("Não há tarefas para remover.");
            continue;
        }

        let entrada = prompt("Digite o índice (número) da tarefa que deseja remover (conforme listado):");
        if (entrada === null) continue;
        entrada = entrada.trim();

        if (entrada === "") {
            alert("Nenhum índice digitado.");
            continue;
        }

        let indiceUsuario = Number(entrada);
        if (isNaN(indiceUsuario) || indiceUsuario < 1 || indiceUsuario > tarefas.length) {
            alert("Índice inválido.");
            continue;
        }

        let removida = tarefas.splice(indiceUsuario - 1, 1)[0];
        alert(`Tarefa "${removida}" removida com sucesso!`);

    } else if (opcao === '4') {
        if (tarefas.length === 0) {
            alert("Não há tarefas para concluir.");
            continue;
        }

        let entrada = prompt("Digite o índice (número) da tarefa que deseja concluir (conforme listado):");
        if (entrada === null) continue;
        entrada = entrada.trim();

        if (entrada === "") {
            alert("Nenhum índice digitado.");
            continue;
        }

        let indiceUsuario = Number(entrada);
        if (isNaN(indiceUsuario) || indiceUsuario < 1 || indiceUsuario > tarefas.length) {
            alert("Índice inválido.");
            continue;
        }

        let idx = indiceUsuario - 1;

        if (!tarefas[idx].startsWith("✅")) {
            tarefas[idx] = "✅ " + tarefas[idx].slice(2);
            alert("Tarefa concluída com sucesso!");
        } else {
            alert("Essa tarefa já está marcada como concluída.");
        }

    } else if (opcao === '5') {
        alert("Encerrando o programa... Até mais!");
        break;

    } else {
        alert("Opção inválida! Escolha um número entre 1 e 5.");
    }
}
