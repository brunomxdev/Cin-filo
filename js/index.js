// Registros do diário salvos neste navegador.
let diario = (() => {
  try {
    return JSON.parse(localStorage.getItem("cinefilo-diario") || "[]");
  } catch (erro) {
    return [];
  }
})();


const destaques = [
  {
    tipo: "Filme",
    titulo: "Interestelar",
    img: "https://beam-images.warnermediacdn.com/BEAM_LWM_DELIVERABLES/aa5b9295-8f9c-44f5-809b-3f2b84badfbf/6eba6d88-05b3-485d-ba65-7b046c3d76cf.jpeg?host=wbd-images.prod-vod.h264.io&partner=beamcom"
  },
  {
    tipo: "Filme",
    titulo: "Duna 2",
    img: "https://nerdinterior.com.br/wp-content/uploads/2024/03/Duna-scaled.jpg"
  },
  {
    tipo: "Filme",
    titulo: "Marty Supreme",
    img: "https://m.media-amazon.com/images/S/pv-target-images/6557c602b2d404f0d587df897f3fcbacb669b119d40fe8db52ce3c6a2b26d5bd.png"
  },
  {
    tipo: "Série",
    titulo: "Breaking Bad",
    img: "https://i0.wp.com/eoh.com.br/wp-content/uploads/21225_breaking_bad.jpg?fit=1920%2C1080&ssl=1"
  },
  {
    tipo: "Série",
    titulo: "Game of Thrones",
    img: "https://media.newyorker.com/photos/5cae6ad5671c64058676f05c/master/pass/Larson-GameofThronesPreview.jpg"
  },
  {
    tipo: "Série",
    titulo: "Dark",
    img: "https://dark.netflix.io/share/global.png"
  },
  {
    tipo: "Anime",
    titulo: "Attack on Titan",
    img: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=cover,format=auto,quality=85,width=1920/keyart/GR751KNZY-backdrop_wide"
  },
  {
    tipo: "Filme",
    titulo: "Past Lives",
    img: "https://m.media-amazon.com/images/S/pv-target-images/2fa3e9c358016198df6be5cbf28a9d40f7c8d03a2c7e35fad4deebf204f543f2.jpg"
  },
  {
    tipo: "Anime",
    titulo: "Jujutsu Kaisen",
    img: "https://beam-images.warnermediacdn.com/BEAM_LWM_DELIVERABLES/06462aa0-1ee9-48be-90df-364dd7914c30/376e2bfa-7ce8-11f1-ae36-0affc7b274bd?host=wbd-images.prod-vod.h264.io&partner=beamcom"
  },
  {
    tipo: "Anime",
    titulo: "Demon Slayer",
    img: "https://a.storyblok.com/f/178900/1920x1080/2b847c4b59/demon-slayer-infinity-castle-akaza.jpg"
  }
];


// ======================================================
// 2. FILMES — 12
// ======================================================

const filmes = [
{
  id: 101,
  titulo: "Star Wars: Episódio II — Ataque dos Clones",
  ano: 2002,
  duracao: 142,
  nota: 6.6,
  diretor: "George Lucas",
  generos: ["Ficção Científica", "Ação", "Aventura"],
  poster: "https://i.pinimg.com/736x/78/3c/8e/783c8e738cb04a85633a90b3b2dd85a5.jpg",
  sinopse: "Dez anos após os acontecimentos de A Ameaça Fantasma, Anakin Skywalker se torna aprendiz de Obi-Wan Kenobi enquanto uma ameaça separatista coloca a galáxia à beira de uma guerra."
},
  {
    id: 102,
    titulo: "Interestelar",
    ano: 2014,
    duracao: 169,
    nota: 8.7,
    diretor: "Christopher Nolan",
    generos: ["Ficção Científica", "Drama"],
    poster: "https://i.pinimg.com/736x/aa/9c/82/aa9c82664f912846879ecaeb5d924d64.jpg",
    sinopse: "Exploradores viajam por um buraco de minhoca em busca de um novo lar para a humanidade."
  },

  {
    id: 103,
    titulo: "Parasita",
    ano: 2019,
    duracao: 132,
    nota: 8.5,
    diretor: "Bong Joon-ho",
    generos: ["Drama", "Suspense"],
    poster: "https://i.pinimg.com/1200x/45/c0/cb/45c0cb88064038402934978e714e0336.jpg",
    sinopse: "Uma família pobre se infiltra na vida de uma família rica de maneira surpreendente."
  },

  {
    id: 104,
    titulo: "Cidade de Deus",
    ano: 2002,
    duracao: 130,
    nota: 8.6,
    diretor: "Fernando Meirelles",
    generos: ["Crime", "Drama"],
    poster: "https://i.pinimg.com/1200x/6d/43/a7/6d43a79bc771e1c8bce4416743650b98.jpg",
    sinopse: "A ascensão do crime organizado em uma favela do Rio de Janeiro."
  },

  {
    id: 105,
    titulo: "A Viagem de Chihiro",
    ano: 2001,
    duracao: 125,
    nota: 8.6,
    diretor: "Hayao Miyazaki",
    generos: ["Animação", "Fantasia"],
    poster: "https://i.pinimg.com/736x/78/92/82/789282ea5e2c44e0c2f2ceba4185936c.jpg",
    sinopse: "Uma menina entra em um mundo de espíritos para salvar seus pais."
  },

  {
    id: 106,
    titulo: "Pulp Fiction",
    ano: 1994,
    duracao: 154,
    nota: 8.9,
    diretor: "Quentin Tarantino",
    generos: ["Crime", "Comédia"],
    poster: "https://i.pinimg.com/1200x/89/41/e7/8941e71464be8fe81ade92a86817338e.jpg",
    sinopse: "As vidas de assassinos, a esposa de um gangster e um pugilista se cruzam."
  },

  {
    id: 107,
    titulo: "Oppenheimer",
    ano: 2023,
    duracao: 180,
    nota: 8.6,
    diretor: "Christopher Nolan",
    generos: ["Drama", "Histórico"],
    poster: "https://i.pinimg.com/736x/ba/59/d1/ba59d1ddd52f0ff8518a0a375caade02.jpg",
    sinopse: "A história de J. Robert Oppenheimer e seu papel no desenvolvimento da primeira bomba atômica."
  },
  {
    id: 108,
    titulo: "The Drama",
    ano: 2025,
    duracao: 110,
    nota: 7.5,
    diretor: "Kristen Stewart",
    generos: ["Drama", "Romance"],
    poster: "https://i.pinimg.com/736x/b5/c2/34/b5c234fd3905f30294159902323d019a.jpg",
    sinopse: "Um casal enfrenta as complexidades emocionais e as descobertas inesperadas de seu relacionamento."
  },

  {
    id: 109,
    titulo: "Past Lives",
    ano: 2023,
    duracao: 106,
    nota: 8.0,
    diretor: "Celine Song",
    generos: ["Drama", "Romance"],
    poster: "https://i.pinimg.com/736x/8e/11/49/8e11493429c2cee42c2e3163400ad16a.jpg",
    sinopse: "Duas pessoas que se conheceram na infância se reencontram anos depois e refletem sobre as escolhas que moldaram suas vidas."
  },

  {
    id: 110,
    titulo: "Perfect Days",
    ano: 2023,
    duracao: 123,
    nota: 7.9,
    diretor: "Wim Wenders",
    generos: ["Drama"],
    poster: "https://i.pinimg.com/1200x/53/14/c3/5314c3fc63e84ffcd57dbee11062ecf7.jpg",
    sinopse: "Um homem encontra beleza e significado em sua rotina simples enquanto trabalha limpando banheiros públicos em Tóquio."
  },

  {
    id: 111,
    titulo: "Django Livre",
    ano: 2012,
    duracao: 165,
    nota: 8.5,
    diretor: "Quentin Tarantino",
    generos: ["Drama", "Ação", "Faroeste"],
    poster: "https://i.pinimg.com/736x/85/a4/fc/85a4fc38dabb7691dca70d5ee4726b7e.jpg",
    sinopse: "Um escravo libertado se une a um caçador de recompensas para resgatar sua esposa de um cruel proprietário de escravos."
  },

  {
    id: 112,
    titulo: "Corra!",
    ano: 2017,
    duracao: 104,
    nota: 7.7,
    diretor: "Jordan Peele",
    generos: ["Terror", "Suspense", "Mistério"],
    poster: "https://i.pinimg.com/736x/bb/6d/29/bb6d2980e7352cfbf00b404ea0360ed3.jpg",
    sinopse: "Um jovem visita a família de sua namorada e começa a descobrir acontecimentos perturbadores por trás da aparente hospitalidade."
  }
];

