# 📝 API de Lista de Tarefas (To-Do List)

Desenvolvi essa API REST para organizar minhas tarefas do dia a dia enquanto aprendia os fundamentos de backend com Node.js.

## Sobre o Projeto

Esse foi um dos meus primeiros projetos backend. A ideia surgiu porque eu precisava entender na prática como funcionam as APIs que a gente consome no frontend. Decidi criar algo útil pra mim: um gerenciador de tarefas simples.

O projeto usa dados em memória (sem banco de dados), justamente porque meu foco aqui era entender bem o fluxo de requisições HTTP antes de partir pro banco. 

## O que aprendi desenvolvendo

- Como estruturar rotas em uma API REST
- Os verbos HTTP na prática (GET, POST, PUT, DELETE)
- Organização de pastas num projeto Node
- Como testar endpoints usando Postman

## Tecnologias

- Node.js
- Express

## Como rodar

```bash
# Instala as dependências
npm install

# Roda o servidor
npm start

# Ou em modo dev (reinicia sozinho quando salva)
npm run dev
```

Acessa em: `http://localhost:3000`

## Rotas

| Método | Rota | O que faz |
|--------|------|-----------|
| GET | /tarefas | Lista todas as tarefas |
| GET | /tarefas/:id | Busca uma tarefa pelo ID |
| POST | /tarefas | Cria uma tarefa nova |
| PUT | /tarefas/:id | Atualiza uma tarefa |
| DELETE | /tarefas/:id | Remove uma tarefa |

### Criando uma tarefa

```json
POST /tarefas

{
  "titulo": "Estudar Node.js",
  "descricao": "Revisar módulos e rotas"
}
```

### Marcando como concluída

```json
PUT /tarefas/1

{
  "concluida": true
}
```

## Estrutura

```
src/
├── server.js        # Arquivo principal
├── routes/
│   └── tarefas.js   # Rotas da API
└── data/
    └── tarefas.js   # Onde ficam os dados
```

## Próximos passos

Pretendo evoluir esse projeto adicionando:
- Banco de dados (PostgreSQL ou MongoDB)
- Autenticação com JWT
- Validação dos dados de entrada
- Testes automatizados

---

*Projeto desenvolvido para estudo de desenvolvimento backend.*
