
const formAcesso = document.getElementById("form-acesso");
const mensagemAcesso = document.getElementById("mensagem-acesso");

// Contas demonstrativas
const usuarios = [
    {
        usuario: "proprietario",
        senha: "cinefilo123",
        perfil: "proprietario"
    },
    {
        usuario: "desenvolvedor",
        senha: "dev123",
        perfil: "desenvolvedor"
    }
];

formAcesso.addEventListener("submit", function(event) {

    event.preventDefault();

    const usuarioDigitado = document.getElementById("usuario").value.trim();
    const senhaDigitada = document.getElementById("senha").value;

    // Procura uma conta com as credenciais informadas
    const usuarioEncontrado = usuarios.find(function(conta) {
        return conta.usuario === usuarioDigitado &&
               conta.senha === senhaDigitada;
    });

    if (!usuarioEncontrado) {
        mensagemAcesso.textContent = "Usuário ou senha incorretos.";
        return;
    }

    // Salva a sessão no navegador
    const sessao = {
        usuario: usuarioEncontrado.usuario,
        perfil: usuarioEncontrado.perfil
    };

    localStorage.setItem("sessaoCinefilo", JSON.stringify(sessao));

    // Redireciona conforme o perfil
    if (usuarioEncontrado.perfil === "proprietario") {
        window.location.href = "solicitacoes.html";
    } else if (usuarioEncontrado.perfil === "desenvolvedor") {
        window.location.href = "painel-solicitacoes.html";
    }

});
