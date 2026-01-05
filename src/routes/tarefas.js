// rotas das tarefas

const express = require('express');
const router = express.Router();
const tarefasData = require('../data/tarefas');

// listar todas
router.get('/', (req, res) => {
    const tarefas = tarefasData.obterTodas();
    res.json({
        total: tarefas.length,
        tarefas: tarefas
    });
});

// buscar por id
router.get('/:id', (req, res) => {
    const id = req.params.id;
    const tarefa = tarefasData.obterPorId(id);

    if (!tarefa) {
        return res.status(404).json({
            erro: true,
            mensagem: 'Tarefa nao encontrada'
        });
    }

    res.json(tarefa);
});

// criar nova
router.post('/', (req, res) => {
    const { titulo, descricao } = req.body;

    // valida se tem titulo
    if (!titulo || titulo.trim() === '') {
        return res.status(400).json({
            erro: true,
            mensagem: 'Titulo obrigatorio'
        });
    }

    const nova = tarefasData.criar({ titulo, descricao });
    res.status(201).json({
        mensagem: 'Tarefa criada',
        tarefa: nova
    });
});

// atualizar
router.put('/:id', (req, res) => {
    const id = req.params.id;
    const { titulo, descricao, concluida } = req.body;

    const atualizada = tarefasData.atualizar(id, { titulo, descricao, concluida });

    if (!atualizada) {
        return res.status(404).json({
            erro: true,
            mensagem: 'Tarefa nao encontrada'
        });
    }

    res.json({
        mensagem: 'Tarefa atualizada',
        tarefa: atualizada
    });
});

// deletar
router.delete('/:id', (req, res) => {
    const id = req.params.id;
    const removida = tarefasData.remover(id);

    if (!removida) {
        return res.status(404).json({
            erro: true,
            mensagem: 'Tarefa nao encontrada'
        });
    }

    res.json({
        mensagem: 'Tarefa removida'
    });
});

module.exports = router;
