// ============================================
// DESAFIOS — CINÉFILO
// ============================================

const listaDesafios = document.querySelector("#lista-desafios");
const progressoTexto = document.querySelector("#progresso-texto");

// Executa somente na página de desafios.
if (listaDesafios && progressoTexto) {

    // ----------------------------------------
    // 1. Recuperar os dados do LocalStorage
    // ----------------------------------------

    function obterDados(chave) {
        try {
            const dados = JSON.parse(localStorage.getItem(chave) || "[]");
            return Array.isArray(dados) ? dados : [];
        } catch (erro) {
            console.error(`Erro ao recuperar ${chave}:`, erro);
            return [];
        }
    }

    const diario = obterDados("cinefilo-diario");
    const obras = obterDados("cinefilo-obras");

    // ----------------------------------------
    // 2. Identificar os filmes do catálogo
    // ----------------------------------------

    // No catálogo do Cinéfilo:
    // 100 a 199 = filmes
    // 200 a 299 = animes
    // 300 em diante = séries

    const filmes = obras.filter(function (obra) {
        const id = Number(obra.id);
        return id >= 100 && id < 200;
    });

    // Relaciona cada avaliação ao respectivo filme.
    const filmesAvaliados = new Map();

    diario.forEach(function (avaliacao) {

        const id = Number(avaliacao.obraId);

        const filme = filmes.find(function (obra) {
            return Number(obra.id) === id;
        });

        if (!filme) return;

        if (!filmesAvaliados.has(id)) {
            filmesAvaliados.set(id, []);
        }

        filmesAvaliados.get(id).push(avaliacao);
    });

    // Lista de filmes distintos que receberam avaliação.
    const obrasAvaliadas = filmes.filter(function (filme) {
        return filmesAvaliados.has(Number(filme.id));
    });

    // ----------------------------------------
    // 3. Funções auxiliares
    // ----------------------------------------

    function possuiGenero(filme, genero) {
        return Array.isArray(filme.generos) &&
            filme.generos.some(function (item) {
                return item.toLowerCase() === genero.toLowerCase();
            });
    }

    function possuiComentario(filme) {
        const avaliacoes = filmesAvaliados.get(Number(filme.id)) || [];

        return avaliacoes.some(function (avaliacao) {
            return typeof avaliacao.comentario === "string" &&
                avaliacao.comentario.trim() !== "";
        });
    }

    // ----------------------------------------
    // 4. Definição dos desafios
    // ----------------------------------------

    const desafios = [

        {
            nome: "Primeiro Passo",
            descricao: "Avalie seu primeiro filme.",
            disponivel: true,
            verificar: function () {
                return obrasAvaliadas.length >= 1;
            }
        },

        {
            nome: "Crítico Exigente",
            descricao: "Dê uma nota 5 para um filme.",
            disponivel: true,
            verificar: function () {
                return obrasAvaliadas.some(function (filme) {
                    const avaliacoes = filmesAvaliados.get(Number(filme.id));

                    return avaliacoes.some(function (avaliacao) {
                        return Number(avaliacao.notaPessoal) === 5;
                    });
                });
            }
        },

        {
            nome: "Devoto do Drama",
            descricao: "Avalie 3 filmes do gênero Drama.",
            disponivel: true,
            verificar: function () {
                return obrasAvaliadas.filter(function (filme) {
                    return possuiGenero(filme, "Drama");
                }).length >= 3;
            }
        },

        {
            nome: "Noite de Terror",
            descricao: "Avalie 2 filmes do gênero Terror.",
            disponivel: true,
            verificar: function () {
                return obrasAvaliadas.filter(function (filme) {
                    return possuiGenero(filme, "Terror");
                }).length >= 2;
            }
        },

        {
            nome: "Cronista",
            descricao: "Escreva críticas para 3 filmes.",
            disponivel: true,
            verificar: function () {
                return obrasAvaliadas.filter(function (filme) {
                    return possuiComentario(filme);
                }).length >= 3;
            }
        },

        {
            nome: "Cinéfilo A24",
            descricao: "Este desafio estará disponível em uma próxima atualização.",
            disponivel: false,
            verificar: function () {
                return false;
            }
        },

        {
            nome: "Maratonista",
            descricao: "Avalie 6 filmes.",
            disponivel: true,
            verificar: function () {
                return obrasAvaliadas.length >= 6;
            }
        },

        {
            nome: "Viagem Mundial",
            descricao: "Avalie filmes de 3 diretores diferentes.",
            disponivel: true,
            verificar: function () {

                const diretores = new Set();

                obrasAvaliadas.forEach(function (filme) {
                    if (filme.diretor) {
                        diretores.add(filme.diretor.trim());
                    }
                });

                return diretores.size >= 3;
            }
        }
    ];

    // ----------------------------------------
    // 5. Renderizar os cartões
    // ----------------------------------------

    listaDesafios.innerHTML = "";

    let desafiosConcluidos = 0;
    const desafiosDisponiveis = desafios.filter(function (desafio) {
        return desafio.disponivel;
    }).length;

    desafios.forEach(function (desafio) {

        const card = document.createElement("article");
        card.classList.add("desafio");

        const concluido = desafio.disponivel && desafio.verificar();

        if (concluido) {
            desafiosConcluidos++;
            card.classList.add("desafio-concluido");
        }

        if (!desafio.disponivel) {
            card.classList.add("desafio-em-breve");
        }

        const nome = document.createElement("h2");
        nome.textContent = desafio.nome;

        const descricao = document.createElement("p");
        descricao.textContent = desafio.descricao;

        const status = document.createElement("p");
        status.classList.add("status-desafio");

        if (!desafio.disponivel) {
            status.textContent = "Em breve";
            status.classList.add("status-em-breve");
        } else if (concluido) {
            status.textContent = "Concluído";
            status.classList.add("status-concluido");
        } else {
            status.textContent = "Não concluído";
            status.classList.add("status-pendente");
        }

        card.appendChild(nome);
        card.appendChild(descricao);
        card.appendChild(status);

        listaDesafios.appendChild(card);
    });

    // ----------------------------------------
    // 6. Atualizar o progresso
    // ----------------------------------------

    progressoTexto.textContent =
        `${desafiosConcluidos} de ${desafiosDisponiveis} desafios concluídos`;

}