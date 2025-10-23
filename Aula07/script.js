listaNomes = []

function adicionarNome() {
    const nome = prompt("Digite um nome para adicionar à lista:");
    if (nome && nome.trim() !== "") {
        listaNomes.push(nome.trim());
        alert(`Nome "${nome}" adicionado com sucesso!`);
        console.log(`Nome "${nome}" adicionado com sucesso!`);
    } else {
        alert("Nome inválido. Adição cancelada.");
    }
}

function filtrarNomes() {
    const filtro = prompt("Mostrar apenas os nomes que começam com a letra:");
    if (filtro && filtro.trim() !== "") {
        const nomesFiltrados = listaNomes.filter(nome => nome.toLowerCase().startsWith(filtro.trim().toLowerCase()));
        if (nomesFiltrados.length > 0) {
            let mensagem = `Nomes que começar com a letra "${filtro.toUpperCase()}":\n`;
            nomesFiltrados.forEach((nome, index) => {
                mensagem += `${index + 1}. ${nome}\n`;
            });
            alert(mensagem);
            console.log(mensagem);
        }
        else {
            alert("Nenhum nome corresponde ao filtro.");
            console.log("Nenhum nome corresponde ao filtro.");
        }
       } else {
            alert("Filtro inválido. Operação cancelada.");
        }
}

function buscarNome() {
    const nomeBusca = prompt("Digite o nome para buscar na lista:");
    if (nomeBusca && nomeBusca.trim() !== "") {
        const encontrado = listaNomes.find(nome => nome.toLowerCase() === nomeBusca.trim().toLowerCase());
        if (encontrado) {
            alert(`Nome "${encontrado}" encontrado na lista!`);
            console.log(`Nome "${encontrado}" encontrado na lista!`);
        } else {
            alert(`Nome "${nomeBusca}" não encontrado na lista.`);
            console.log(`Nome "${nomeBusca}" não encontrado na lista.`);
        }
    } else {
        alert("Nome inválido. Busca cancelada.");
    }
}

function transformarNomes() {
    listaNomesMaiusculas = listaNomes.map(nome => nome.toUpperCase());
    let mensagem = "Nomes em maiúsculas:\n";
    listaNomesMaiusculas.forEach((nome, index) => {
        mensagem += `${index + 1}. ${nome}\n`;
    });
    alert(mensagem);
    console.log(mensagem);
}

function verificarCondicao() {
    if (listaNomes.length === 0) {
        alert("Nenhum nome cadastrado.");
        console.log("Nenhum nome cadastrado.");
        return;
    }
    const maiorQueTres = listaNomes.every(nome => nome.length > 3);
    alert(`Todos os nomes têm mais de 3 caracteres? "${maiorQueTres}"`);
    console.log(`Todos os nomes têm mais de 3 caracteres? "${maiorQueTres}"`);
    
}

let opcao = "";

while (opcao !== "6") {
    opcao = prompt(
        "===== Gerenciador de Nomes =====\n" +
        "1 - Adicionar nome\n" +
        "2 - Filtrar nomes por letra inicial\n" +
        "3 - Buscar nome\n" +
        "4 - Transformar nomes em maiúsculas\n" +
        "5 - Verificar se todos os nomes têm mais de 3 caracteres\n" +
        "6 - Sair\n"
    );
    switch (opcao) {
        case "1":
            adicionarNome();
            break;
        case "2":
            filtrarNomes();
            break;
        case "3":
            buscarNome();
            break;
        case "4":
            transformarNomes();
            break;
        case "5":
            verificarCondicao();
            break;
        case "6":
            alert("Encerrando o programa... Até mais!");
            console.log("Encerrando o programa... Até mais!");
            break;
        default:
            alert("Opção inválida. Tente novamente.");
            console.log("Opção inválida. Tente novamente.");
    }   
}