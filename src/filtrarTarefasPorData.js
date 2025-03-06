const { tarefas } = require('./criarTarefa');

const filtrarTarefasPorData = (data) => {
  return tarefas.filter(t => t.dataCriacao.toISOString().split('T')[0] === data);
};

module.exports = filtrarTarefasPorData;
