
var tarefas = [];
function adicionarTarefa() {
  var nomeTarefa = document.getElementById("nome-tarefa").value;
  var tarefa = {
    nome: nomeTarefa,
    status: "Não concluída",
  };
  tarefas.push(tarefa);
  document.getElementById("nome-tarefa").value = "";

  atualizarListaTarefas();
}

function atualizarListaTarefas() {

  document.querySelector(".tarefas").innerHTML = "";


  tarefas.forEach(function(tarefa) {
 
    var elementoTarefa = document.createElement("div");
    elementoTarefa.classList.add("tarefa");

    var elementoNomeTarefa = document.createElement("span");
    elementoNomeTarefa.classList.add("tarefa-nome");
    elementoNomeTarefa.textContent = tarefa.nome;
    elementoTarefa.appendChild(elementoNomeTarefa);

    
    var elementoStatusTarefa = document.createElement("span");
    elementoStatusTarefa.classList.add("tarefa-status");
    elementoStatusTarefa.textContent = tarefa.status;
    elementoTarefa.appendChild(elementoStatusTarefa);

    document.querySelector(".tarefas").appendChild(elementoTarefa);
  });
}

document.getElementById("adicionar-tarefa").addEventListener("click", adicionarTarefa);

if (localStorage.getItem("tarefas")) {
  tarefas = JSON.parse(localStorage.getItem("tarefas"));
  atualizarListaTarefas();
}
