const { criarTarefa, tarefas } = require('../src/criarTarefa');
const deletarTarefa = require('../src/deletarTarefa');

test('deve deletar uma tarefa existente', () => {
  const tarefa = criarTarefa('Tarefa a ser deletada', 2);
  const tarefasAntes = tarefas.length;

  deletarTarefa(tarefa.id);

  expect(tarefas.length).toBe(tarefasAntes - 1);
});