// ======================================================
// 3. ANIMES — 12
// ======================================================

const animes = [

  {
    id: 201,
    titulo: "Attack on Titan",
    ano: 2013,
    duracao: 24,
    nota: 9.1,
    diretor: "Tetsuro Araki",
    generos: ["Ação", "Fantasia"],
    poster: "https://i.pinimg.com/1200x/c7/f3/26/c7f3266068076b5a1d0566328fabd40e.jpg",
    sinopse: "A humanidade luta pela sobrevivência contra gigantes devoradores."
  },

  {
    id: 203,
    titulo: "Jujutsu Kaisen",
    ano: 2020,
    duracao: 24,
    nota: 8.6,
    diretor: "Sunghoo Park",
    generos: ["Ação", "Sobrenatural"],
    poster: "https://i.pinimg.com/736x/49/1f/45/491f451fdb27a46d1cc1149486ce1f89.jpg",
    sinopse: "Um estudante engole um amuleto amaldiçoado e entra na escola de feitiçaria."
  },

  {
    id: 204,
    titulo: "Fullmetal Alchemist: Brotherhood",
    ano: 2009,
    duracao: 24,
    nota: 9.1,
    diretor: "Yasuhiro Irie",
    generos: ["Aventura", "Fantasia"],
    poster: "https://i.pinimg.com/736x/70/a2/8f/70a28fe3e5358c7f8c790644c264a362.jpg",
    sinopse: "Dois irmãos usam alquimia em busca da Pedra Filosofal."
  },

  {
    id: 205,
    titulo: "Death Note",
    ano: 2006,
    duracao: 23,
    nota: 8.9,
    diretor: "Tetsuro Araki",
    generos: ["Suspense", "Sobrenatural"],
    poster: "https://i.pinimg.com/736x/8b/e1/c4/8be1c4cb76a01b936e8cf85225cc4368.jpg",
    sinopse: "Um estudante encontra um caderno capaz de matar quem tiver o nome escrito nele."
  },

  {
    id: 206,
    titulo: "Naruto Shippuden",
    ano: 2007,
    duracao: 23,
    nota: 8.7,
    diretor: "Hayato Date",
    generos: ["Ação", "Aventura"],
    poster: "https://i.pinimg.com/736x/a8/4e/79/a84e79ad5d11991ee4a827ebd3284d70.jpg",
    sinopse: "Naruto retorna mais forte em sua jornada para se tornar Hokage."
  },

  {
    id: 207,
    titulo: "One Piece",
    ano: 1999,
    duracao: 24,
    nota: 8.9,
    diretor: "Tatsuya Nagamine",
    generos: ["Aventura", "Comédia"],
    poster: "https://i.pinimg.com/736x/73/98/15/73981585bbead4a3aa37b934b346fc92.jpg",
    sinopse: "Luffy navega os mares em busca do maior tesouro do mundo dos piratas."
  },

  {
    id: 208,
    titulo: "Hunter x Hunter",
    ano: 2011,
    duracao: 24,
    nota: 9.0,
    diretor: "Hiroshi Koujina",
    generos: ["Aventura", "Ação"],
    poster: "https://i.pinimg.com/1200x/65/7e/83/657e83beb2d31e383f371bbc1a7d8bfa.jpg",
    sinopse: "Gon busca se tornar um Hunter para encontrar seu pai."
  },

  
  {
    id: 210,
    titulo: "Chainsaw Man",
    ano: 2022,
    duracao: 24,
    nota: 8.4,
    diretor: "Ryu Nakayama",
    generos: ["Ação", "Terror"],
    poster: "https://i.pinimg.com/1200x/22/f5/e2/22f5e23ea758b79187e37fb81b639338.jpg",
    sinopse: "Denji renasce como um híbrido de demônio serra elétrica."
  },

  {
    id: 213,
    titulo: "A Silent Voice",
    ano: 2016,
    duracao: 130,
    nota: 8.1,
    diretor: "Naoko Yamada",
    generos: ["Drama", "Romance", "Animação"],
    poster: "https://i.pinimg.com/1200x/93/95/d4/9395d445ecbd3f13094ae8b10c0b3aeb.jpg",
    sinopse: "Um jovem busca redenção depois de anos se arrependendo por ter praticado bullying contra uma colega surda durante a infância."
  },

  {
    id: 214,
    titulo: "Monster",
    ano: 2004,
    duracao: 24,
    nota: 8.7,
    diretor: "Masayuki Kojima",
    generos: ["Drama", "Suspense", "Mistério"],
    poster: "https://i.pinimg.com/1200x/60/f5/4d/60f54d631c27759226729dbabffef039.jpg",
    sinopse: "Um brilhante cirurgião decide salvar a vida de um garoto, sem imaginar que sua escolha dará origem a uma perigosa sequência de acontecimentos."
  },

  {
    id: 215,
    titulo: "My Dress-Up Darling",
    ano: 2022,
    duracao: 24,
    nota: 8.2,
    diretor: "Keisuke Shinohara",
    generos: ["Romance", "Comédia", "Slice of Life"],
    poster: "https://i.pinimg.com/736x/79/63/98/796398a0e2cdb8e2086583f7b43faa83.jpg",
    sinopse: "Um estudante apaixonado por bonecas tradicionais começa a produzir cosplays para uma colega popular que compartilha sua paixão por personagens."
  },

  {
    id: 216,
    titulo: "Neon Genesis Evangelion",
    ano: 1995,
    duracao: 24,
    nota: 8.5,
    diretor: "Hideaki Anno",
    generos: ["Ficção Científica", "Ação", "Drama", "Psicológico"],
    poster: "https://i.pinimg.com/1200x/68/a3/97/68a397923b2d5143ccd52399963e0ac9.jpg",
    sinopse: "Adolescentes são recrutados para pilotar gigantescos Evangelions e defender a humanidade de misteriosos seres conhecidos como Anjos."
  }
 
];


