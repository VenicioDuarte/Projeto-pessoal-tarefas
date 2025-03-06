const { criarTarefa } = require('../src/criarTarefa');
const filtrarTarefasPorData = require('../src/filtrarTarefasPorData');

test('deve filtrar tarefas por data', () => {
  const tarefa = criarTarefa('Tarefa filtrada', 2);
  const data = tarefa.dataCriacao.toISOString().split('T')[0];
  
  const tarefasFiltradas = filtrarTarefasPorData(data);
  expect(tarefasFiltradas.length).toBe(1);
  expect(tarefasFiltradas[0].descricao).toBe('Tarefa filtrada');
});
