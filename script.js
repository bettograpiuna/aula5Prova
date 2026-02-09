// Array global para armazenar as tarefas
let tarefas = [];

function iniciarSistema() {
    let opcao = "";

    // O loop - while - continua rodando até que o usuário escolha a opção "5" (Sair)
    while (opcao !== "5") {
        
        // Exibe o menu e captura a escolha do usuário
        opcao = prompt(
            "=== GERENCIADOR DE TAREFAS ===\n\n" +
            "1. Adicionar Tarefa\n" +
            "2. Listar Tarefas\n" +
            "3. Remover Tarefa\n" +
            "4. Concluir Tarefa\n" +
            "5. Sair"
        );

        // Verifica qual opção foi escolhida
        switch (opcao) {
            case "1": // ADICIONAR
                let novaTarefa = prompt("Digite o nome da tarefa:");
                if (novaTarefa) {
                    // Método push(): Adiciona ao final do array
                    tarefas.push(novaTarefa);
                    alert("Tarefa adicionada com sucesso!");
                }
                break;

            case "2": // LISTAR
                if (tarefas.length === 0) {
                    alert("A lista está vazia!");
                } else {
                    let listaTexto = "--- LISTA ATUAL ---\n";
                    // Loop for: Percorre o array para montar a mensagem
                    for (let i = 0; i < tarefas.length; i++) {
                        listaTexto += `Índice ${i}: ${tarefas[i]}\n`;
                    }
                    alert(listaTexto);
                }
                break;

            case "3": // REMOVER
                let indiceRemover = prompt("Digite o ÍNDICE da tarefa para remover:");
                // Validação básica para ver se o índice existe
                if (indiceRemover >= 0 && indiceRemover < tarefas.length) {
                    // Método splice(): Remove 1 item na posição indicada
                    let itemRemovido = tarefas.splice(indiceRemover, 1);
                    alert(`A tarefa "${itemRemovido}" foi removida.`);
                } else {
                    alert("Índice inválido!");
                }
                break;

            case "4": // CONCLUIR
                let indiceConcluir = prompt("Digite o ÍNDICE da tarefa para concluir:");
                if (indiceConcluir >= 0 && indiceConcluir < tarefas.length) {
                    // Modifica a string adicionando o check
                    if (!tarefas[indiceConcluir].includes("✅")) {
                        tarefas[indiceConcluir] = "✅ " + tarefas[indiceConcluir];
                        alert("Tarefa marcada como concluída!");
                    } else {
                        alert("Esta tarefa já está concluída.");
                    }
                } else {
                    alert("Índice inválido!");
                }
                break;

            case "5": // SAIR
                alert("Saindo do sistema...");
                break;

            case null: // Caso clique em Cancelar no prompt
                alert("Operação cancelada.");
                break;

            default:
                alert("Opção inválida! Tente novamente.");
        }

        // Função extra para atualizar o HTML visualmente atrás dos alertas
        atualizarHTML(); 
    }
}

// Função auxiliar para mostrar as mudanças na tela do navegador
function atualizarHTML() {
    const listaUl = document.getElementById('listaTarefas');
    listaUl.innerHTML = ""; // Limpa a lista atual

    if (tarefas.length === 0) {
        listaUl.innerHTML = '<li class="aviso-vazio">A lista está vazia.</li>';
        return;
    }

    // Loop for...of para renderizar no HTML
    for (let tarefa of tarefas) {
        const itemLi = document.createElement('li');
        itemLi.innerText = tarefa;
        listaUl.appendChild(itemLi);
    }
}