// ======================================================
// 4. SÉRIES — 12
// ======================================================

const series = [

  {
    id: 301,
    titulo: "Breaking Bad",
    ano: 2008,
    duracao: 47,
    nota: 9.5,
    diretor: "Vince Gilligan",
    generos: ["Drama", "Crime"],
    poster: "https://i.pinimg.com/736x/ff/dd/ca/ffddca296fb78f9f617d6e2b8ab8fc72.jpg",
    sinopse: "Um professor de química se transforma em um impiedoso produtor de metanfetamina."
  },


  {
    id: 303,
    titulo: "Game of Thrones",
    ano: 2011,
    duracao: 57,
    nota: 9.2,
    diretor: "David Benioff",
    generos: ["Drama", "Fantasia"],
    poster: "https://i.pinimg.com/736x/73/bc/7f/73bc7fe7e77746ecfbd36daefeb94c4e.jpg",
    sinopse: "Famílias nobres lutam pelo controle do Trono de Ferro de Westeros."
  },

  {
    id: 304,
    titulo: "The Last of Us",
    ano: 2023,
    duracao: 60,
    nota: 8.8,
    diretor: "Craig Mazin",
    generos: ["Drama", "Pós-Apocalíptico"],
    poster: "https://i.pinimg.com/1200x/88/57/7a/88577acd50ac8309811ae7b9ec3b4dbf.jpg",
    sinopse: "Joel e Ellie atravessam os EUA devastados por uma infecção fúngica."
  },

   {
    id: 318,
    titulo: "iCarly",
    ano: 2007,
    duracao: 25,
    nota: 6.8,
    diretor: "Dan Schneider",
    generos: ["Comédia", "Família"],
    poster: "https://i.pinimg.com/1200x/6d/a2/7d/6da27df0ae75dc1ef43452f58dc3c47c.jpg",
    sinopse: "Carly e seus amigos criam um programa de internet que rapidamente se torna um sucesso, enquanto lidam com escola, amizades e situações inesperadas."
  },

  {
    id: 306,
    titulo: "Peaky Blinders",
    ano: 2013,
    duracao: 60,
    nota: 8.8,
    diretor: "Steven Knight",
    generos: ["Crime", "Drama"],
    poster: "https://i.pinimg.com/736x/46/48/b7/4648b76c626ece121f4c90336fd7e126.jpg",
    sinopse: "Uma gangue familiar domina as ruas de Birmingham após a Primeira Guerra."
  },

    {
    id: 313,
    titulo: "The Walking Dead",
    ano: 2010,
    duracao: 45,
    nota: 8.1,
    diretor: "Frank Darabont",
    generos: ["Drama", "Terror", "Ação"],
    poster: "https://i.pinimg.com/736x/ec/95/df/ec95df3521a693e9a8ccb4ec6a44b15d.jpg",
    sinopse: "Um grupo de sobreviventes luta para continuar vivo em um mundo devastado por uma epidemia que transforma os mortos em criaturas perigosas."
  },

  {
    id: 314,
    titulo: "Gilmore Girls",
    ano: 2000,
    duracao: 45,
    nota: 8.2,
    diretor: "Amy Sherman-Palladino",
    generos: ["Drama", "Comédia"],
    poster: "https://i.pinimg.com/736x/f9/ce/b5/f9ceb510c9c3f5c81c56c3316293ec7a.jpg",
    sinopse: "Uma mãe solteira e sua filha adolescente vivem em uma pequena cidade enquanto enfrentam relacionamentos, família e os desafios da vida."
  },

  {
    id: 315,
    titulo: "Alice in Borderland",
    ano: 2020,
    duracao: 50,
    nota: 7.7,
    diretor: "Shinsuke Sato",
    generos: ["Ação", "Suspense", "Ficção Científica"],
    poster: "https://i.pinimg.com/1200x/d7/26/98/d726981883bf06cfa1fbb45029a92883.jpg",
    sinopse: "Um jovem e seus amigos são transportados para uma versão misteriosa e deserta de Tóquio, onde precisam participar de jogos mortais para sobreviver."
  },

  {
    id: 316,
    titulo: "The Office",
    ano: 2005,
    duracao: 22,
    nota: 9.0,
    diretor: "Greg Daniels",
    generos: ["Comédia"],
    poster: "https://i.pinimg.com/1200x/25/66/6b/25666bfcf91c0a612358b556c71d4fd0.jpg",
    sinopse: "O cotidiano de funcionários de uma empresa de papel é acompanhado de perto, revelando situações absurdas, relacionamentos e o peculiar estilo de liderança de Michael Scott."
  },

  {
    id: 317,
    titulo: "Vis a Vis",
    ano: 2015,
    duracao: 50,
    nota: 8.0,
    diretor: "Iván Escobar",
    generos: ["Drama", "Crime", "Suspense"],
    poster: "https://i.pinimg.com/1200x/0f/6a/1b/0f6a1bd9d1fd14cdde7cb7d4b1d7c752.jpg",
    sinopse: "Uma jovem é enviada para a prisão após ser envolvida em um crime e precisa aprender rapidamente a sobreviver em um ambiente extremamente hostil."
  },


  {
    id: 319,
    titulo: "Sam & Cat",
    ano: 2013,
    duracao: 25,
    nota: 5.7,
    diretor: "Dan Schneider",
    generos: ["Comédia", "Família"],
    poster: "https://i.pinimg.com/1200x/66/78/01/66780115ddc5a45bd7923beaabd44b16.jpg",
    sinopse: "Sam e Cat se tornam colegas de apartamento e começam a trabalhar como babás, enfrentando situações caóticas e divertidas."
  },

  {
    id: 320,
    titulo: "Euphoria",
    ano: 2019,
    duracao: 55,
    nota: 8.3,
    diretor: "Sam Levinson",
    generos: ["Drama"],
    poster: "https://i.pinimg.com/564x/87/24/65/872465baad6ac4ff9d18f62ae0cde1a9.jpg",
    sinopse: "Um grupo de adolescentes enfrenta questões relacionadas a identidade, relacionamentos, vícios, amizades e os desafios de crescer."
  }


];
// ======================================================
// LANÇAMENTOS — OUTUBRO DE 2026
// ======================================================

