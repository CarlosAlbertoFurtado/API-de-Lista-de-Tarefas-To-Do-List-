/**
 * ============================================
 * 📦 DADOS EM MEMÓRIA - LISTA DE TAREFAS
 * ============================================
 * 
 * Este arquivo armazena as tarefas em memória (array JavaScript).
 * 
 * ⚠️ IMPORTANTE: Os dados são perdidos quando o servidor reinicia!
 * Em uma aplicação real, usaríamos um banco de dados.
 * 
 * Estrutura de uma tarefa:
 * {
 *   id: number,          // Identificador único
 *   titulo: string,      // Título da tarefa
 *   descricao: string,   // Descrição (opcional)
 *   concluida: boolean,  // Status de conclusão
 *   criadaEm: Date       // Data de criação
 * }
 */

// Array que armazena todas as tarefas
let tarefas = [
    {
        id: 1,
        titulo: "Aprender sobre APIs REST",
        descricao: "Estudar os conceitos de GET, POST, PUT e DELETE",
        concluida: false,
        criadaEm: new Date().toISOString()
    },
    {
        id: 2,
        titulo: "Criar minha primeira API",
        descricao: "Desenvolver a API de lista de tarefas",
        concluida: true,
        criadaEm: new Date().toISOString()
    }
];

// Contador para gerar IDs únicos
let proximoId = 3;

/**
 * Retorna todas as tarefas
 * @returns {Array} Lista de todas as tarefas
 */
function obterTodas() {
    return tarefas;
}

/**
 * Busca uma tarefa pelo ID
 * @param {number} id - ID da tarefa
 * @returns {Object|undefined} Tarefa encontrada ou undefined
 */
function obterPorId(id) {
    return tarefas.find(tarefa => tarefa.id === parseInt(id));
}

/**
 * Cria uma nova tarefa
 * @param {Object} dados - Dados da tarefa (titulo, descricao)
 * @returns {Object} Tarefa criada
 */
function criar(dados) {
    const novaTarefa = {
        id: proximoId++,
        titulo: dados.titulo,
        descricao: dados.descricao || "",
        concluida: false,
        criadaEm: new Date().toISOString()
    };

    tarefas.push(novaTarefa);
    return novaTarefa;
}

/**
 * Atualiza uma tarefa existente
 * @param {number} id - ID da tarefa
 * @param {Object} dados - Novos dados da tarefa
 * @returns {Object|null} Tarefa atualizada ou null se não encontrada
 */
function atualizar(id, dados) {
    const indice = tarefas.findIndex(tarefa => tarefa.id === parseInt(id));

    if (indice === -1) {
        return null;
    }

    // Atualiza apenas os campos fornecidos
    tarefas[indice] = {
        ...tarefas[indice],
        titulo: dados.titulo !== undefined ? dados.titulo : tarefas[indice].titulo,
        descricao: dados.descricao !== undefined ? dados.descricao : tarefas[indice].descricao,
        concluida: dados.concluida !== undefined ? dados.concluida : tarefas[indice].concluida
    };

    return tarefas[indice];
}

/**
 * Remove uma tarefa
 * @param {number} id - ID da tarefa
 * @returns {boolean} true se removida, false se não encontrada
 */
function remover(id) {
    const indice = tarefas.findIndex(tarefa => tarefa.id === parseInt(id));

    if (indice === -1) {
        return false;
    }

    tarefas.splice(indice, 1);
    return true;
}

// Exporta as funções para uso em outros arquivos
module.exports = {
    obterTodas,
    obterPorId,
    criar,
    atualizar,
    remover
};
