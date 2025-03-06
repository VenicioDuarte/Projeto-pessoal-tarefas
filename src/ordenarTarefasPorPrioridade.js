const { tarefas } = require('./criarTarefa');

const ordenarTarefasPorPrioridade = () => {
  return tarefas.sort((a, b) => a.prioridade - b.prioridade);
};

module.exports = ordenarTarefasPorPrioridade;
