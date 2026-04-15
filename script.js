function adicionarTarefa() {

    // Pega o valor digitado no input
    let tarefaTexto = document.getElementById("tarefa").value;

    // Pega a prioridade selecionada
    let prioridade = document.getElementById("prioridade").value;

    // Verifica se o campo está vazio
    if (tarefaTexto === "") {
        alert("Digite uma tarefa!");
        return;
    }

    // Cria um novo item da lista (li)
    let li = document.createElement("li");

    // Define o texto da tarefa
    li.innerText = tarefaTexto;

    // Adiciona a classe de prioridade (alta, media ou baixa)
    li.classList.add(prioridade);

    // Quando clicar na tarefa, marca como concluída
    li.onclick = function () {
        li.classList.toggle("concluida");
    };

    // Adiciona o item na lista (ul)
    document.getElementById("lista").appendChild(li);

    // Limpa o campo de input
    document.getElementById("tarefa").value = "";
}