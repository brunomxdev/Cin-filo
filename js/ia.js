// ============================
// CURADORIA DE IA
// ============================




// Seleciona os elementos da página


const mensagens = document.querySelector("#chatbot-mensagens");


const botoesHumor = document.querySelectorAll(".humor");


const generoUsuario = document.querySelector("#genero-usuario");


const generoAmigo = document.querySelector("#genero-amigo");


const botaoCombinar = document.querySelector("#btn-combinar");




// Verifica se estamos na página da Curadoria


if (mensagens && botoesHumor.length > 0) {




    // ========================================
    // FUNÇÃO PARA ADICIONAR MENSAGEM AO CHAT
    // ========================================


    function adicionarMensagem(texto, tipo) {


        const mensagem = document.createElement("div");


        mensagem.classList.add("mensagem");
        mensagem.classList.add(tipo);




        const paragrafo = document.createElement("p");


        paragrafo.textContent = texto;




        mensagem.appendChild(paragrafo);


        mensagens.appendChild(mensagem);


    }




    // ========================================
    // RECOMENDAÇÕES BASEADAS NO HUMOR
    // ========================================


    const recomendacoesHumor = {


        feliz: [
            {
                titulo: "O Fabuloso Destino de Amélie Poulain",
                motivo: "Um filme leve, divertido e encantador."
            },
            {
                titulo: "Intocáveis",
                motivo: "Uma história divertida e emocionante sobre amizade."
            },
            {
                titulo: "Escola de Rock",
                motivo: "Uma comédia energética e descontraída."
            }
        ],


        triste: [
            {
                titulo: "À Procura da Felicidade",
                motivo: "Uma história emocionante sobre esperança e superação."
            },
            {
                titulo: "Extraordinário",
                motivo: "Uma história sensível sobre empatia, amizade e aceitação."
            },
            {
                titulo: "As Vantagens de Ser Invisível",
                motivo: "Um drama sobre amizade, amadurecimento e sentimentos."
            }
        ],


        ansioso: [
            {
                titulo: "O Show de Truman",
                motivo: "Uma história envolvente que prende a atenção."
            },
            {
                titulo: "A Origem",
                motivo: "Um suspense inteligente para mergulhar completamente na história."
            },
            {
                titulo: "O Castelo Animado",
                motivo: "Uma aventura fantástica para se desconectar da realidade."
            }
        ],


        cansado: [
            {
                titulo: "O Serviço de Entregas da Kiki",
                motivo: "Uma experiência tranquila, acolhedora e agradável."
            },
            {
                titulo: "Meu Vizinho Totoro",
                motivo: "Uma animação calma e confortável para assistir sem pressa."
            },
            {
                titulo: "Chef",
                motivo: "Uma história leve, divertida e gostosa de acompanhar."
            }
        ],


        animado: [
            {
                titulo: "Homem-Aranha: No Aranhaverso",
                motivo: "Uma aventura visualmente marcante e cheia de energia."
            },
            {
                titulo: "Mad Max: Estrada da Fúria",
                motivo: "Ação intensa e ritmo acelerado do começo ao fim."
            },
            {
                titulo: "Guardiões da Galáxia",
                motivo: "Uma aventura divertida, musical e cheia de ação."
            }
        ]


    };




    // ========================================
    // EVENTOS DOS BOTÕES DE HUMOR
    // ========================================


    botoesHumor.forEach(function (botao) {


        botao.addEventListener("click", function () {


            const humor = botao.dataset.humor;


            const filmesRecomendados =
                recomendacoesHumor[humor];




            adicionarMensagem(
                `Você está se sentindo ${humor}.`,
                "usuario"
            );




            adicionarMensagem(
                "Encontrei estas recomendações para você:",
                "ia"
            );




            filmesRecomendados.forEach(function (filme, indice) {


                adicionarMensagem(
                    `${indice + 1}. ${filme.titulo} — ${filme.motivo}`,
                    "ia"
                );


            });


        });


    });




    // ========================================
    // BASE DE FILMES PARA COMBINAR GOSTOS
    // ========================================


    const filmes = [


        {
            titulo: "Interestelar",
            generos: ["Ficção Científica", "Drama"]
        },


        {
            titulo: "A Origem",
            generos: ["Ficção Científica", "Thriller"]
        },


        {
            titulo: "Oppenheimer",
            generos: ["Drama", "Biografia", "Thriller"]
        },


        {
            titulo: "Duna: Parte Dois",
            generos: ["Ficção Científica", "Ação"]
        },


        {
            titulo: "Blade Runner 2049",
            generos: ["Ficção Científica", "Drama", "Thriller"]
        },


        {
            titulo: "Clube da Luta",
            generos: ["Drama", "Thriller"]
        },


        {
            titulo: "Seven: Os Sete Crimes Capitais",
            generos: ["Crime", "Thriller"]
        },


        {
            titulo: "Os Suspeitos",
            generos: ["Crime", "Drama", "Thriller"]
        },


        {
            titulo: "Corra!",
            generos: ["Terror", "Thriller"]
        },


        {
            titulo: "Um Lugar Silencioso",
            generos: ["Terror", "Thriller"]
        },


        {
            titulo: "Hereditário",
            generos: ["Terror", "Drama"]
        },


        {
            titulo: "As Branquelas",
            generos: ["Comédia"]
        },


        {
            titulo: "Se Beber, Não Case!",
            generos: ["Comédia"]
        },


        {
            titulo: "Superbad",
            generos: ["Comédia"]
        },


        {
            titulo: "Diário de uma Paixão",
            generos: ["Romance", "Drama"]
        },


        {
            titulo: "Questão de Tempo",
            generos: ["Romance", "Comédia", "Drama"]
        },


        {
            titulo: "Orgulho e Preconceito",
            generos: ["Romance", "Drama"]
        },


        {
            titulo: "John Wick",
            generos: ["Ação", "Crime"]
        },


        {
            titulo: "Top Gun: Maverick",
            generos: ["Ação", "Drama"]
        },


        {
            titulo: "Missão: Impossível",
            generos: ["Ação", "Thriller"]
        }


    ];




    // ========================================
    // COMBINAR GOSTOS
    // ========================================


    if (botaoCombinar && generoUsuario && generoAmigo) {


        botaoCombinar.addEventListener("click", function () {


            const meuGenero = generoUsuario.value;


            const generoDoAmigo = generoAmigo.value;




            // Verifica se os dois gêneros foram escolhidos


            if (meuGenero === "" || generoDoAmigo === "") {


                adicionarMensagem(
                    "Selecione um gênero para você e um gênero para seu amigo.",
                    "ia"
                );


                return;
            }




            // Encontra filmes que combinam com os dois gêneros


            const combinamComOsDois = filmes.filter(function (filme) {


                return filme.generos.includes(meuGenero) &&
                       filme.generos.includes(generoDoAmigo);


            });




            // Encontra filmes que combinam com pelo menos um gênero


            const combinamComUm = filmes.filter(function (filme) {


                const combinaComUsuario =
                    filme.generos.includes(meuGenero);


                const combinaComAmigo =
                    filme.generos.includes(generoDoAmigo);


                return combinaComUsuario || combinaComAmigo;


            });




            // Junta as recomendações


            let recomendacoes = [];




            combinamComOsDois.forEach(function (filme) {


                if (!recomendacoes.includes(filme)) {


                    recomendacoes.push(filme);


                }


            });




            combinamComUm.forEach(function (filme) {


                if (!recomendacoes.includes(filme)) {


                    recomendacoes.push(filme);


                }


            });




            // Limita a lista a 3 recomendações


            recomendacoes = recomendacoes.slice(0, 3);




            // Mostra a escolha dos usuários


            adicionarMensagem(
                `Você escolheu ${meuGenero} e seu amigo escolheu ${generoDoAmigo}.`,
                "usuario"
            );




            // Mostra as recomendações


            if (recomendacoes.length >= 3) {


                adicionarMensagem(
                    "Encontrei 3 filmes que podem agradar aos dois:",
                    "ia"
                );




                recomendacoes.forEach(function (filme, indice) {


                    adicionarMensagem(
                        `${indice + 1}. ${filme.titulo} — ${filme.generos.join(", ")}`,
                        "ia"
                    );


                });


            }


            else if (recomendacoes.length > 0) {


                adicionarMensagem(
                    `Encontrei ${recomendacoes.length} opção(ões) que combinam com os gostos de vocês:`,
                    "ia"
                );




                recomendacoes.forEach(function (filme, indice) {


                    adicionarMensagem(
                        `${indice + 1}. ${filme.titulo} — ${filme.generos.join(", ")}`,
                        "ia"
                    );


                });


            }


            else {


                adicionarMensagem(
                    "Não encontrei filmes suficientes para essa combinação de gêneros. Tentem escolher outros gêneros.",
                    "ia"
                );


            }


        });


    }


}


