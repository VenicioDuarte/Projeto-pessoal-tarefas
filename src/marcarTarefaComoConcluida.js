const { tarefas } = require('./criarTarefa');

const marcarTarefaComoConcluida = (id) => {
  const tarefa = tarefas.find(t => t.id === id);
  if (tarefa) {
    tarefa.status = 'concluída';
  }
};

module.exports = marcarTarefaComoConcluida;
