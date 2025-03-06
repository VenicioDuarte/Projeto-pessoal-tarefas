const tarefas = [];
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

const criarTarefa = (descricao, prioridade) => {
  const tarefa = new Tarefa(idCounter++, descricao, new Date(), prioridade, 'pendente');
  tarefas.push(tarefa);
  return tarefa;
};

module.exports = { criarTarefa, tarefas };
