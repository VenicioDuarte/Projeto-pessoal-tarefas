// src/tarefas.js

let tarefas = [];
let idCounter = 1;

class Tarefa {
  constructor(id, descricao, dataCriacao, prioridade, status) {
    this.id = id;
    this.descricao = descricao;
    this.dataCriacao = dataCriacao;
    this.prioridade = prioridade;
    this.status = status;
  }
}

// Função para adicionar uma nova tarefa
const adicionarTarefa = (descricao, prioridade) => {
  const tarefa = new Tarefa(idCounter++, descricao, new Date(), prioridade, 'pendente');
  tarefas.push(tarefa);
  return tarefa;
};

const listarTarefas = () => {
  return tarefas;
};

module.exports = { tarefas, adicionarTarefa, listarTarefas };
