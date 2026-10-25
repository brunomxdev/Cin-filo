
// Seleciona o formulário e a mensagem de retorno
const formulario = document.getElementById("form-solicitacao");
const mensagem = document.getElementById("mensagem-solicitacao");

// Evento executado quando o formulário é enviado
formulario.addEventListener("submit", function (evento) {

    // Impede o recarregamento da página
    evento.preventDefault();

    // Recupera os valores preenchidos
    const tipo = document.getElementById("tipo").value;
    const titulo = document.getElementById("titulo").value.trim();
    const descricao = document.getElementById("descricao").value.trim();
    const prioridade = document.getElementById("prioridade").value;

    // Cria o objeto com os dados da solicitação
    const solicitacao = {
        id: Date.now(),
        tipo: tipo,
        titulo: titulo,
        descricao: descricao,
        prioridade: prioridade,
        status: "Pendente",
        data: new Date().toLocaleString("pt-BR")
    };

    try {
        // Recupera as solicitações já armazenadas
        const solicitacoes = JSON.parse(
            localStorage.getItem("solicitacoes") || "[]"
        );

        // Adiciona a nova solicitação à lista
        solicitacoes.push(solicitacao);

        // Salva a lista atualizada no LocalStorage
        localStorage.setItem(
            "solicitacoes",
            JSON.stringify(solicitacoes)
        );

        // Limpa os campos do formulário
        formulario.reset();

        // Exibe uma mensagem de confirmação
        mensagem.textContent = "Solicitação enviada com sucesso!";
        mensagem.style.color = "#4caf50";

    } catch (erro) {

        // Informa caso ocorra algum problema no armazenamento
        mensagem.textContent = "Não foi possível salvar a solicitação.";
        mensagem.style.color = "#ff5252";

        console.error("Erro ao salvar solicitação:", erro);
    }

});