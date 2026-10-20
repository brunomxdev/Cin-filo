// ============================
// DESAFIOS
// ============================

const listaDesafios = document.querySelector("#lista-desafios");
const progressoTexto = document.querySelector("#progresso-texto");

// Executa somente quando os elementos da página de desafios existem.
if (listaDesafios && progressoTexto) {
    let criticas = [];

    // Evita que dados inválidos no localStorage impeçam a página de abrir.
    try {
        criticas = JSON.parse(localStorage.getItem("criticas") || "[]");
        if (!Array.isArray(criticas)) criticas = [];
    } catch (erro) {
        criticas = [];
    }

    const desafios = [
        {
            nome: "Primeiro Passo",
            descricao: "Avalie seu primeiro filme.",
            verificar: function () {
                return criticas.length >= 1;
            }
        },
        {
            nome: "Crítico Exigente",
            descricao: "Dê uma nota 5 para um filme.",
            verificar: function () {
                return criticas.some(function (critica) {
                    return Number(critica.nota) === 5;
                });
            }
        },
        {
            nome: "Devoto do Drama",
            descricao: "Avalie 3 filmes do gênero Drama.",
            verificar: function () {
                const dramas = criticas.filter(function (critica) {
                    return critica.genero === "Drama";
                });
                return dramas.length >= 3;
            }
        },
        {
            nome: "Noite de Terror",
            descricao: "Avalie 2 filmes do gênero Terror.",
            verificar: function () {
                const terrores = criticas.filter(function (critica) {
                    return critica.genero === "Terror";
                });
                return terrores.length >= 2;
            }
        },
        {
            nome: "Cronista",
            descricao: "Escreva críticas para 3 filmes.",
            verificar: function () {
                const criticasEscritas = criticas.filter(function (critica) {
                    return critica.critica && critica.critica.trim() !== "";
                });
                return criticasEscritas.length >= 3;
            }
        },
        {
            nome: "Cinéfilo A24",
            descricao: "Avalie 2 filmes da A24.",
            verificar: function () {
                const filmesA24 = criticas.filter(function (critica) {
                    return critica.estudio === "A24";
                });
                return filmesA24.length >= 2;
            }
        },
        {
            nome: "Maratonista",
            descricao: "Avalie 6 filmes.",
            verificar: function () {
                return criticas.length >= 6;
            }
        },
        {
            nome: "Viagem Mundial",
            descricao: "Avalie filmes de 3 diretores diferentes.",
            verificar: function () {
                const diretores = [];
                criticas.forEach(function (critica) {
                    if (critica.diretor && !diretores.includes(critica.diretor)) {
                        diretores.push(critica.diretor);
                    }
                });
                return diretores.length >= 3;
            }
        }
    ];

    let desafiosConcluidos = 0;

    desafios.forEach(function (desafio) {
        const concluido = desafio.verificar();
        if (concluido) desafiosConcluidos++;

        const card = document.createElement("article");
        card.classList.add("desafio");
        if (concluido) card.classList.add("desafio-concluido");

        const nome = document.createElement("h2");
        nome.textContent = desafio.nome;

        const descricao = document.createElement("p");
        descricao.textContent = desafio.descricao;

        const status = document.createElement("p");
        status.classList.add("status-desafio");
        if (concluido) {
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

    progressoTexto.textContent = `${desafiosConcluidos} de ${desafios.length} desafios concluídos`;
}
