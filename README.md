# 📝 API de Lista de Tarefas (To-Do List)

Uma API REST simples para gerenciar tarefas, desenvolvida para aprender conceitos fundamentais de backend.

## 🎯 Conceitos Aprendidos

- **API REST**: Interface de programação que segue padrões arquiteturais
- **Rotas HTTP**: GET (buscar), POST (criar), PUT (atualizar), DELETE (remover)
- **Servidor Express**: Framework minimalista para Node.js
- **Dados em Memória**: Armazenamento temporário usando arrays JavaScript

## 🚀 Como Executar

### 1. Instalar dependências
```bash
npm install
```

### 2. Iniciar o servidor
```bash
npm start
```

### 3. Modo desenvolvimento (com auto-reload)
```bash
npm run dev
```

O servidor estará rodando em: `http://localhost:3000`

## 📡 Endpoints da API

### Listar todas as tarefas
```http
GET /tarefas
```

### Buscar uma tarefa específica
```http
GET /tarefas/:id
```

### Criar nova tarefa
```http
POST /tarefas
Content-Type: application/json

{
  "titulo": "Minha tarefa",
  "descricao": "Descrição opcional"
}
```

### Atualizar tarefa
```http
PUT /tarefas/:id
Content-Type: application/json

{
  "titulo": "Título atualizado",
  "descricao": "Nova descrição",
  "concluida": true
}
```

### Deletar tarefa
```http
DELETE /tarefas/:id
```

## 📁 Estrutura do Projeto

```
├── src/
│   ├── server.js          # Arquivo principal do servidor
│   ├── routes/
│   │   └── tarefas.js     # Rotas da API de tarefas
│   └── data/
│       └── tarefas.js     # Dados em memória
├── package.json           # Dependências e scripts
└── README.md              # Este arquivo
```

## 🧪 Testando a API

Use ferramentas como:
- **Postman**
- **Insomnia**
- **cURL** no terminal
- Extensão **REST Client** do VS Code

### Exemplo com cURL

```bash
# Criar uma tarefa
curl -X POST http://localhost:3000/tarefas \
  -H "Content-Type: application/json" \
  -d '{"titulo": "Estudar Node.js"}'

# Listar tarefas
curl http://localhost:3000/tarefas

# Marcar como concluída
curl -X PUT http://localhost:3000/tarefas/1 \
  -H "Content-Type: application/json" \
  -d '{"concluida": true}'

# Deletar tarefa
curl -X DELETE http://localhost:3000/tarefas/1
```

## 📚 Próximos Passos

Após dominar este projeto, você pode:
1. Adicionar persistência com banco de dados (MongoDB, PostgreSQL)
2. Implementar autenticação (JWT)
3. Adicionar validação de dados
4. Criar testes automatizados
5. Fazer deploy em serviços cloud (Railway, Render, Heroku)