const lancamentos = [

  // =========================
  // FILMES
  // =========================

  {
    id: 401,
    tipo: "Filme",
    titulo: "Verity",
    ano: 2026,
    estreia: "01/10/2026",
    duracao: 120,
    nota: null,
    diretor: "Desconhecido",
    generos: ["Drama", "Suspense", "Mistério"],
    poster: "https://i.pinimg.com/736x/67/86/69/678669668d97e63690fab40e32de338c.jpg",
    sinopse: "Filme com lançamento previsto para outubro de 2026."
  },

  {
    id: 402,
    tipo: "Filme",
    titulo: "Digger",
    ano: 2026,
    estreia: "01/10/2026",
    duracao: 120,
    nota: null,
    diretor: "Desconhecido",
    generos: ["Ação", "Comédia"],
    poster: "https://i.pinimg.com/736x/3e/21/f4/3e21f472d17667494c1e1a5bfa6d4577.jpg",
    sinopse: "Filme com lançamento previsto para outubro de 2026."
  },

  {
    id: 403,
    tipo: "Filme",
    titulo: "Se Eu Fosse Você 3",
    ano: 2026,
    estreia: "08/10/2026",
    duracao: 120,
    nota: null,
    diretor: "Desconhecido",
    generos: ["Comédia"],
    poster: "https://i.pinimg.com/1200x/2b/66/24/2b6624b306943de5e76c24137dda930d.jpg",
    sinopse: "Filme com lançamento previsto para outubro de 2026."
  },

  {
    id: 404,
    tipo: "Filme",
    titulo: "Street Fighter",
    ano: 2026,
    estreia: "15/10/2026",
    duracao: 120,
    nota: null,
    diretor: "Desconhecido",
    generos: ["Ação", "Aventura"],
    poster: "https://m.media-amazon.com/images/M/MV5BYjhlN2EyNGUtY2U4YS00ZTQ3LTg0NTgtNGIxZmVhMDlmMjIyXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    sinopse: "Filme com lançamento previsto para outubro de 2026."
  },

  {
    id: 405,
    tipo: "Filme",
    titulo: "Dentro da Baleia",
    ano: 2026,
    estreia: "15/10/2026",
    duracao: 120,
    nota: null,
    diretor: "Desconhecido",
    generos: ["Suspense", "Terror"],
    poster: "https://m.media-amazon.com/images/M/MV5BZDQ5ZTNhMTItNDIwZC00MGQyLWFlNTktMWU4YzYwMDgyNmUzXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    sinopse: "Filme com lançamento previsto para outubro de 2026."
  },

  {
    id: 406,
    tipo: "Filme",
    titulo: "Cara-de-Barro",
    ano: 2026,
    estreia: "22/10/2026",
    duracao: 120,
    nota: null,
    diretor: "Desconhecido",
    generos: ["Terror", "Suspense", "Drama"],
    poster: "https://br.web.img2.acsta.net/c_310_420/img/fd/5e/fd5e5ae279ca29e388c1b9138d8667bf.png",
    sinopse: "Filme com lançamento previsto para outubro de 2026."
  },

  {
    id: 407,
    tipo: "Filme",
    titulo: "Razão e Sensibilidade",
    ano: 2026,
    estreia: "29/10/2026",
    duracao: 120,
    nota: null,
    diretor: "Desconhecido",
    generos: ["Drama", "Romance"],
    poster: "https://br.web.img3.acsta.net/c_310_420/img/e1/df/e1df26a481712a0daa17ab58cbd55284.png",
    sinopse: "Filme com lançamento previsto para outubro de 2026."
  },


  // =========================
  // SÉRIES
  // =========================

  {
    id: 408,
    tipo: "Série",
    titulo: "A Leste do Éden",
    ano: 2026,
    estreia: "01/10/2026",
    duracao: 50,
    nota: null,
    diretor: "Desconhecido",
    plataforma: "Netflix",
    generos: ["Drama"],
    poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYXvskPZC6mjvCN9hyF_vd6MsWpn73ax1X01VOywha_75Y65evRYGgkqgi&s=10",
    sinopse: "Série com lançamento previsto para outubro de 2026."
  },

  {
    id: 409,
    tipo: "Série",
    titulo: "Carrie, a Estranha",
    ano: 2026,
    estreia: "07/10/2026",
    duracao: 50,
    nota: null,
    diretor: "Desconhecido",
    plataforma: "Prime Video",
    generos: ["Terror", "Drama"],
    poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNSuy8e8_b6rKusGZz4bwRHHMmxHCESs0AWX2GuaCGDZ08sKCedAgeKhI&s=10",
    sinopse: "Série com lançamento previsto para outubro de 2026."
  },

  {
    id: 410,
    tipo: "Série",
    titulo: "American Horror Story — Temporada 13",
    ano: 2026,
    estreia: "09/10/2026",
    duracao: 50,
    nota: null,
    diretor: "Desconhecido",
    plataforma: "Disney+",
    generos: ["Terror", "Drama"],
    poster: "https://cinepop.com.br/wp-content/uploads/2026/07/ahs-13-poster.jpg.webp",
    sinopse: "Nova temporada com lançamento previsto para outubro de 2026."
  },

  {
    id: 411,
    tipo: "Série",
    titulo: "VisionQuest",
    ano: 2026,
    estreia: "14/10/2026",
    duracao: 50,
    nota: null,
    diretor: "Desconhecido",
    plataforma: "Disney+",
    generos: ["Ação", "Ficção Científica", "Super-herói"],
    poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw4bNLD8ZbgpRo1wUQWmEia5zYPSoHkFaoHHEUQmnAyox7ZP6sGDgVsYE&s=10",
    sinopse: "Série com lançamento previsto para outubro de 2026."
  },

  {
    id: 412,
    tipo: "Série",
    titulo: "A Diplomata — Temporada 4",
    ano: 2026,
    estreia: "15/10/2026",
    duracao: 50,
    nota: null,
    diretor: "Desconhecido",
    plataforma: "Netflix",
    generos: ["Drama", "Política", "Suspense"],
    poster: "https://image.tmdb.org/t/p/w500/cUy0ZYme43lop08nOtbQLWL0dX.jpg",
    sinopse: "Nova temporada com lançamento previsto para outubro de 2026."
  },

  {
    id: 413,
    tipo: "Série",
    titulo: "A Lista Terminal — Temporada 2",
    ano: 2026,
    estreia: "21/10/2026",
    duracao: 50,
    nota: null,
    diretor: "Desconhecido",
    plataforma: "Prime Video",
    generos: ["Ação", "Suspense", "Drama"],
    poster: "https://cinemaeafins.com.br/wp-content/uploads/2026/08/a-lista-terminal-2-poster.webp",
    sinopse: "Nova temporada com lançamento previsto para outubro de 2026."
  },

  {
    id: 414,
    tipo: "Série",
    titulo: "Ninguém Quer — Temporada 3",
    ano: 2026,
    estreia: "22/10/2026",
    duracao: 50,
    nota: null,
    diretor: "Desconhecido",
    plataforma: "Netflix",
    generos: ["Comédia", "Romance"],
    poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCkiEy_EGEnHkF8Ul3kkPoGlDsMNi0vjjJwE_CWb-qYOCV2CNsbshGEfJt&s=10",
    sinopse: "Nova temporada com lançamento previsto para outubro de 2026."
  },

  {
    id: 415,
    tipo: "Série",
    titulo: "Lupin — Parte 4",
    ano: 2026,
    estreia: "23/10/2026",
    duracao: 50,
    nota: null,
    diretor: "Desconhecido",
    plataforma: "Netflix",
    generos: ["Crime", "Drama", "Mistério"],
    poster: "https://m.media-amazon.com/images/M/MV5BMzk4MTc0NWUtZjk3Mi00ODkzLTlkYjItOWRhMTc5MmRiNjI0XkEyXkFqcGc@._V1_.jpg",
    sinopse: "Nova parte com lançamento previsto para outubro de 2026."
  },


  // =========================
  // ANIMES
  // =========================

  {
    id: 416,
    tipo: "Anime",
    titulo: "Diários de uma Apotecária — Temporada 3",
    ano: 2026,
    estreia: "02/10/2026",
    duracao: 24,
    nota: null,
    diretor: "Desconhecido",
    plataforma: "Crunchyroll",
    generos: ["Drama", "Mistério", "Histórico"],
    poster: "https://a.storyblok.com/f/178900/1460x2065/513c87a7ae/the_apothecary_diaries_season3_key_art.jpg/m/filters:quality(95)format(webp)",
    sinopse: "Nova temporada com lançamento previsto para outubro de 2026."
  },

  {
    id: 417,
    tipo: "Anime",
    titulo: "Black Clover — Temporada 2",
    ano: 2026,
    estreia: "03/10/2026",
    duracao: 24,
    nota: null,
    diretor: "Desconhecido",
    plataforma: "Crunchyroll",
    generos: ["Ação", "Fantasia", "Aventura"],
    poster: "https://a.storyblok.com/f/178900/2000x3000/78e5bfe91d/black-clover-season-2-kv.png/m/filters:quality(95)format(webp)",
    sinopse: "Nova temporada com lançamento previsto para outubro de 2026."
  },

  {
    id: 418,
    tipo: "Anime",
    titulo: "A Wild Last Boss Appeared! — Temporada 2",
    ano: 2026,
    estreia: "04/10/2026",
    duracao: 24,
    nota: null,
    diretor: "Desconhecido",
    plataforma: "Crunchyroll",
    generos: ["Ação", "Fantasia", "Isekai"],
    poster: "https://preview.redd.it/a-wild-last-boss-appeared-season-2-has-been-confirmed-v0-2vt7lpybyd8g1.jpeg?auto=webp&s=cdcc34fe2beba1f77f0fbee4509c0dd5188f8c48",
    sinopse: "Nova temporada com lançamento previsto para outubro de 2026."
  },

  {
    id: 419,
    tipo: "Anime",
    titulo: "Firefly Wedding",
    ano: 2026,
    estreia: "09/10/2026",
    duracao: 24,
    nota: null,
    diretor: "Desconhecido",
    plataforma: "Crunchyroll",
    generos: ["Romance", "Drama", "Suspense"],
    poster: "https://a.storyblok.com/f/178900/2000x3000/1dbea2dbe5/fireflywedding_s1_baseasset_teaservisual2_2x3_2000x3000_copyright_en-us-1.png/m/filters:quality(95)format(webp)",
    sinopse: "Anime com lançamento previsto para outubro de 2026."
  },

  {
    id: 420,
    tipo: "Anime",
    titulo: "Cyberpunk: Mercenários — Temporada 2",
    ano: 2026,
    estreia: "20/10/2026",
    duracao: 24,
    nota: null,
    diretor: "Desconhecido",
    plataforma: "Netflix",
    generos: ["Ação", "Ficção Científica", "Cyberpunk"],
    poster: "https://www.adrenaline.com.br/wp-content/uploads/2025/07/Cyberpunk-Edgerunners-Mercenarios-2-Netflix-01-720x900.jpg",
    sinopse: "Nova temporada com lançamento previsto para outubro de 2026."
  }

];

