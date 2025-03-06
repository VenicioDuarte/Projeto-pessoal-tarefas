const { criarTarefa } = require('../src/criarTarefa');
const buscarTarefaPorStatus = require('../src/buscarTarefaPorStatus');

test('deve buscar tarefas pelo status', () => {
  const tarefa = criarTarefa('Tarefa pendente', 2);
  const tarefasPendentes = buscarTarefaPorStatus('pendente');
  
  expect(tarefasPendentes.length).toBe(1);
  expect(tarefasPendentes[0].descricao).toBe('Tarefa pendente');
});
