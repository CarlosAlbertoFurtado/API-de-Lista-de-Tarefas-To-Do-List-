/**
 * ============================================
 * 🛣️ ROTAS DA API DE TAREFAS
 * ============================================
 * 
 * Este arquivo define todas as rotas (endpoints) da API.
 * Cada rota corresponde a uma operação CRUD:
 * 
 * - GET    /tarefas      -> Listar todas (Read)
 * - GET    /tarefas/:id  -> Buscar uma (Read)
 * - POST   /tarefas      -> Criar (Create)
 * - PUT    /tarefas/:id  -> Atualizar (Update)
 * - DELETE /tarefas/:id  -> Remover (Delete)
 */

const express = require('express');
const router = express.Router();

// Importa as funções de manipulação de dados
const tarefasData = require('../data/tarefas');

// ============================================
// GET /tarefas - Listar todas as tarefas
// ============================================
router.get('/', (req, res) => {
    /*
     * Esta rota retorna todas as tarefas cadastradas.
     * É a operação mais simples da API.
     */
    const tarefas = tarefasData.obterTodas();

    res.json({
        sucesso: true,
        quantidade: tarefas.length,
        dados: tarefas
    });
});

// ============================================
// GET /tarefas/:id - Buscar tarefa por ID
// ============================================
router.get('/:id', (req, res) => {
    /*
     * :id é um parâmetro de rota (route parameter).
     * Ele captura o valor passado na URL.
     * Exemplo: GET /tarefas/1 -> req.params.id = "1"
     */
    const { id } = req.params;
    const tarefa = tarefasData.obterPorId(id);

    // Se a tarefa não existir, retorna erro 404
    if (!tarefa) {
        return res.status(404).json({
            sucesso: false,
            mensagem: `Tarefa com ID ${id} não encontrada`
        });
    }

    res.json({
        sucesso: true,
        dados: tarefa
    });
});

// ============================================
// POST /tarefas - Criar nova tarefa
// ============================================
router.post('/', (req, res) => {
    /*
     * req.body contém os dados enviados no corpo da requisição.
     * Para funcionar, precisamos do middleware express.json()
     * que está configurado no server.js
     */
    const { titulo, descricao } = req.body;

    // Validação: título é obrigatório
    if (!titulo || titulo.trim() === '') {
        return res.status(400).json({
            sucesso: false,
            mensagem: 'O campo "titulo" é obrigatório'
        });
    }

    // Cria a nova tarefa
    const novaTarefa = tarefasData.criar({ titulo, descricao });

    // Status 201 = Created (recurso criado com sucesso)
    res.status(201).json({
        sucesso: true,
        mensagem: 'Tarefa criada com sucesso',
        dados: novaTarefa
    });
});

// ============================================
// PUT /tarefas/:id - Atualizar tarefa
// ============================================
router.put('/:id', (req, res) => {
    /*
     * PUT é usado para atualizar um recurso existente.
     * Combina parâmetro de rota (:id) com corpo da requisição (body).
     */
    const { id } = req.params;
    const { titulo, descricao, concluida } = req.body;

    // Tenta atualizar a tarefa
    const tarefaAtualizada = tarefasData.atualizar(id, {
        titulo,
        descricao,
        concluida
    });

    // Se retornou null, a tarefa não existe
    if (!tarefaAtualizada) {
        return res.status(404).json({
            sucesso: false,
            mensagem: `Tarefa com ID ${id} não encontrada`
        });
    }

    res.json({
        sucesso: true,
        mensagem: 'Tarefa atualizada com sucesso',
        dados: tarefaAtualizada
    });
});

// ============================================
// DELETE /tarefas/:id - Remover tarefa
// ============================================
router.delete('/:id', (req, res) => {
    /*
     * DELETE remove permanentemente um recurso.
     * Em APIs REST, é comum retornar 204 (No Content) ou 200 com mensagem.
     */
    const { id } = req.params;

    const removida = tarefasData.remover(id);

    if (!removida) {
        return res.status(404).json({
            sucesso: false,
            mensagem: `Tarefa com ID ${id} não encontrada`
        });
    }

    res.json({
        sucesso: true,
        mensagem: `Tarefa com ID ${id} removida com sucesso`
    });
});

// Exporta o router para uso no server.js
module.exports = router;
