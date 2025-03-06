const { criarTarefa } = require('../src/criarTarefa');
const listarTarefas = require('../src/listarTarefas');

test('deve listar todas as tarefas', () => {
  criarTarefa('Tarefa 1', 2);
  criarTarefa('Tarefa 2', 1);

  const tarefasListadas = listarTarefas();
  expect(tarefasListadas.length).toBe(2);
});
