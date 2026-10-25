// Recupera a sessão armazenada no navegador
const sessaoArmazenada = localStorage.getItem("sessaoCinefilo");

let sessao = null;

try {
    sessao = JSON.parse(sessaoArmazenada);
} catch (erro) {
    sessao = null;
}

// Identifica o perfil autorizado para a página atual
const perfilNecessario = document.body.dataset.perfil;

// Verifica se existe uma sessão válida
if (!sessao || !sessao.perfil) {

    window.location.replace("acesso.html");

} else if (sessao.perfil !== perfilNecessario) {

    // Impede o acesso de um perfil não autorizado
    window.location.replace("acesso.html");

}