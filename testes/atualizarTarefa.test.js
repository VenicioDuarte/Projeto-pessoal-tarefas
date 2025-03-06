const { criarTarefa, tarefas } = require('../src/criarTarefa');
const atualizarTarefa = require('../src/atualizarTarefa');

test('deve atualizar uma tarefa existente', () => {
  const tarefa = criarTarefa('Tarefa a ser atualizada', 2);
  atualizarTarefa(tarefa.id, 'Tarefa atualizada', 1);

  const tarefaAtualizada = tarefas.find(t => t.id === tarefa.id);
  expect(tarefaAtualizada.descricao).toBe('Tarefa atualizada');
  expect(tarefaAtualizada.prioridade).toBe(1);
});
