/**
 * ============================================
 * 🚀 SERVIDOR EXPRESS - API DE TAREFAS
 * ============================================
 * 
 * Este é o arquivo principal do servidor.
 * Ele configura o Express e conecta todas as partes da aplicação.
 * 
 * O que é Express?
 * Express é um framework minimalista para Node.js que facilita
 * a criação de servidores web e APIs REST.
 */

// Importa o Express
const express = require('express');
const path = require('path');

// Importa as rotas de tarefas
const tarefasRoutes = require('./routes/tarefas');

// Cria a aplicação Express
const app = express();

// Define a porta do servidor (usa variável de ambiente ou 3000)
const PORT = process.env.PORT || 3000;

// ============================================
// MIDDLEWARES
// ============================================
/*
 * Middlewares são funções que processam as requisições
 * antes de chegarem às rotas. São executados em ordem.
 */

// Middleware para interpretar JSON no corpo das requisições
// Sem isso, req.body seria undefined
app.use(express.json());

// Middleware para servir arquivos estáticos (HTML, CSS, JS)
// A pasta 'public' conterá nossa interface web
app.use(express.static(path.join(__dirname, '..', 'public')));

// Middleware de log - mostra cada requisição no console
app.use((req, res, next) => {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] ${req.method} ${req.url}`);
    next(); // IMPORTANTE: next() passa para o próximo middleware/rota
});

// ============================================
// ROTAS
// ============================================

// Rota inicial - página de boas-vindas
app.get('/', (req, res) => {
    res.json({
        mensagem: '🎉 Bem-vindo à API de Lista de Tarefas!',
        versao: '1.0.0',
        endpoints: {
            'GET /tarefas': 'Listar todas as tarefas',
            'GET /tarefas/:id': 'Buscar tarefa por ID',
            'POST /tarefas': 'Criar nova tarefa',
            'PUT /tarefas/:id': 'Atualizar tarefa',
            'DELETE /tarefas/:id': 'Remover tarefa'
        },
        documentacao: 'Consulte o README.md para mais detalhes'
    });
});

// Conecta as rotas de tarefas
// Todas as rotas definidas em tarefasRoutes terão prefixo /tarefas
app.use('/tarefas', tarefasRoutes);

// ============================================
// TRATAMENTO DE ERROS
// ============================================

// Rota 404 - Quando nenhuma rota corresponde
app.use((req, res) => {
    res.status(404).json({
        sucesso: false,
        mensagem: `Rota ${req.method} ${req.url} não encontrada`,
        sugestao: 'Acesse GET / para ver os endpoints disponíveis'
    });
});

// Middleware de erro global
app.use((err, req, res, next) => {
    console.error('❌ Erro:', err.message);
    res.status(500).json({
        sucesso: false,
        mensagem: 'Erro interno do servidor',
        erro: err.message
    });
});

// ============================================
// INICIALIZAÇÃO DO SERVIDOR
// ============================================

app.listen(PORT, () => {
    console.log('============================================');
    console.log('🚀 API de Lista de Tarefas');
    console.log('============================================');
    console.log(`📡 Servidor rodando em: http://localhost:${PORT}`);
    console.log('📋 Endpoints disponíveis:');
    console.log(`   GET    http://localhost:${PORT}/tarefas`);
    console.log(`   GET    http://localhost:${PORT}/tarefas/:id`);
    console.log(`   POST   http://localhost:${PORT}/tarefas`);
    console.log(`   PUT    http://localhost:${PORT}/tarefas/:id`);
    console.log(`   DELETE http://localhost:${PORT}/tarefas/:id`);
    console.log('============================================');
    console.log('Pressione Ctrl+C para parar o servidor');
});
