// server.js - arquivo principal da aplicação

const express = require('express');
const path = require('path');
const tarefasRoutes = require('./routes/tarefas');

const app = express();
const PORT = process.env.PORT || 3000;

// configs basicas
app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'public')));

// log das requisicoes (ajuda a debugar)
app.use((req, res, next) => {
    console.log(`${new Date().toLocaleString('pt-BR')} - ${req.method} ${req.url}`);
    next();
});

// rota raiz
app.get('/', (req, res) => {
    res.json({
        mensagem: 'API de Tarefas funcionando!',
        versao: '1.0.0',
        rotas: {
            listar: 'GET /tarefas',
            buscar: 'GET /tarefas/:id',
            criar: 'POST /tarefas',
            atualizar: 'PUT /tarefas/:id',
            deletar: 'DELETE /tarefas/:id'
        }
    });
});

// rotas de tarefas
app.use('/tarefas', tarefasRoutes);

// 404
app.use((req, res) => {
    res.status(404).json({
        erro: true,
        mensagem: 'Rota nao encontrada'
    });
});

// tratamento de erro
app.use((err, req, res, next) => {
    console.error('Erro:', err.message);
    res.status(500).json({
        erro: true,
        mensagem: 'Erro no servidor'
    });
});

// inicia o servidor
app.listen(PORT, () => {
    console.log(`\nServidor rodando na porta ${PORT}`);
    console.log(`Acesse: http://localhost:${PORT}\n`);
});