/* ==========================================
   NOVAS RECOMENDAÇÕES: SÉRIES E ANIMES
   ========================================== */

(function adicionarRecomendacoesExtras() {
    const areaMensagens = document.querySelector("#chatbot-mensagens");
    const botoesHumorExtras = document.querySelectorAll(".humor");
    const botaoCombinarExtras = document.querySelector("#btn-combinar");
    const selectUsuarioExtras = document.querySelector("#genero-usuario");
    const selectAmigoExtras = document.querySelector("#genero-amigo");

    if (!areaMensagens) return;

    // Adiciona mensagens sem alterar a função já existente.
    function adicionarMensagemExtra(texto, tipo) {
        const mensagem = document.createElement("div");
        mensagem.classList.add("mensagem", tipo);

        const paragrafo = document.createElement("p");
        paragrafo.textContent = texto;

        mensagem.appendChild(paragrafo);
        areaMensagens.appendChild(mensagem);
    }

    // Recomendações de séries e animes por humor.
    const recomendacoesExtrasPorHumor = {
        feliz: {
            series: [
                {
                    titulo: "Brooklyn Nine-Nine",
                    motivo: "Uma comédia leve, divertida e cheia de personagens carismáticos."
                },
                {
                    titulo: "Ted Lasso",
                    motivo: "Uma série otimista sobre amizade, empatia e superação."
                }
            ],
            animes: [
                {
                    titulo: "Spy x Family",
                    motivo: "Uma comédia divertida que mistura ação e momentos familiares."
                },
                {
                    titulo: "Haikyuu!!",
                    motivo: "Um anime energético sobre amizade, trabalho em equipe e esporte."
                }
            ]
        },

        triste: {
            series: [
                {
                    titulo: "Anne with an E",
                    motivo: "Uma história sensível sobre pertencimento, amizade e amadurecimento."
                },
                {
                    titulo: "Atypical",
                    motivo: "Uma série sobre família, relacionamentos e autoconhecimento."
                }
            ],
            animes: [
                {
                    titulo: "Violet Evergarden",
                    motivo: "Uma história emocionante sobre sentimentos e conexões humanas."
                },
                {
                    titulo: "Fruits Basket",
                    motivo: "Um anime sobre acolhimento, relações e superação de dificuldades."
                }
            ]
        },

        ansioso: {
            series: [
                {
                    titulo: "The Good Place",
                    motivo: "Uma comédia envolvente que mistura mistério e reflexões filosóficas."
                },
                {
                    titulo: "Modern Family",
                    motivo: "Episódios leves e divertidos para acompanhar sem muita pressão."
                }
            ],
            animes: [
                {
                    titulo: "Barakamon",
                    motivo: "Uma história tranquila sobre recomeços e descoberta pessoal."
                },
                {
                    titulo: "Natsume Yuujinchou",
                    motivo: "Um anime contemplativo sobre amizade e encontros especiais."
                }
            ]
        },

        cansado: {
            series: [
                {
                    titulo: "The Great British Bake Off",
                    motivo: "Uma competição culinária acolhedora e agradável de acompanhar."
                },
                {
                    titulo: "Heartstopper",
                    motivo: "Uma série delicada sobre amizade, afeto e descoberta."
                }
            ],
            animes: [
                {
                    titulo: "Yuru Camp",
                    motivo: "Um anime tranquilo sobre acampamentos, natureza e descanso."
                },
                {
                    titulo: "Meu Vizinho Totoro",
                    motivo: "Uma animação acolhedora para assistir em um ritmo tranquilo."
                }
            ]
        },

        animado: {
            series: [
                {
                    titulo: "Stranger Things",
                    motivo: "Uma aventura cheia de mistério, amizade e ação."
                },
                {
                    titulo: "Cobra Kai",
                    motivo: "Uma série dinâmica com artes marciais e rivalidades."
                }
            ],
            animes: [
                {
                    titulo: "Demon Slayer",
                    motivo: "Uma aventura de ação com combates intensos e visuais marcantes."
                },
                {
                    titulo: "My Hero Academia",
                    motivo: "Um anime cheio de ação, superação e personagens determinados."
                }
            ]
        }
    };

    // Complementa as recomendações dos botões de humor.
    botoesHumorExtras.forEach(function (botao) {
        botao.addEventListener("click", function () {
            const humor = botao.dataset.humor;
            const recomendacoes = recomendacoesExtrasPorHumor[humor];

            if (!recomendacoes) return;

            adicionarMensagemExtra(
                "Também separei algumas séries para você:",
                "ia"
            );

            recomendacoes.series.forEach(function (obra, indice) {
                adicionarMensagemExtra(
                    `${indice + 1}. ${obra.titulo} — ${obra.motivo}`,
                    "ia"
                );
            });

            adicionarMensagemExtra(
                "E aqui estão algumas sugestões de animes:",
                "ia"
            );

            recomendacoes.animes.forEach(function (obra, indice) {
                adicionarMensagemExtra(
                    `${indice + 1}. ${obra.titulo} — ${obra.motivo}`,
                    "ia"
                );
            });
        });
    });

    // Base adicional para combinar gostos por gênero.
    const obrasExtras = [
        // Séries
        {
            titulo: "Dark",
            tipo: "Série",
            generos: ["Ficção Científica", "Thriller", "Drama", "Crime"]
        },
        {
            titulo: "Breaking Bad",
            tipo: "Série",
            generos: ["Crime", "Drama", "Thriller"]
        },
        {
            titulo: "The Big Bang Theory",
            tipo: "Série",
            generos: ["Comédia", "Romance"]
        },
        {
            titulo: "The Walking Dead",
            tipo: "Série",
            generos: ["Terror", "Drama", "Ação"]
        },
        {
            titulo: "The Witcher",
            tipo: "Série",
            generos: ["Ação", "Drama", "Ficção Científica"]
        },
        {
            titulo: "Outlander",
            tipo: "Série",
            generos: ["Romance", "Drama", "Ação"]
        },

        // Animes
        {
            titulo: "Death Note",
            tipo: "Anime",
            generos: ["Thriller", "Crime", "Drama"]
        },
        {
            titulo: "Steins;Gate",
            tipo: "Anime",
            generos: ["Ficção Científica", "Thriller", "Drama"]
        },
        {
            titulo: "Attack on Titan",
            tipo: "Anime",
            generos: ["Ação", "Drama", "Terror"]
        },
        {
            titulo: "One Punch Man",
            tipo: "Anime",
            generos: ["Ação", "Comédia"]
        },
        {
            titulo: "Kaguya-sama: Love Is War",
            tipo: "Anime",
            generos: ["Romance", "Comédia"]
        },
        {
            titulo: "The Promised Neverland",
            tipo: "Anime",
            generos: ["Thriller", "Terror", "Drama"]
        }
    ];

    // Complementa o comando de combinar gostos.
    if (
        botaoCombinarExtras &&
        selectUsuarioExtras &&
        selectAmigoExtras
    ) {
        botaoCombinarExtras.addEventListener("click", function () {
            const meuGenero = selectUsuarioExtras.value;
            const generoDoAmigo = selectAmigoExtras.value;

            if (!meuGenero || !generoDoAmigo) return;

            const series = obrasExtras.filter(function (obra) {
                return obra.tipo === "Série";
            });

            const animes = obrasExtras.filter(function (obra) {
                return obra.tipo === "Anime";
            });

            function selecionarRecomendacoes(lista) {
                const combinamComAmbos = lista.filter(function (obra) {
                    return obra.generos.includes(meuGenero) &&
                           obra.generos.includes(generoDoAmigo);
                });

                const combinamComAlgum = lista.filter(function (obra) {
                    return obra.generos.includes(meuGenero) ||
                           obra.generos.includes(generoDoAmigo);
                });

                return [...new Set([
                    ...combinamComAmbos,
                    ...combinamComAlgum
                ])].slice(0, 3);
            }

            const seriesRecomendadas = selecionarRecomendacoes(series);
            const animesRecomendados = selecionarRecomendacoes(animes);

            adicionarMensagemExtra(
                "Além dos filmes, estas séries podem combinar com os gostos de vocês:",
                "ia"
            );

            if (seriesRecomendadas.length > 0) {
                seriesRecomendadas.forEach(function (obra, indice) {
                    adicionarMensagemExtra(
                        `${indice + 1}. ${obra.titulo} — ${obra.generos.join(", ")}`,
                        "ia"
                    );
                });
            } else {
                adicionarMensagemExtra(
                    "Não encontrei séries para essa combinação.",
                    "ia"
                );
            }

            adicionarMensagemExtra(
                "Também recomendo estes animes:",
                "ia"
            );

            if (animesRecomendados.length > 0) {
                animesRecomendados.forEach(function (obra, indice) {
                    adicionarMensagemExtra(
                        `${indice + 1}. ${obra.titulo} — ${obra.generos.join(", ")}`,
                        "ia"
                    );
                });
            } else {
                adicionarMensagemExtra(
                    "Não encontrei animes para essa combinação.",
                    "ia"
                );
            }
        });
    }
})();