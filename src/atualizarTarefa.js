const { tarefas } = require('./criarTarefa');

const atualizarTarefa = (id, novaDescricao, novaPrioridade) => {
  const tarefa = tarefas.find(t => t.id === id);
  if (tarefa) {
    tarefa.descricao = novaDescricao || tarefa.descricao;
    tarefa.prioridade = novaPrioridade || tarefa.prioridade;
  }
};

module.exports = atualizarTarefa;