function renderizarLancamentos() {

  const container = document.getElementById("trilho-lancamentos");

  if (!container) return;

  // Ordena os lançamentos pela data
  const lista = [...lancamentos].sort((a, b) => {

    const dataA = new Date(
      a.ano,
      parseInt(a.estreia.split("/")[1]) - 1,
      parseInt(a.estreia.split("/")[0])
    );

    const dataB = new Date(
      b.ano,
      parseInt(b.estreia.split("/")[1]) - 1,
      parseInt(b.estreia.split("/")[0])
    );

    return dataA - dataB;
  });


  container.innerHTML = lista.map(item => {

    const posterStyle = item.poster
      ? `style="background-image: url('${item.poster}')"`
      : "";


    return `
      <article
        class="card"
        data-tipo="${item.tipo}"
      >

        <div
          class="poster"
          ${posterStyle}
        >

          <span class="nota nota-destaque">
            ${item.estreia}
          </span>

        </div>


        <div class="info">

          <small class="tipo-lancamento">
            ${item.tipo}
          </small>

          <h3>
            ${item.titulo}
          </h3>


          <p class="meta">

            ${item.ano}

            ${
              item.duracao
                ? ` · ${item.duracao} min`
                : ""
            }

          </p>


          ${
            item.plataforma
              ? `
                <p class="meta">
                  ${item.plataforma}
                </p>
              `
              : ""
          }


          <div class="tags">

            ${item.generos.map(genero => `
              <span class="tag">
                ${genero}
              </span>
            `).join("")}

          </div>

        </div>

      </article>
    `;

  }).join("");
}

// ======================================================
// 8. VARIÁVEIS DO SISTEMA
// ======================================================

let atual = 0;
let timer = null;


// ======================================================
// 9. ELEMENTOS DO HTML
// ======================================================

const trilha = document.getElementById("trilha");
const bolinhas = document.getElementById("bolinhas");

const modalNovo =
  document.getElementById("modal-novo-filme");

const modalAvaliar =
  document.getElementById("modal-avaliar");

const modalDetalhes =
  document.getElementById("modal-detalhes");


// ======================================================
// 10. FUNÇÃO PARA PEGAR TODAS AS OBRAS
// ======================================================

function obterTodasObras() {
  return [
    ...filmes,
    ...animes,
    ...series
  ];
}

window.cinefiloObras = obterTodasObras();

