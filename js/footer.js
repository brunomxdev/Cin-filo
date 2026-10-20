/* footer.js — insere o footer do Cinéfilo em qualquer página.
   Uso: <script src="footer.js" defer></script> antes de </body>.
   Mantenha footer.js e footer.css na mesma pasta das páginas. */
(function () {
  // Carrega o CSS do footer automaticamente (uma única vez)
  if (!document.querySelector('link[href$="footer.css"]')) {
    var css = document.createElement('link');
    css.rel = 'stylesheet';
    css.href = 'footer.css';
    document.head.appendChild(css);
  }

  var html =
    '<footer class="footerCinefilo">' +
      '<div class="footerConteudo">' +
        '<div class="footerMarca">' +
          '<a href="index.html" class="footerLogo">Cinéfilo</a>' +
          '<p>Seu diário de filmes, séries e animes. Descubra, registre e acompanhe tudo o que você assiste.</p>' +
        '</div>' +
        '<nav class="footerColuna" aria-label="Explorar">' +
          '<h3>Explorar</h3>' +
          '<ul>' +
            '<li><a href="index.html#catalogo">Catálogo</a></li>' +
            '<li><a href="index.html#lancamentos">Lançamentos</a></li>' +
            '<li><a href="desafios.html">Desafios</a></li>' +
            '<li><a href="curadoria-ia.html">Curadoria IA</a></li>' +
          '</ul>' +
        '</nav>' +
        '<nav class="footerColuna" aria-label="Sua conta">' +
          '<h3>Sua conta</h3>' +
          '<ul>' +
            '<li><a href="diario.html">Meu diário</a></li>' +
            '<li><a href="estatisticas.html">Estatísticas</a></li>' +
            '<li><a href="login.html">Entrar</a></li>' +
            '<li><a href="cadastro.html">Criar conta</a></li>' +
          '</ul>' +
        '</nav>' +
      '</div>' +
      '<div class="footerBase">' +
        '<p>&copy; ' + new Date().getFullYear() + ' Cinéfilo. Projeto acadêmico.</p>' +
        '<a href="#" class="footerTopo" id="footerTopo">Voltar ao topo</a>' +
      '</div>' +
    '</footer>';

  function inserir() {
    if (document.querySelector('.footerCinefilo')) return; // evita duplicar
    var alvo = document.getElementById('footer');
    if (alvo) {
      alvo.innerHTML = html;           // se existir <div id="footer"></div>
    } else {
      document.body.insertAdjacentHTML('beforeend', html); // senão, no fim do body
    }
    document.getElementById('footerTopo').addEventListener('click', function (e) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', inserir);
  } else {
    inserir();
  }
})();