const { criarTarefa, tarefas } = require('../src/criarTarefa');

test('deve criar uma nova tarefa', () => {
  const tarefa = criarTarefa('Tarefa de teste', 1);
  expect(tarefas.length).toBe(1);
  expect(tarefa.descricao).toBe('Tarefa de teste');
});