try {
    localStorage.setItem(
        "cinefilo-obras",
        JSON.stringify(window.cinefiloObras)
    );
} catch (erro) {
    console.warn("Não foi possível compartilhar o catálogo.", erro);
}


// ======================================================
// 11. CARROSSEL
// ======================================================

function inicializarCarrossel() {

  if (!trilha || !bolinhas) return;

  trilha.innerHTML = "";
  bolinhas.innerHTML = "";

  destaques.forEach((item, index) => {

    const slide =
      document.createElement("div");

    slide.className = "slide";

    slide.style.setProperty(
      "--img",
      `url("${item.img}")`
    );

    slide.innerHTML = `
      <div class="info">
        <small>${item.tipo}</small>
        <h2>${item.titulo}</h2>
      </div>
    `;

    trilha.appendChild(slide);


    const bolinha =
      document.createElement("button");

    bolinha.addEventListener(
      "click",
      () => {

        mostrarSlide(index);

        reiniciarTimer();

      }
    );

    bolinhas.appendChild(bolinha);

  });

  mostrarSlide(0);
  reiniciarTimer();
}


function mostrarSlide(index) {

  if (!destaques.length) return;

  atual =
    (index + destaques.length) %
    destaques.length;

  trilha.style.transform =
    `translateX(-${atual * 100}%)`;

  bolinhas
    .querySelectorAll("button")
    .forEach((botao, i) => {

      botao.classList.toggle(
        "ativa",
        i === atual
      );

    });
}


function reiniciarTimer() {

  clearInterval(timer);

  timer = setInterval(() => {

    mostrarSlide(atual + 1);

  }, 4000);
}


// ======================================================
// 12. BOTÕES DO CARROSSEL
// ======================================================

const botaoAnterior =
  document.getElementById("anterior");

const botaoProximo =
  document.getElementById("proximo");


if (botaoAnterior) {

  botaoAnterior.addEventListener(
    "click",
    () => {

      mostrarSlide(atual - 1);

      reiniciarTimer();

    }
  );

}


if (botaoProximo) {

  botaoProximo.addEventListener(
    "click",
    () => {

      mostrarSlide(atual + 1);

      reiniciarTimer();

    }
  );

}


// ======================================================
// 13. CRIAR CARD
// ======================================================

function criarCardHtml(item) {

  const posterStyle = item.poster
    ? `style="background-image: url('${item.poster}')"`
    : "";

  const posterContent = item.poster
    ? ""
    : `
      <span class="inicial">
        ${item.titulo.charAt(0)}
      </span>
    `;

  return `
    <article
      class="card"
      onclick="abrirDetalhes(${item.id})"
    >

      <div
        class="poster"
        ${posterStyle}
      >

        ${posterContent}

        <span class="nota">
          ★ ${item.nota || "S/N"}
        </span>

      </div>


      <div class="info">

        <h3>
          ${item.titulo}
        </h3>

        <p class="meta">
          ${item.ano}
          ${item.duracao
            ? ` · ${item.duracao} min`
            : ""}
        </p>

        <div class="tags">

          ${item.generos
            .map(
              genero =>
                `<span class="tag">${genero}</span>`
            )
            .join("")}

        </div>

      </div>

    </article>
  `;
}


// ======================================================
// 14. FILTROS
// ======================================================

function popularFiltros() {

  const todosGeneros = [
    ...new Set(
      obterTodasObras()
        .flatMap(
          obra => obra.generos
        )
    )
  ].sort();


  const select =
    document.getElementById(
      "filtro-genero"
    );

  if (!select) return;


  select.innerHTML =
    `<option value="">
      Todos os Gêneros
    </option>`;


  todosGeneros.forEach(genero => {

    select.innerHTML += `
      <option value="${genero}">
        ${genero}
      </option>
    `;

  });
}


// ======================================================
// 15. FILTRAR FILMES
// ======================================================

function obterFilmesFiltrados() {

  const campoBusca =
    document.getElementById(
      "busca-input"
    );

  const campoGenero =
    document.getElementById(
      "filtro-genero"
    );


  const termo =
    campoBusca
      ? campoBusca.value
          .toLowerCase()
          .trim()
      : "";


  const genero =
    campoGenero
      ? campoGenero.value
      : "";


  return filmes.filter(filme => {

    const bateBusca =
      filme.titulo
        .toLowerCase()
        .includes(termo) ||

      filme.diretor
        .toLowerCase()
        .includes(termo);


    const bateGenero =
      !genero ||
      filme.generos.includes(genero);


    return (
      bateBusca &&
      bateGenero
    );

  });
}


// ======================================================
// 16. RENDERIZAR FILMES
// ======================================================

function renderizarFilmes() {

  const container =
    document.getElementById(
      "trilho-filmes"
    );

  if (!container) return;


  const filmesFiltrados =
    obterFilmesFiltrados();


  container.innerHTML =
    filmesFiltrados
      .map(criarCardHtml)
      .join("");
}


// ======================================================
// 17. RENDERIZAR ANIMES
// ======================================================

function renderizarAnimes() {

  const container =
    document.getElementById(
      "trilho-animes"
    );

  if (!container) return;


  container.innerHTML =
    animes
      .map(criarCardHtml)
      .join("");
}


// ======================================================
// 18. RENDERIZAR SÉRIES
// ======================================================

function renderizarSeries() {

  const container =
    document.getElementById(
      "trilho-series"
    );

  if (!container) return;


  container.innerHTML =
    series
      .map(criarCardHtml)
      .join("");
}


// ======================================================
// 19. RENDERIZAR LANÇAMENTOS
// ======================================================

function renderizarLancamentos() {

  const container =
    document.getElementById(
      "trilho-lancamentos"
    );

  if (!container) return;


  container.innerHTML =
    lancamentos
      .map(lancamento => {

        return `
          <article class="card">

            <div
              class="poster"
              style="
                background-image:
                url('${lancamento.poster}')
              "
            >

              <span
                class="nota nota-destaque"
              >
                ${lancamento.estreia}
              </span>

            </div>


            <div class="info">

              <h3>
                ${lancamento.titulo}
              </h3>

              <div class="tags">

                ${lancamento.generos
                  .map(
                    genero =>
                      `<span class="tag">${genero}</span>`
                  )
                  .join("")}

              </div>

            </div>

          </article>
        `;

      })
      .join("");
}


// ======================================================
// 20. RENDERIZAR TUDO
// ======================================================

function renderizarTudo() {

  renderizarFilmes();

  renderizarAnimes();

  renderizarSeries();

  renderizarLancamentos();

  renderizarDesafios();

  renderizarDiario();

  renderizarEstatisticas();
}


// ======================================================
// 21. DESAFIOS
// ======================================================

