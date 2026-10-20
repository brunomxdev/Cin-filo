// ============================
// LOGIN
// ============================

// Seleciona os elementos da página

const formularioLogin = document.querySelector("#form-login");

const emailLogin = document.querySelector("#email");

const senhaLogin = document.querySelector("#senha");

const mensagemLogin = document.querySelector("#mensagem-login");

// Verifica se estamos na página de Login

if (
 formularioLogin &&
 emailLogin &&
 senhaLogin &&
 mensagemLogin
) {

 // Evento enviado quando o usuário tenta entrar

 formularioLogin.addEventListener("submit", function (evento) {

 // Impede o formulário de recarregar a página

 evento.preventDefault();

 // Recupera os dados do usuário salvos no navegador

 const usuario = JSON.parse(
 localStorage.getItem("usuario")
 );

 // Verifica se existe uma conta cadastrada

 if (!usuario) {

 mensagemLogin.textContent =
 "Nenhuma conta cadastrada. Crie uma conta primeiro.";

 return;
 }

 // Verifica e-mail e senha

 if (
 emailLogin.value === usuario.email &&
 senhaLogin.value === usuario.senha
 ) {

 // Salva o estado de login

 localStorage.setItem(
 "usuarioLogado",
 "true"
 );

 // Mensagem de sucesso

 mensagemLogin.textContent =
 "Login realizado com sucesso!";

 // Aguarda um pouco antes de entrar no catálogo

 setTimeout(function () {

 window.location.href = "index.html";

 }, 1000);

 }

 else {

 mensagemLogin.textContent =
 "E-mail ou senha incorretos.";

 }

 });

}
