const { tarefas } = require('./criarTarefa');

const buscarTarefaPorId = (id) => {
  return tarefas.find(t => t.id === id);
};

module.exports = buscarTarefaPorId;
