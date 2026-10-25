const botaoMenu = document.getElementById("btn-menu");
const menuNavegacao = document.getElementById("menu-navegacao");

// Abre ou fecha o menu
botaoMenu.addEventListener("click", function() {

    const menuAberto = botaoMenu.getAttribute("aria-expanded") === "true";

    botaoMenu.setAttribute("aria-expanded", !menuAberto);

    botaoMenu.setAttribute(
        "aria-label",
        menuAberto ? "Abrir menu de navegação" : "Fechar menu de navegação"
    );

    menuNavegacao.hidden = menuAberto;

});

// Fecha o menu ao selecionar uma opção
menuNavegacao.querySelectorAll("a").forEach(function(link) {

    link.addEventListener("click", function() {
        menuNavegacao.hidden = true;
        botaoMenu.setAttribute("aria-expanded", "false");
        botaoMenu.setAttribute("aria-label", "Abrir menu de navegação");
    });

});

// Fecha o menu ao clicar fora dele
document.addEventListener("click", function(event) {

    const clicouNoMenu = menuNavegacao.contains(event.target);
    const clicouNoBotao = botaoMenu.contains(event.target);

    if (!clicouNoMenu && !clicouNoBotao) {
        menuNavegacao.hidden = true;
        botaoMenu.setAttribute("aria-expanded", "false");
        botaoMenu.setAttribute("aria-label", "Abrir menu de navegação");
    }

});

// Fecha o menu ao pressionar Escape
document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {
        menuNavegacao.hidden = true;
        botaoMenu.setAttribute("aria-expanded", "false");
        botaoMenu.setAttribute("aria-label", "Abrir menu de navegação");
    }

});