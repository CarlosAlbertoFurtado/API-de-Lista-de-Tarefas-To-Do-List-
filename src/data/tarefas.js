// dados das tarefas (armazenados em memoria)
// obs: quando reinicia o servidor, perde tudo

let tarefas = [
    {
        id: 1,
        titulo: "Estudar Node.js",
        descricao: "Ver documentacao e fazer exercicios",
        concluida: false,
        criadaEm: new Date().toISOString()
    },
    {
        id: 2,
        titulo: "Terminar esse projeto",
        descricao: "",
        concluida: true,
        criadaEm: new Date().toISOString()
    }
];

let contadorId = 3;

// funcoes

function obterTodas() {
    return tarefas;
}

function obterPorId(id) {
    return tarefas.find(t => t.id === parseInt(id));
}

function criar(dados) {
    const nova = {
        id: contadorId,
        titulo: dados.titulo,
        descricao: dados.descricao || "",
        concluida: false,
        criadaEm: new Date().toISOString()
    };
    contadorId++;
    tarefas.push(nova);
    return nova;
}

function atualizar(id, dados) {
    const idx = tarefas.findIndex(t => t.id === parseInt(id));

    if (idx === -1) {
        return null;
    }

    // atualiza so o que foi passado
    if (dados.titulo !== undefined) {
        tarefas[idx].titulo = dados.titulo;
    }
    if (dados.descricao !== undefined) {
        tarefas[idx].descricao = dados.descricao;
    }
    if (dados.concluida !== undefined) {
        tarefas[idx].concluida = dados.concluida;
    }

    return tarefas[idx];
}

function remover(id) {
    const idx = tarefas.findIndex(t => t.id === parseInt(id));

    if (idx === -1) {
        return false;
    }

    tarefas.splice(idx, 1);
    return true;
}

module.exports = {
    obterTodas,
    obterPorId,
    criar,
    atualizar,
    remover
};
