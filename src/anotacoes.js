//guardar as tarefas na memória
let tarefas = [];

// faz uma tarefa e fala que nn foi concluida 
function adicionarTarefa(descricao) {
  if (!descricao) throw new Error("Descrição é obrigatória"); // ver se foi passado a descrição
  const novaTarefa = { id: Date.now(), descricao, concluida: false }; // fazer tarefa com id só dela e e status falso
  tarefas.push(novaTarefa); //ver se ta guardada na memoria 
  return novaTarefa; // trazer a tarefa criada
}

//trazer as tarefas cadastrada
function listarTarefas() {
  return tarefas;
}

// fala que a tarefa foi feita vendo o ID
function concluirTarefa(id) {
  const tarefa = tarefas.find(t => t.id === id); // Procurar tarefa com o id dela
  if (!tarefa) throw new Error("Tarefa não encontrada"); // Se não achar grita que deu erro
  tarefa.concluida = true; // Dizer que tá concluida 
  return { ...tarefa }; // retornar uma cópia da tarefa atualizada
}

// tira as tarefa com o id
function removerTarefa(id) {
  const index = tarefas.findIndex(t => t.id === id); // achar lugar da tarefa
  if (index === -1) throw new Error("Tarefa não encontrada"); // se não achar ele grita dnv que deu erro 
  tarefas.splice(index, 1); // Remove a tarefa da lista
  return true; // fala true pra dizer de deu bom
}

// muda a descrição da tarefa com o id
function editarTarefa(id, novaDescricao) {
  const tarefa = tarefas.find(t => t.id === id); // procura a tarefa
  if (!tarefa) throw new Error("Tarefa não encontrada"); // Se não tiver grita dnv que deu erro
  tarefa.descricao = novaDescricao; // muda a veia descrição pela nova
  return tarefa; // Retora ela atualizada
}

// lista das que eu tive coragem de fazer 
function listarConcluidas() {
  return tarefas.filter(t => t.concluida); // passa só as feita (true)
}

// lista das que tenho preguiça de fazer
function listarPendentes() {
  return tarefas.filter(t => !t.concluida); //separa as que tem false
}

// olha se tem mesmo a tarefa com o id 
function tarefaExiste(id) {
  return tarefas.some(t => t.id === id); //fala true se tive
}

//olha quantas tarefas tem no total 
function contarTarefas() {
  return tarefas.length;
}

//limpa as tarefas antes dos testes 
function limparTarefas() {
  tarefas = [];
}

module.exports = {
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
};
