const { criarTarefa } = require('../src/criarTarefa');
const marcarTarefaComoConcluida = require('../src/marcarTarefaComoConcluida');

test('deve marcar a tarefa como concluída', () => {
  const tarefa = criarTarefa('Tarefa a ser concluída', 2);
  marcarTarefaComoConcluida(tarefa.id);

  const tarefaConcluida = tarefa.status;
  expect(tarefaConcluida).toBe('concluída');
});
