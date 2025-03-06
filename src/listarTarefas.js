const { tarefas } = require('./criarTarefa');

const listarTarefas = () => {
  return tarefas;
};

module.exports = listarTarefas;
