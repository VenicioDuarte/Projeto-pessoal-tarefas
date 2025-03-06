const { tarefas } = require('./criarTarefa');

const buscarTarefaPorStatus = (status) => {
  return tarefas.filter(t => t.status === status);
};

module.exports = buscarTarefaPorStatus;
