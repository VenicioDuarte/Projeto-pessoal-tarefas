const { criarTarefa } = require('../src/criarTarefa');
const buscarTarefaPorId = require('../src/buscarTarefaPorId');

test('deve buscar uma tarefa pelo id', () => {
  const tarefa = criarTarefa('Tarefa de teste', 2);
  const tarefaBuscada = buscarTarefaPorId(tarefa.id);

  expect(tarefaBuscada.id).toBe(tarefa.id);
  expect(tarefaBuscada.descricao).toBe('Tarefa de teste');
});
