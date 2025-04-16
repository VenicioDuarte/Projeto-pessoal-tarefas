const {
    adicionarTarefa,
    listarTarefas,
    concluirTarefa,
    removerTarefa,
    editarTarefa,
    listarConcluidas,
    listarPendentes,
    tarefaExiste,
    contarTarefas,
    limparTarefas
  } = require("../src/anotacoes");
  
  // ver se a lista de tarefa ta limpo e cheirosa 
  beforeEach(() => {
    limparTarefas(); //limpa as tarefas antes dos teste
  });
  
  // Testa a função de cria a tarefa
  test("1. Deve adicionar uma nova tarefa", () => {
    const tarefa = adicionarTarefa("Estudar Node.js"); // Adiciona a tarefa
    // Verifica se a descrição da tarefa é a esperada
    expect(tarefa.descricao).toBe("Estudar Node.js");
    // Verifica se a tarefa não está concluída inicialmente
    expect(tarefa.concluida).toBe(false);
  });
  
  // Testa a funcionalidade de listar todas as tarefas
  test("2. Deve listar todas as tarefas", () => {
    adicionarTarefa("Tarefa 1"); // colocar a primera tarefa
    adicionarTarefa("Tarefa 2"); // coloca a segunda tarefa
    const lista = listarTarefas(); // fala a lista de tarefa
    // olha se tem msm as tarefa lá
    expect(lista.length).toBe(2); // espera com fé em deus ter 2 tarefas
  });
  
  // Testa a função concluir as tarefa
  test("3. Deve concluir uma tarefa", () => {
    const tarefa = adicionarTarefa("Ler livro"); // faz  a tarefa 
    const concluida = concluirTarefa(tarefa.id); // fala que a tarefa foi feita
    // olha se ela foi feita ou foi só mentira
    expect(concluida.concluida).toBe(true);
  });
  
  // Testa a função de remover uma tarefa
  test("4. Deve remover uma tarefa", () => {
    const tarefa = adicionarTarefa("Excluir depois"); // faz a tarefa
    const removida = removerTarefa(tarefa.id); // tira ela 
    // olha se ela foi tirada msm ou ainda tá de intrometida
    expect(removida).toBe(true);
    // olha se ficou sem ninguem msm
    expect(listarTarefas().length).toBe(0);
  });
  
  // Testa a função de edita a descrição da tarefa
  test("5. Deve editar a descrição de uma tarefa", () => {
    const tarefa = adicionarTarefa("Antiga descrição"); // faz a tarefa
    const editada = editarTarefa(tarefa.id, "Nova descrição"); // Edita a descrição
    // Verifica se a descrição foi mudada msm
    expect(editada.descricao).toBe("Nova descrição");
  });
  
  // Testa a função de listar apenas tarefas concluídas
  test("6. Deve listar apenas tarefas concluídas", () => {
    const t1 = adicionarTarefa("Limpar a casa"); // faz a primeira
    const t2 = adicionarTarefa("Estudar"); // faz a segunda 
    concluirTarefa(t1.id); // coloca a 1 como feita
    const concluidas = listarConcluidas(); // olha na lista de concluidos 
    // olha se só tem uma msm feita
    expect(concluidas).toHaveLength(1);
    // olha se a descrição é a que ele espera
    expect(concluidas[0].descricao).toBe("Limpar a casa");
  });
  
  // Testa a função de listar apenas tarefas pendentes
  test("7. Deve listar apenas tarefas pendentes", () => {
    const t1 = adicionarTarefa("Tarefa A"); // Faz a primeira
    const t2 = adicionarTarefa("Tarefa B"); // faz a segunda 
    concluirTarefa(t1.id); // coloca que a 1 foi feita
    const pendentes = listarPendentes(); // olha as que falta fazer 
    // olha se só tem uma msm pendente 
    expect(pendentes).toHaveLength(1);
    // Olha se o nome é a que ele quer msm
    expect(pendentes[0].descricao).toBe("Tarefa B");
  });
  
  // olha se ela existe olhando o id dela
  test("8. Deve verificar se uma tarefa existe por ID", () => {
    const tarefa = adicionarTarefa("Verificar existência"); // faz a tarefa 
    const existe = tarefaExiste(tarefa.id); // Olha se ela existe 
    // e ver se ela existe dnv
    expect(existe).toBe(true);
  });
  
  // testa se ele fala false pras que não existe
  test("9. Deve retornar false para tarefa inexistente", () => {
    const existe = tarefaExiste(123456789); // olha pelo id se existe 
    // e olha se ela não existe 
    expect(existe).toBe(false);
  });
  
  // testa se ele sabe contar para ver o total de tarefa 
  test("10. Deve contar o número total de tarefas", () => {
    adicionarTarefa("Uma"); // faz a 1
    adicionarTarefa("Duas"); // faz a 2
    // E olha se tem msm as duas que ele fez pq ele é desconfiado 
    expect(contarTarefas()).toBe(2);
  })

  // E dps de se matar fazendo tarefa ele olha se tudo deu bom e fala no terminal 