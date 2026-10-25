function encerrarSessao() {

    // Remove os dados da sessão do navegador
    localStorage.removeItem("sessaoCinefilo");

    // Redireciona para a página de acesso
    window.location.replace("acesso.html");

}