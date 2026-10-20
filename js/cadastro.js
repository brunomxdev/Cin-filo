// ============================
// CADASTRO
// ============================

// Seleciona os elementos da página

const formularioCadastro =
 document.querySelector("#form-cadastro");

const nomeCadastro =
 document.querySelector("#nome");

const emailCadastro =
 document.querySelector("#email");

const senhaCadastro =
 document.querySelector("#senha");

const confirmarSenha =
 document.querySelector("#confirmar-senha");

const mensagemCadastro =
 document.querySelector("#mensagem-cadastro");

// Verifica se estamos na página de Cadastro

if (
 formularioCadastro &&
 nomeCadastro &&
 emailCadastro &&
 senhaCadastro &&
 confirmarSenha &&
 mensagemCadastro
) {

 // Evento de envio do formulário

 formularioCadastro.addEventListener(
 "submit",
 function (evento) {

 // Impede o recarregamento da página

 evento.preventDefault();

 // Obtém os valores digitados

 const nome = nomeCadastro.value.trim();

 const email = emailCadastro.value.trim();

 const senha = senhaCadastro.value;

 const senhaConfirmada =
 confirmarSenha.value;

 // ============================
 // VALIDAÇÕES
 // ============================

 // Verifica se o nome foi preenchido

 if (nome === "") {

 mensagemCadastro.textContent =
 "Digite seu nome.";

 return;
 }

 // Verifica se a senha possui pelo menos 6 caracteres

 if (senha.length < 6) {

 mensagemCadastro.textContent =
 "A senha deve possuir pelo menos 6 caracteres.";

 return;
 }

 // Verifica se as senhas são iguais

 if (senha!== senhaConfirmada) {

 mensagemCadastro.textContent =
 "As senhas não são iguais.";

 return;
 }

 // ============================
 // VERIFICA USUÁRIO EXISTENTE
 // ============================

 const usuarioExistente =
 JSON.parse(
 localStorage.getItem("usuario")
 );

 if (
 usuarioExistente &&
 usuarioExistente.email === email
 ) {

 mensagemCadastro.textContent =
 "Já existe uma conta com este e-mail.";

 return;
 }

 // ============================
 // CRIA O USUÁRIO
 // ============================

 const usuario = {

 nome: nome,

 email: email,

 senha: senha

 };

 // Salva o usuário no navegador

 localStorage.setItem(
 "usuario",
 JSON.stringify(usuario)
 );

 // Mostra mensagem de sucesso

 mensagemCadastro.textContent =
 "Conta criada com sucesso!";

 // Limpa o formulário

 formularioCadastro.reset();

 // Aguarda um pouco e vai para o Login

 setTimeout(function () {

 window.location.href = "login.html";

 }, 1000);

 }
 );

}
