listaDeCompras = []

while (true) {
    let opcao = prompt(
        "1 - Adicionar item\n" +
        "2 - Exibir lista\n" +
        "3 - Remover item\n" +
        "4 - Atualizar item\n" +
        "5 - Encerrar programa"
    )

    if (opcao === '1') {
        while (true) {
            let item = prompt("Digite o nome do item para adicionar (ou 'sair' para voltar ao menu):")
            if (!item) continue
            item = item.trim()
            if (item.toLowerCase() === 'sair') {
                break
            }
            if (item === "") {
                alert("O item não pode ser vazio.")
                continue
            }
            listaDeCompras.push(item)
            alert(`Item "${item}" adicionado à lista.`)
        }

    } else if (opcao === '2') {
        if (listaDeCompras.length === 0) {
            alert("A lista de compras está vazia.")
        } else {
            let mensagem = "Lista de Compras:\n"
            let indice = 1
            for (let item of listaDeCompras) {
                mensagem += indice + " - " + item + "\n"
                indice++
            }
            alert(mensagem)
        }

    } else if (opcao === '3') {
        if (listaDeCompras.length === 0) {
            alert("A lista de compras está vazia.")
        } else {
            let itemParaRemover = prompt("Digite o nome do item que deseja remover:")
            if (!itemParaRemover) {
                alert("Nenhum item digitado.")
                continue
            }
            itemParaRemover = itemParaRemover.trim()
            let index = listaDeCompras.findIndex(item => item.toLowerCase() === itemParaRemover.toLowerCase())
            if (index !== -1) {
                listaDeCompras.splice(index, 1)
                alert(`Item "${itemParaRemover}" removido da lista.`)
            } else {
                alert(`Item "${itemParaRemover}" não encontrado na lista.`)
            }
        }

    } else if (opcao === '4') {
        if (listaDeCompras.length === 0) {
            alert("A lista de compras está vazia.")
        } else {
            let itemParaAtualizar = prompt("Digite o nome do item que deseja atualizar:")
            if (!itemParaAtualizar) {
                alert("Nenhum item digitado.")
                continue
            }
            itemParaAtualizar = itemParaAtualizar.trim()
            let index = listaDeCompras.findIndex(item => item.toLowerCase() === itemParaAtualizar.toLowerCase())
            if (index !== -1) {
                let novoItem = prompt("Digite o novo nome do item:").trim()
                listaDeCompras[index] = novoItem
                alert(`Item "${itemParaAtualizar}" atualizado para "${novoItem}".`)
            } else {
                alert(`Item "${itemParaAtualizar}" não encontrado na lista.`)
            }
        }

    } else if (opcao === '5') {
        alert("Encerrando o programa. Até mais!")
        break

    } else {
        alert("Opção inválida. Por favor, escolha uma opção entre 1 e 5.")
    }
} 
