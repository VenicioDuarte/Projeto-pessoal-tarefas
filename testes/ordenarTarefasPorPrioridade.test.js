const { criarTarefa } = require('../src/criarTarefa');
const ordenarTarefasPorPrioridade = require('../src/ordenarTarefasPorPrioridade');

test('deve ordenar as tarefas por prioridade', () => {
  criarTarefa('Tarefa 1', 2);
  criarTarefa('Tarefa 2', 1);

  const tarefasOrdenadas = ordenarTarefasPorPrioridade();
  expect(tarefasOrdenadas[0].prioridade).toBe(1);
});
