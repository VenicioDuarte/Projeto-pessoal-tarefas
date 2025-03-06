// tests/tarefas.test.js

const { adicionarTarefa, listarTarefas, tarefas } = require('../src/tarefa');

describe('Gerenciamento de Tarefas', () => {
  beforeEach(() => {
  
    tarefas.length = 0;
  });

  test('deve adicionar uma nova tarefa', () => {
    const tarefa = adicionarTarefa('Nova tarefa', 2);
    
    expect(tarefa).toHaveProperty('id');
    expect(tarefa).toHaveProperty('descricao', 'Nova tarefa');
    expect(tarefa).toHaveProperty('prioridade', 2);
    expect(tarefa).toHaveProperty('status', 'pendente');
    expect(tarefas).toHaveLength(1);
  });

  test('deve listar todas as tarefas', () => {
    adicionarTarefa('Tarefa 1', 1);
    adicionarTarefa('Tarefa 2', 3);
    
    const todasTarefas = listarTarefas();
    
    expect(todasTarefas).toHaveLength(2);
    expect(todasTarefas[0]).toHaveProperty('descricao', 'Tarefa 1');
    expect(todasTarefas[1]).toHaveProperty('descricao', 'Tarefa 2');
  });

  test('deve ter tarefas com id único', () => {
    const tarefa1 = adicionarTarefa('Tarefa 1', 1);
    const tarefa2 = adicionarTarefa('Tarefa 2', 2);
    
    expect(tarefa1.id).not.toBe(tarefa2.id);
  });
});