function renderizarDesafios() {

  const container =
    document.getElementById(
      "grid-desafios"
    );

  if (!container) return;


  container.innerHTML =
    desafios
      .map(desafio => {

        const percentual =
          Math.round(
            (
              desafio.progresso /
              desafio.total
            ) * 100
          );


        return `
          <div class="card-desafio">

            <h3>
              ${desafio.titulo}
            </h3>

            <p class="desc-desafio">
              ${desafio.descricao}
            </p>

            <div class="progresso-bar">

              <div
                class="progresso-fill"
                style="width:${percentual}%"
              ></div>

            </div>

            <small>

              <strong>
                ${desafio.progresso}
              </strong>

              de

              <strong>
                ${desafio.total}
              </strong>

              assistidos
              (${percentual}%)

            </small>

          </div>
        `;

      })
      .join("");
}


// ======================================================
// 22. DIÁRIO
// ======================================================

function renderizarDiario() {

  const container =
    document.getElementById(
      "lista-diario"
    );

  if (!container) return;


  const todasObras =
    obterTodasObras();


  container.innerHTML =
    diario
      .map(registro => {

        const obra =
          todasObras.find(
            item =>
              item.id ===
              registro.obraId
          );


        if (!obra) return "";


        return `
          <article
            class="item-diario"
          >

            <h3>
              ${obra.titulo}
            </h3>

            <div>

              <span
                class="nota-pessoal"
              >
                ★
                ${registro.notaPessoal.toFixed(1)}
              </span>

              <span class="data">
                ${registro.dataVisto}
              </span>

            </div>

            <p class="comentario">
              "${registro.comentario}"
            </p>

          </article>
        `;

      })
      .join("");
}


// ======================================================
// 23. ESTATÍSTICAS
// ======================================================

function renderizarEstatisticas() {

  const todasObras =
    obterTodasObras();


  const totalObras =
    document.getElementById(
      "stat-total-obras"
    );

  const totalAssistidos =
    document.getElementById(
      "stat-assistidos"
    );

  const mediaMinutos =
    document.getElementById(
      "stat-media-min"
    );


  if (totalObras) {

    totalObras.textContent =
      todasObras.length;

  }


  if (totalAssistidos) {

    totalAssistidos.textContent =
      diario.length;

  }


  const somaDuracoes =
    todasObras.reduce(
      (total, obra) =>
        total + obra.duracao,
      0
    );


  const media =
    todasObras.length
      ? somaDuracoes /
        todasObras.length
      : 0;


  if (mediaMinutos) {

    mediaMinutos.textContent =
      media.toFixed(0);

  }


  // ------------------------------------------
  // GÊNEROS
  // ------------------------------------------

  const contagemGeneros = {};


  todasObras.forEach(obra => {

    obra.generos.forEach(genero => {

      contagemGeneros[genero] =
        (
          contagemGeneros[genero] ||
          0
        ) + 1;

    });

  });


  const maiorQuantidade =
    Math.max(
      ...Object.values(
        contagemGeneros
      ),
      1
    );


  const painel =
    document.getElementById(
      "painel-generos"
    );


  if (!painel) return;


  painel.innerHTML =
    Object.entries(
      contagemGeneros
    )
      .sort(
        (a, b) =>
          b[1] - a[1]
      )
      .map(
        ([genero, quantidade]) => {

          const percentual =
            (
              quantidade /
              maiorQuantidade
            ) * 100;


          return `
            <div class="barra-genero">

              <span>
                ${genero}
              </span>

              <div class="trilho">

                <div
                  class="preenchimento"
                  style="
                    width:${percentual}%
                  "
                ></div>

              </div>

              <span>
                ${quantidade}
              </span>

            </div>
          `;

        }
      )
      .join("");
}


// ======================================================
// 24. CURADORIA IA
// ======================================================

function gerarSugestaoIA() {

  const input =
    document.getElementById(
      "input-ia"
    );

  const resultado =
    document.getElementById(
      "resultado-ia"
    );


  if (!input || !resultado) return;


  const termo =
    input.value
      .toLowerCase()
      .trim();


  if (!termo) return;


  const todasObras =
    obterTodasObras();


  const encontrados =
    todasObras.filter(obra => {

      const genero =
        obra.generos.some(
          genero =>
            termo.includes(
              genero.toLowerCase()
            )
        );


      const titulo =
        obra.titulo
          .toLowerCase()
          .includes(termo);


      const sinopse =
        obra.sinopse
          .toLowerCase()
          .includes(termo);


      return (
        genero ||
        titulo ||
        sinopse
      );

    });


  const lista =
    encontrados.length
      ? encontrados
      : todasObras;


  const item =
    lista[
      Math.floor(
        Math.random() *
        lista.length
      )
    ];


  resultado.style.display =
    "block";


  resultado.innerHTML = `

    <h4>
      🎬 Sugestão do Curador IA
    </h4>

    <p>
      Recomendamos fortemente assistir:
      <strong>
        ${item.titulo}
      </strong>
      (${item.ano})
    </p>

    <p class="sinopse-ia">
      "${item.sinopse}"
    </p>

  `;
}


// ======================================================
// 25. FECHAR MODAIS
// ======================================================

function fecharModais() {

  if (modalNovo) {

    modalNovo.classList.remove(
      "ativo"
    );

  }


  if (modalAvaliar) {

    modalAvaliar.classList.remove(
      "ativo"
    );

  }


  if (modalDetalhes) {

    modalDetalhes.classList.remove(
      "ativo"
    );

  }
}


// ======================================================
// 26. ABRIR MODAL — NOVO FILME
// ======================================================

function abrirModalNovoFilme() {

  if (!modalNovo) return;

  modalNovo.classList.add(
    "ativo"
  );
}


// ======================================================
// 27. SALVAR NOVO FILME
// ======================================================

function salvarNovoFilme() {

  const titulo =
    document.getElementById(
      "novo-titulo"
    ).value.trim();


  const poster =
    document.getElementById(
      "novo-poster"
    ).value.trim();


  const generosTexto =
    document.getElementById(
      "novo-generos"
    ).value.trim();


  if (!titulo) {

    alert(
      "Digite o título!"
    );

    return;
  }


  filmes.push({

    id: Date.now(),

    titulo,

    ano:
      parseInt(
        document.getElementById(
          "novo-ano"
        ).value
      ) || 2024,

    duracao:
      parseInt(
        document.getElementById(
          "novo-duracao"
        ).value
      ) || 120,

    nota: 8.0,

    diretor:
      document.getElementById(
        "novo-diretor"
      ).value.trim() ||
      "Desconhecido",

    generos:
      generosTexto
        ? generosTexto
            .split(",")
            .map(
              genero =>
                genero.trim()
            )
        : ["Geral"],

    poster,

    sinopse:
      document.getElementById(
        "novo-sinopse"
      ).value.trim() ||
      "Sem sinopse."

  });


  popularFiltros();

  renderizarTudo();

  fecharModais();
}


// ======================================================
// 28. ABRIR MODAL DE AVALIAÇÃO
// ======================================================

