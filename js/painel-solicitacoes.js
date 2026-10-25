// =========================================
// PAINEL DE SOLICITAÇÕES — CINÉFILO
// =========================================

let filtroAtual = "Todas";

// Recupera as solicitações armazenadas
function obterSolicitacoes() {
    try {
        const dados = JSON.parse(
            localStorage.getItem("solicitacoes")
        );

        return Array.isArray(dados) ? dados : [];

    } catch (erro) {
        console.error("Erro ao recuperar solicitações:", erro);
        return [];
    }
}

// Salva as alterações no LocalStorage
function salvarSolicitacoes(solicitacoes) {
    localStorage.setItem(
        "solicitacoes",
        JSON.stringify(solicitacoes)
    );
}

// Atualiza os números dos indicadores
function atualizarResumo(solicitacoes) {
    document.getElementById("total-solicitacoes").textContent =
        solicitacoes.length;

    document.getElementById("total-pendentes").textContent =
        solicitacoes.filter(item => item.status === "Pendente").length;

    document.getElementById("total-andamento").textContent =
        solicitacoes.filter(item => item.status === "Em andamento").length;

    document.getElementById("total-concluidas").textContent =
        solicitacoes.filter(item => item.status === "Concluída").length;
}

// Cria um elemento HTML com texto seguro
function criarElemento(tag, classe, texto) {
    const elemento = document.createElement(tag);

    if (classe) {
        elemento.className = classe;
    }

    if (texto !== undefined) {
        elemento.textContent = texto;
    }

    return elemento;
}

// Cria o cartão de uma solicitação
function criarCartao(solicitacao) {
    const cartao = criarElemento("article", "card-solicitacao");

    // Cabeçalho do cartão
    const cabecalho = criarElemento("div", "cabecalho-solicitacao");

    const titulo = criarElemento(
        "h4",
        "",
        solicitacao.titulo || "Sem título"
    );

    const tipo = criarElemento(
        "span",
        "tipo-solicitacao",
        solicitacao.tipo || "Não informado"
    );

    cabecalho.append(titulo, tipo);

    // Descrição
    const descricao = criarElemento(
        "p",
        "descricao-solicitacao",
        solicitacao.descricao || "Sem descrição."
    );

    // Informações adicionais
    const informacoes = criarElemento("div", "informacoes-solicitacao");

    const prioridadeTexto = solicitacao.prioridade || "Não informada";

    const prioridade = criarElemento(
        "span",
        `prioridade prioridade-${prioridadeTexto.toLowerCase()}`,
        `Prioridade: ${prioridadeTexto}`
    );

    const data = criarElemento(
        "span",
        "data-solicitacao",
        solicitacao.data || "Data não informada"
    );

    informacoes.append(prioridade, data);

    // Área de gerenciamento
    const gerenciamento = criarElemento(
        "div",
        "gerenciamento-solicitacao"
    );

    const labelStatus = criarElemento("label", "", "Status:");

    const seletorStatus = document.createElement("select");
    seletorStatus.className = "seletor-status";

    const statusDisponiveis = [
        "Pendente",
        "Em andamento",
        "Concluída"
    ];

    statusDisponiveis.forEach(status => {
        const opcao = document.createElement("option");

        opcao.value = status;
        opcao.textContent = status;

        if (status === (solicitacao.status || "Pendente")) {
            opcao.selected = true;
        }

        seletorStatus.appendChild(opcao);
    });

    // Altera o status da solicitação
    seletorStatus.addEventListener("change", () => {
        alterarStatus(solicitacao.id, seletorStatus.value);
    });

    // Botão de exclusão
    const botaoExcluir = criarElemento(
        "button",
        "btn-excluir-solicitacao",
        "Excluir"
    );

    botaoExcluir.type = "button";

    botaoExcluir.addEventListener("click", () => {
        excluirSolicitacao(solicitacao.id);
    });

    gerenciamento.append(
        labelStatus,
        seletorStatus,
        botaoExcluir
    );

    // Montagem final do cartão
    cartao.append(
        cabecalho,
        descricao,
        informacoes,
        gerenciamento
    );

    return cartao;
}

// Exibe as solicitações na página
function exibirSolicitacoes() {
    const solicitacoes = obterSolicitacoes();

    const lista = document.getElementById("lista-solicitacoes");
    const mensagemVazia = document.getElementById("mensagem-vazia");

    lista.replaceChildren();

    // Atualiza os indicadores com todos os registros
    atualizarResumo(solicitacoes);

    // Aplica o filtro selecionado
    const solicitacoesFiltradas = filtroAtual === "Todas"
        ? solicitacoes
        : solicitacoes.filter(solicitacao =>
            solicitacao.status === filtroAtual
        );

    // Verifica se existem solicitações para exibir
    if (solicitacoesFiltradas.length === 0) {
        mensagemVazia.style.display = "block";

        mensagemVazia.textContent = solicitacoes.length === 0
            ? "Nenhuma solicitação foi recebida até o momento."
            : "Nenhuma solicitação encontrada para este status.";

        return;
    }

    mensagemVazia.style.display = "none";

    // Exibe somente as solicitações filtradas
    solicitacoesFiltradas.forEach(solicitacao => {
        const cartao = criarCartao(solicitacao);
        lista.appendChild(cartao);
    });
}

// Atualiza o status de uma solicitação
function alterarStatus(id, novoStatus) {
    const solicitacoes = obterSolicitacoes();

    const atualizadas = solicitacoes.map(solicitacao => {
        if (String(solicitacao.id) === String(id)) {
            return {
                ...solicitacao,
                status: novoStatus
            };
        }

        return solicitacao;
    });

    salvarSolicitacoes(atualizadas);
    exibirSolicitacoes();
}

// Exclui uma solicitação
function excluirSolicitacao(id) {
    const confirmar = window.confirm(
        "Tem certeza de que deseja excluir esta solicitação?"
    );

    if (!confirmar) {
        return;
    }

    const solicitacoes = obterSolicitacoes();

    const atualizadas = solicitacoes.filter(
        solicitacao => String(solicitacao.id) !== String(id)
    );

    salvarSolicitacoes(atualizadas);
    exibirSolicitacoes();
}

// Configura o filtro de status
const filtroStatus = document.getElementById("filtro-status");

filtroStatus.addEventListener("change", function () {
    filtroAtual = filtroStatus.value;
    exibirSolicitacoes();
});

// Inicializa o painel
exibirSolicitacoes();