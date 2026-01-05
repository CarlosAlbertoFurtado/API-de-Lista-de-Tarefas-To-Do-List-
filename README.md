# API de Tarefas

API simples que fiz pra aprender backend com Node.js e Express.

## Motivação

Queria entender como funciona uma API por baixo dos panos. Escolhi fazer um to-do list porque é um CRUD basico e da pra praticar tudo que precisa: rotas, requisições HTTP, organização de código.

## Stack

- Node.js
- Express

## Rodando o projeto

```bash
npm install
npm start
```

Servidor vai subir em http://localhost:3000

Pra desenvolvimento com auto-reload:
```bash
npm run dev
```

## Endpoints

| Metodo | Rota | Desc |
|--------|------|------|
| GET | /tarefas | lista todas |
| GET | /tarefas/:id | busca uma |
| POST | /tarefas | cria nova |
| PUT | /tarefas/:id | atualiza |
| DELETE | /tarefas/:id | deleta |

## Exemplos

Criar tarefa:
```json
POST /tarefas
{
  "titulo": "Fazer algo",
  "descricao": "opcional"
}
```

Marcar como feita:
```json
PUT /tarefas/1
{
  "concluida": true
}
```

## Estrutura

```
src/
  server.js       # entrada da app
  routes/
    tarefas.js    # rotas
  data/
    tarefas.js    # onde guarda os dados
```

## Obs

Os dados ficam em memória, então se reiniciar o servidor perde tudo. Em projetos reais usaria MongoDB ou PostgreSQL.

## Próximos passos

- Conectar num banco de dados
- Adicionar autenticação
- Deploy

---

Desenvolvido por Carlos Alberto Furtado