function abrirModalAvaliacao(obraId = null) {

  const select =
    document.getElementById(
      "select-filme"
    );


  if (!select) return;


  select.innerHTML =
    obterTodasObras()
      .map(
        obra => `
          <option value="${obra.id}">
            ${obra.titulo}
          </option>
        `
      )
      .join("");

  if (obraId !== null) {
    select.value = String(obraId);
  }

  const campoNota = document.getElementById("input-nota");
  const campoComentario = document.getElementById("input-comentario");
  if (campoNota) campoNota.value = "9.5";
  if (campoComentario) campoComentario.value = "";

  const data =
    document.getElementById(
      "input-data"
    );


  if (data) {

    data.valueAsDate =
      new Date();

  }


  modalAvaliar.classList.add(
    "ativo"
  );
}


// ======================================================
// 29. SALVAR NO DIÁRIO
// ======================================================

function salvarNoDiario() {

  const select =
    document.getElementById(
      "select-filme"
    );


  const nota =
    document.getElementById(
      "input-nota"
    );


  const data =
    document.getElementById(
      "input-data"
    );


  const comentario =
    document.getElementById(
      "input-comentario"
    );


  if (!select || !nota || !data) {
    return;
  }


  diario.push({

    obraId:
      parseInt(
        select.value
      ),

    notaPessoal:
      parseFloat(
        nota.value
      ) || 0,

    dataVisto:
      data.value,

    comentario:
      comentario
        ? comentario.value
        : ""

  });

  try {
    localStorage.setItem("cinefilo-diario", JSON.stringify(diario));
  } catch (erro) {
    console.warn("Não foi possível salvar o diário neste navegador.", erro);
  }

  renderizarDiario();
  renderizarEstatisticas();
  fecharModais();
}


// ======================================================
// AVALIAR A OBRA ABERTA NOS DETALHES
// ======================================================

function avaliarObra(id) {
  if (modalDetalhes) modalDetalhes.classList.remove("ativo");
  abrirModalAvaliacao(id);
}

// ======================================================
// 30. DETALHES DA OBRA
// ======================================================

function abrirDetalhes(id) {
  const obra = obterTodasObras().find(item => item.id === id);
  if (!obra) return;

  const conteudo = document.getElementById("conteudo-detalhes");
  if (!conteudo || !modalDetalhes) return;

  const tipoObra = id >= 300 ? "Série" : id >= 200 ? "Anime" : "Filme";
  const nota = obra.nota === null || obra.nota === undefined ? "Ainda sem nota" : `★ ${obra.nota}/10`;
  const tituloSeguro = String(obra.titulo || "Obra").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  const poster = obra.poster || "";

  conteudo.innerHTML = `
    <div class="detalhes-layout">
      <div class="imagem-detalhes-wrap">
        ${poster ? `
          <img src="${poster}" class="img-detalhes" alt="Pôster de ${tituloSeguro}" loading="eager"
            onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
        ` : ""}
        <div class="imagem-detalhes-fallback" style="display:${poster ? "none" : "flex"}">
          ${tituloSeguro}
        </div>
      </div>
      <div class="detalhes-texto">
        <p class="tipo-detalhes">${tipoObra}</p>
        <h2 class="titulo-detalhes">${tituloSeguro}</h2>
        <p class="meta-detalhes">
          ${obra.ano || "Ano não informado"}
          ${obra.duracao ? ` · ${obra.duracao} min` : ""}
          ${obra.diretor ? `<br>Direção/Criador: <strong>${String(obra.diretor).replace(/</g, "&lt;").replace(/>/g, "&gt;")}</strong>` : ""}
        </p>
        <p class="sinopse-detalhes">${String(obra.sinopse || "Sinopse não disponível.").replace(/</g, "&lt;").replace(/>/g, "&gt;")}</p>
        <p class="nota-detalhes">Nota geral: ${nota}</p>
        ${(() => {
          const minhasAvaliacoes = diario.filter(registro => registro.obraId === obra.id);
          const ultimaAvaliacao = minhasAvaliacoes[minhasAvaliacoes.length - 1];
          return ultimaAvaliacao
            ? `<p class="minha-avaliacao-detalhes">Sua avaliação: <strong>${ultimaAvaliacao.notaPessoal}/10</strong></p>`
            : `<p class="minha-avaliacao-detalhes">Você ainda não avaliou esta obra.</p>`;
        })()}
        <button type="button" class="btn-avaliar-obra" onclick="avaliarObra(${obra.id})">Avaliar esta obra</button>
      </div>
    </div>
  `;

  modalDetalhes.classList.add("ativo");
}

// ======================================================
// 31. CONFIGURAR EVENTOS
// ======================================================

function configurarEventos() {

  // ------------------------------------------
  // BUSCA
  // ------------------------------------------

  const busca =
    document.getElementById(
      "busca-input"
    );

  if (busca) {

    busca.addEventListener(
      "input",
      renderizarFilmes
    );

  }


  // ------------------------------------------
  // FILTRO
  // ------------------------------------------

  const filtro =
    document.getElementById(
      "filtro-genero"
    );

  if (filtro) {

    filtro.addEventListener(
      "change",
      renderizarFilmes
    );

  }


  // ------------------------------------------
  // IA
  // ------------------------------------------

  const botaoIA =
    document.getElementById(
      "btn-gerar-ia"
    );

  if (botaoIA) {

    botaoIA.addEventListener(
      "click",
      gerarSugestaoIA
    );

  }


  // ------------------------------------------
  // NOVO FILME
  // ------------------------------------------

  const botaoNovo =
    document.getElementById(
      "btn-abrir-novo-filme"
    );

  if (botaoNovo) {

    botaoNovo.addEventListener(
      "click",
      abrirModalNovoFilme
    );

  }


  const salvarNovo =
    document.getElementById(
      "btn-salvar-novo-filme"
    );

  if (salvarNovo) {

    salvarNovo.addEventListener(
      "click",
      salvarNovoFilme
    );

  }


  // ------------------------------------------
  // AVALIAR
  // ------------------------------------------

  const avaliar =
    document.getElementById(
      "btn-avaliar-banner"
    );

  if (avaliar) {

    avaliar.addEventListener(
      "click",
      abrirModalAvaliacao
    );

  }


  const salvarDiario =
    document.getElementById(
      "btn-salvar-diario"
    );

  if (salvarDiario) {

    salvarDiario.addEventListener(
      "click",
      salvarNoDiario
    );

  }


  // ------------------------------------------
  // FECHAR MODAIS
  // ------------------------------------------

  document
    .querySelectorAll(
      ".fechar-modal"
    )
    .forEach(botao => {

      botao.addEventListener(
        "click",
        fecharModais
      );

    });

}


// ======================================================
// 32. INICIALIZAÇÃO
// ======================================================

document.addEventListener(
  "DOMContentLoaded",
  () => {

    inicializarCarrossel();

    popularFiltros();

    configurarEventos();

    renderizarTudo();

  }
);