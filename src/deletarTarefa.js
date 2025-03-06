const { tarefas } = require('./criarTarefa');

const deletarTarefa = (id) => {
  const index = tarefas.findIndex(t => t.id === id);
  if (index !== -1) {
    tarefas.splice(index, 1);
  }
};

module.exports = deletarTarefa;
