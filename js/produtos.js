// =====================================================
// produtos.js — dados dos 55 produtos e interações da vitrine.
// A montagem dos cards, filtros e sacola continua no script.js.
// =====================================================

const produtos = [
  { id: 1, 
    nome: "Papai Noel Clássico", 
    categoria: "Papai Noel", 
    descricao: "Papai Noel de pelúcia com roupa vermelha, barba branca e detalhes macios.", 
    preco: 89.90, 
    imagem: "img/produtos/papai-noel-classico.webp" },

  { id: 2, 
    nome: "Papai Noel com Saco de Presentes", 
    categoria: "Papai Noel", 
    descricao: "Papai Noel segurando um saco de presentes colorido para entrar no clima natalino.", 
    preco: 109.90, 
    imagem: "img/produtos/papai-noel-saco-presentes.webp" },

  { id: 3, 
    nome: "Papai Noel no Trenó", 
    categoria: "Papai Noel", 
    descricao: "Papai Noel sentado em um trenó decorativo, com acabamento de tecido felpudo.", 
    preco: 139.90, 
    imagem: "img/produtos/papai-noel-treno.webp" },

  { id: 4, 
    nome: "Mamãe Noel", 
    categoria: "Papai Noel", 
    descricao: "Mamãe Noel com vestido natalino, gorro e pequenos detalhes bordados.", 
    preco: 94.90, 
    imagem: "img/produtos/mamae-noel.webp" },

  { id: 5, nome: "Casal Papai e Mamãe Noel", categoria: "Papai Noel", descricao: "Um casal de personagens natalinos em um conjunto de duas pelúcias.", preco: 169.90, imagem: "img/produtos/casal-papai-mamae-noel.webp" },

  { id: 6, nome: "Papai Noel de Bolso", categoria: "Papai Noel", descricao: "Versão pequena do Papai Noel, ideal para decorar prateleiras e presentear.", preco: 39.90, imagem: "img/produtos/papai-noel-bolso.webp" },

  { id: 7, nome: "Papai Noel com Bengala Doce", categoria: "Papai Noel", descricao: "Papai Noel segurando uma bengala doce listrada em vermelho e branco.", preco: 99.90, imagem: "img/produtos/papai-noel-bengala.webp" },

  { id: 8, nome: "Papai Noel Sentado", categoria: "Papai Noel", descricao: "Papai Noel em posição sentada, com botas e roupa tradicionais.", preco: 84.90, imagem: "img/produtos/papai-noel-sentado.webp" },

  { id: 9, nome: "Papai Noel com Guirlanda", categoria: "Papai Noel", descricao: "Papai Noel segurando uma pequena guirlanda verde decorada para o Natal.", preco: 114.90, imagem: "img/produtos/papai-noel-guirlanda.webp" },

  { id: 10, nome: "Papai Noel Musical", categoria: "Papai Noel", descricao: "Personagem natalino de pelúcia com detalhes festivos e acabamento macio.", preco: 129.90, imagem: "img/produtos/papai-noel-musical.webp" },


  { id: 11, nome: "Rena Clássica", categoria: "Renas", descricao: "Rena marrom com chifres macios, focinho claro e cachecol natalino.", preco: 79.90, imagem: "img/produtos/rena-classica.webp" },

  { id: 12, nome: "Rena Bebê", categoria: "Renas", descricao: "Rena bebê de corpo pequeno, olhos delicados e nariz arredondado.", preco: 59.90, imagem: "img/produtos/rena-bebe.webp" },

  { id: 13, nome: "Rena de Nariz Vermelho", categoria: "Renas", descricao: "Rena inspirada nas histórias de Natal, com nariz vermelho e cachecol verde.", preco: 84.90, imagem: "img/produtos/rena-nariz-vermelho.webp" },

  { id: 14, nome: "Rena com Gorro", categoria: "Renas", descricao: "Rena usando gorro vermelho com pompom branco e acabamento fofinho.", preco: 74.90, imagem: "img/produtos/rena-gorro.webp" },

  { id: 15, nome: "Rena de Cachecol", categoria: "Renas", descricao: "Rena de pelúcia com cachecol xadrez em cores natalinas.", preco: 89.90, imagem: "img/produtos/rena-cachecol.webp" },

  { id: 16, nome: "Rena de Natal em Miniatura", categoria: "Renas", descricao: "Pequena rena decorativa para mesas, estantes e cantinhos natalinos.", preco: 34.90, imagem: "img/produtos/rena-miniatura.webp" },

  { id: 17, nome: "Rena com Asas", categoria: "Renas", descricao: "Rena decorativa com pequenas asas de tecido e detalhes dourados.", preco: 99.90, imagem: "img/produtos/rena-asas.webp" },


  { id: 18, nome: "Boneco de Neve Clássico", categoria: "Bonecos de neve", descricao: "Boneco de neve com cartola, nariz de cenoura e cachecol vermelho.", preco: 74.90, imagem: "img/produtos/boneco-neve-classico.webp" },

  { id: 19, nome: "Boneco de Neve com Cachecol Azul", categoria: "Bonecos de neve", descricao: "Boneco de neve branco com cachecol azul e pequenos botões escuros.", preco: 69.90, imagem: "img/produtos/boneco-neve-cachecol-azul.webp" },

  { id: 20, nome: "Boneca de Neve", categoria: "Bonecos de neve", descricao: "Boneca de neve com gorro, laço e detalhes delicados em tecido.", preco: 79.90, imagem: "img/produtos/boneca-neve.webp" },

  { id: 21, nome: "Casal de Bonecos de Neve", categoria: "Bonecos de neve", descricao: "Duas pelúcias de bonecos de neve, uma ao lado da outra, formando um casal.", preco: 129.90, imagem: "img/produtos/casal-bonecos-neve.webp" },

  { id: 22, nome: "Boneco de Neve Mini", categoria: "Bonecos de neve", descricao: "Mini boneco de neve para decorar a árvore ou acompanhar outros enfeites.", preco: 29.90, imagem: "img/produtos/boneco-neve-mini.webp" },

  { id: 23, nome: "Boneco de Neve com Presente", categoria: "Bonecos de neve", descricao: "Boneco de neve segurando uma caixinha de presente natalina.", preco: 89.90, imagem: "img/produtos/boneco-neve-presente.webp" },


  { id: 24, nome: "Urso Marrom Clássico de Natal", categoria: "Ursinhos natalinos", descricao: "Ursinho marrom de pelúcia com detalhes natalinos e toque extremamente macio.", preco: 67.99, imagem: "img/produtos/urso-marrom-classico-natal.webp" },

  { id: 25, nome: "Urso Polar", categoria: "Ursinhos natalinos", descricao: "Urso polar branco de pelúcia, com focinho delicado e aparência acolhedora.", preco: 94.90, imagem: "img/produtos/urso-polar.webp" },

  { id: 26, nome: "Ursinha Mamãe Noel", categoria: "Ursinhos natalinos", descricao: "Ursinha de pelúcia vestida como Mamãe Noel, com vestido vermelho e gorro.", preco: 99.90, imagem: "img/produtos/ursinha-mamae-noel.webp" },

  { id: 27, nome: "Urso Caramelo com Gorro", categoria: "Ursinhos natalinos", descricao: "Ursinho caramelo usando gorro natalino vermelho com pompom.", preco: 74.90, imagem: "img/produtos/urso-caramelo-gorro.webp" },

  { id: 28, nome: "Urso de Pelúcia Gigante", categoria: "Ursinhos natalinos", descricao: "Ursão de pelúcia em tamanho grande, ideal para abraçar e decorar.", preco: 249.90, imagem: "img/produtos/urso-gigante.webp" },

  { id: 29, nome: "Ursinho Creme com Laço", categoria: "Ursinhos natalinos", descricao: "Ursinho em tom creme com laço verde e acabamento delicado.", preco: 79.90, imagem: "img/produtos/ursinho-creme-laco.webp" },

  { id: 30, nome: "Urso Verde de Natal", categoria: "Ursinhos natalinos", descricao: "Ursinho verde com detalhes festivos discretos e textura de pelúcia macia.", preco: 84.90, imagem: "img/produtos/urso-verde-natal.webp" },

  { id: 31, nome: "Ursinho de Chaveiro", categoria: "Ursinhos natalinos", descricao: "Mini ursinho natalino com argola para usar como chaveiro ou pendurar na bolsa.", preco: 24.90, imagem: "img/produtos/ursinho-chaveiro.webp" },

  { id: 32, nome: "Ursinho com Pijama de Natal", categoria: "Ursinhos natalinos", descricao: "Ursinho usando pijama temático com estampas natalinas.", preco: 89.90, imagem: "img/produtos/ursinho-pijama-natal.webp" },

  { id: 33, nome: "Ursinho de Pelúcia Pequeno", categoria: "Ursinhos natalinos", descricao: "Ursinho compacto para presentear, com focinho bordado e laço vermelho.", preco: 39.90, imagem: "img/produtos/ursinho-pequeno.webp" },

  { id: 34, nome: "Kit de Ursinhos Natalinos", categoria: "Ursinhos natalinos", descricao: "Conjunto com três ursinhos de tamanhos pequenos e acessórios natalinos.", preco: 119.90, imagem: "img/produtos/kit-ursinhos-natalinos.webp" },


  { id: 35, nome: "Pinguim com Gorro", categoria: "Outros personagens", descricao: "Pinguim de pelúcia preto e branco usando gorro vermelho de Natal.", preco: 64.90, imagem: "img/produtos/pinguim-gorro.webp" },

  { id: 36, nome: "Pinguim com Cachecol", categoria: "Outros personagens", descricao: "Pinguim arredondado com cachecol verde e pequenos detalhes bordados.", preco: 69.90, imagem: "img/produtos/pinguim-cachecol.webp" },

  { id: 37, nome: "Gnomo de Natal", categoria: "Outros personagens", descricao: "Gnomo natalino com gorro comprido, barba macia e nariz arredondado.", preco: 59.90, imagem: "img/produtos/gnomo-natal.webp" },

  { id: 38, nome: "Duende de Natal", categoria: "Outros personagens", descricao: "Duende com roupa verde, detalhes vermelhos e pequenos sapatos pontudos.", preco: 74.90, imagem: "img/produtos/duende-natal.webp" },

  { id: 39, nome: "Árvore de Natal de Pelúcia", categoria: "Outros personagens", descricao: "Árvore natalina macia, com enfeites coloridos costurados no tecido.", preco: 54.90, imagem: "img/produtos/arvore-natal-pelucia.webp" },

  { id: 40, nome: "Estrela Natalina", categoria: "Outros personagens", descricao: "Estrela dourada de pelúcia com expressão delicada e acabamento fofinho.", preco: 34.90, imagem: "img/produtos/estrela-natalina.webp" },

  { id: 41, nome: "Bengala Doce de Pelúcia", categoria: "Outros personagens", descricao: "Bengala doce listrada em vermelho e branco, feita para decorar no Natal.", preco: 29.90, imagem: "img/produtos/bengala-doce-pelucia.webp" },

  { id: 42, nome: "Biscoito de Gengibre", categoria: "Outros personagens", descricao: "Boneco de biscoito de gengibre de pelúcia, com detalhes brancos bordados.", preco: 44.90, imagem: "img/produtos/biscoito-gengibre.webp" },

  { id: 43, nome: "Biscoito de Gengibre Shrek", categoria: "Outros personagens", descricao: "Personagem de biscoito de gengibre inspirado no universo de Shrek, em versão de pelúcia.", preco: 59.90, imagem: "img/produtos/biscoito-gengibre-shrek.webp" },

  { id: 44, nome: "Dragão Natalino", categoria: "Outros personagens", descricao: "Dragão de pelúcia com detalhes verdes e pequenos acessórios de Natal.", preco: 119.90, imagem: "img/produtos/dragao-natalino.webp" },

  { id: 45, nome: "Raposa com Gorro", categoria: "Outros personagens", descricao: "Raposa alaranjada de pelúcia usando um gorro natalino vermelho.", preco: 79.90, imagem: "img/produtos/raposa-gorro.webp" },

  { id: 46, nome: "Coruja de Natal", categoria: "Outros personagens", descricao: "Corujinha de pelúcia com plumagem marrom e cachecol festivo.", preco: 69.90, imagem: "img/produtos/coruja-natal.webp" },
  
  { id: 47, nome: "Esquilo com Noz", categoria: "Outros personagens", descricao: "Esquilo de pelúcia segurando uma pequena noz entre as patas.", preco: 64.90, imagem: "img/produtos/esquilo-noz.webp" },

  { id: 48, nome: "Foca Bebê", categoria: "Outros personagens", descricao: "Foca bebê cinza-clara, com olhos delicados e corpo arredondado.", preco: 74.90, imagem: "img/produtos/foca-bebe.webp" },

  { id: 49, nome: "Meia Natalina com Presentes", categoria: "Outros personagens", descricao: "Meia de Natal de pelúcia recheada com pequenos presentes decorativos.", preco: 49.90, imagem: "img/produtos/meia-natalina-presentes.webp" },

  { id: 50, nome: "Kit de Mini Pelúcias", categoria: "Outros personagens", descricao: "Conjunto com quatro mini personagens natalinos para decorar a árvore.", preco: 89.90, imagem: "img/produtos/kit-mini-pelucias.webp" },

  { id: 51, nome: "Kit de Enfeites de Pelúcia", categoria: "Outros personagens", descricao: "Conjunto com seis enfeites de pelúcia em formatos natalinos variados.", preco: 99.90, imagem: "img/produtos/kit-enfeites-pelucia.webp" },

  { id: 52, nome: "Chaveiro de Rena", categoria: "Renas", descricao: "Mini rena de pelúcia com argola metálica para chaves e mochilas.", preco: 22.90, imagem: "img/produtos/chaveiro-rena.webp" },

  { id: 53, nome: "Chaveiro de Papai Noel", categoria: "Papai Noel", descricao: "Papai Noel em miniatura de pelúcia com argola para levar para qualquer lugar.", preco: 22.90, imagem: "img/produtos/chaveiro-papai-noel.webp" },

  { id: 54, nome: "Foca Bebê com Gorro", categoria: "Outros personagens", descricao: "Foca bebê de pelúcia usando gorro natalino vermelho e branco.", preco: 79.90, imagem: "img/produtos/foca-bebe-gorro.webp" },

  { id: 55, nome: "Raposa Polar", categoria: "Outros personagens", descricao: "Raposa de pelúcia em tom branco-creme, com cauda volumosa e focinho delicado.", preco: 89.90, imagem: "img/produtos/raposa-polar.webp" }
  
];

// Produtos apresentados no carrossel "Mais vendidos".
const produtosMaisVendidos = [
  {
    imagem: "img/banners/pelucias vovo.jpg",
    titulo: "Pelúcias de vovós",
    descricao: "Um conjunto de pelúcias que trazem o carinho e a ternura das vovós para presentear quem você ama.",
    alt: "Pelúcias de vovós"
  },
  {
    imagem: "img/banners/kit de pelucias.jpg",
    titulo: "Kit de pelúcias para árvore de Natal",
    descricao: "Um kit encantador de pelúcias para decorar sua árvore de Natal com fofura e alegria.",
    alt: "Kit de pelúcias"
  },
  {
    imagem: "img/banners/mini pelucias.jpg",
    titulo: "Dupla de mini pelúcias",
    descricao: "Duas mini pelúcias perfeitas para enfeitar sua árvore de Natal, trazendo alegria em tamanho compacto.",
    alt: "Mini pelúcias"
  },
  {
    imagem: "img/banners/urso classico de natal.jpg",
    titulo: "Urso marrom clássico de Natal",
    descricao: "Um ursinho clássico de Natal, perfeito para presentear e trazer aconchego durante a temporada festiva.",
    alt: "Ursinho clássico de Natal"
  },
  {
    imagem: "img/banners/urso inflavel grande.jpg",
    titulo: "Urso inflável grande de Natal",
    descricao: "Um urso inflável de grande porte, ideal para decorar sua casa e criar um ambiente festivo e acolhedor.",
    alt: "Urso inflável grande de Natal"
  }
];

// A vitrine só é inicializada quando os elementos existem nesta página.
const imagemDestaque = document.getElementById("imagem-produto-destaque");
const tituloDestaque = document.getElementById("titulo-produto-destaque");
const descricaoDestaque = document.getElementById("descricao-produto-destaque");
const contadorDestaque = document.getElementById("contador-mais-vendidos");
const botaoAvancar = document.querySelector(".avançar");
const botaoVoltar = document.querySelector(".voltar");
let indiceProdutoAtual = 0;

function mostrarProdutoDestaque() {
  if (!imagemDestaque || !tituloDestaque || !descricaoDestaque || !contadorDestaque) return;

  const produtoAtual = produtosMaisVendidos[indiceProdutoAtual];
  imagemDestaque.src = produtoAtual.imagem;
  imagemDestaque.alt = produtoAtual.alt;
  tituloDestaque.textContent = produtoAtual.titulo;
  descricaoDestaque.textContent = produtoAtual.descricao;
  contadorDestaque.textContent = `${indiceProdutoAtual + 1} de ${produtosMaisVendidos.length}`;
}

if (botaoAvancar && botaoVoltar) {
  botaoAvancar.addEventListener("click", () => {
    indiceProdutoAtual = (indiceProdutoAtual + 1) % produtosMaisVendidos.length;
    mostrarProdutoDestaque();
  });

  botaoVoltar.addEventListener("click", () => {
    indiceProdutoAtual = (indiceProdutoAtual - 1 + produtosMaisVendidos.length) % produtosMaisVendidos.length;
    mostrarProdutoDestaque();
  });

  mostrarProdutoDestaque();
}

// =====================================================
// Modal de detalhes e aviso de produto adicionado.
// O botão do modal aciona o botão original do card para
// aproveitar a lógica de sacola já existente no script.js.
// =====================================================
(function configurarDetalhesECarrinho() {
  const lista = document.getElementById("lista-produtos");
  const modal = document.getElementById("modal-produto");
  const modalImagem = document.getElementById("modal-imagem");
  const modalTitulo = document.getElementById("modal-titulo");
  const modalDescricao = document.getElementById("modal-descricao");
  const modalPreco = document.getElementById("modal-preco");
  const botaoAdicionarModal = document.getElementById("modal-adicionar");
  const notificacao = document.getElementById("notificacao-carrinho");
  const fecharNotificacao = document.getElementById("fechar-notificacao");

  if (!lista || !modal || !botaoAdicionarModal || !notificacao) return;

  let cardSelecionado = null;
  let temporizadorNotificacao = null;
  let ultimoFoco = null;

  const formatarPreco = (texto) => {
    if (!texto) return "";
    return texto.replace(/\s+/g, " ").trim();
  };

  function abrirModal(card) {
    const imagem = card.querySelector("img");
    const titulo = card.querySelector("h3");
    const paragrafos = [...card.querySelectorAll("p")];
    const descricao = paragrafos.find((p) => !p.classList.contains("preco")) || paragrafos[0];
    const preco = card.querySelector(".preco");

    if (!titulo) return;

    cardSelecionado = card;
    ultimoFoco = document.activeElement;
    modalTitulo.textContent = titulo.textContent.trim();
    modalDescricao.textContent = descricao ? descricao.textContent.trim() : "Um mimo especial para deixar seu Natal ainda mais encantador.";
    modalPreco.textContent = preco ? formatarPreco(preco.textContent) : "";

    const imagemAntiga = modal.querySelector(".modal-visual .imagem-placeholder");
    if (imagemAntiga) imagemAntiga.remove();

    if (imagem && imagem.getAttribute("src") && (!imagem.complete || imagem.naturalWidth > 0)) {
      modalImagem.src = imagem.currentSrc || imagem.src;
      modalImagem.alt = imagem.alt || titulo.textContent.trim();
      modalImagem.hidden = false;
    } else {
      modalImagem.hidden = true;
      criarPlaceholderModal();
    }

    modal.classList.add("aberto");
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-aberto");
    document.querySelector(".modal-fechar")?.focus();
  }

  function criarPlaceholderModal() {
    const areaVisual = modal.querySelector(".modal-visual");
    if (!areaVisual || areaVisual.querySelector(".imagem-placeholder")) return;

    const placeholder = document.createElement("div");
    placeholder.className = "imagem-placeholder";
    placeholder.textContent = "Foto do produto em breve";
    areaVisual.prepend(placeholder);
  }

  // Se a imagem não carregar dentro da janela, mostra o mesmo espaço reservado.
  modalImagem.addEventListener("error", () => {
    modalImagem.hidden = true;
    criarPlaceholderModal();
  });

  function fecharModal() {
    modal.classList.remove("aberto");
    modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-aberto");
    cardSelecionado = null;
    if (ultimoFoco && typeof ultimoFoco.focus === "function") ultimoFoco.focus();
  }

  function mostrarNotificacao(nomeProduto) {
    const titulo = notificacao.querySelector("strong");
    const texto = notificacao.querySelector("p");
    if (titulo) titulo.textContent = "Produto adicionado!";
    if (texto) texto.textContent = `${nomeProduto} foi adicionado. Confira sua sacola no canto superior direito.`;

    notificacao.classList.add("visivel");
    window.clearTimeout(temporizadorNotificacao);
    temporizadorNotificacao = window.setTimeout(() => {
      notificacao.classList.remove("visivel");
    }, 4500);
  }

  // Abre os detalhes ao clicar em uma área do card, exceto nos controles.
  lista.addEventListener("click", (evento) => {
    const card = evento.target.closest(".card");
    if (!card || !lista.contains(card)) return;
    if (evento.target.closest("button, a, input, select, label")) return;
    abrirModal(card);
  });

  // Torna o card acessível pelo teclado sem transformar seus botões em filhos de um botão.
  lista.addEventListener("keydown", (evento) => {
    if (evento.target.closest("button, a, input, select")) return;
    const card = evento.target.closest(".card");
    if (!card || !lista.contains(card)) return;
    if (evento.key === "Enter" || evento.key === " ") {
      evento.preventDefault();
      abrirModal(card);
    }
  });

  function prepararCards() {
    lista.querySelectorAll(".card").forEach((card) => {
      if (!card.hasAttribute("tabindex")) card.setAttribute("tabindex", "0");
      if (!card.hasAttribute("aria-label")) {
        const titulo = card.querySelector("h3")?.textContent?.trim();
        if (titulo) card.setAttribute("aria-label", `Ver detalhes de ${titulo}`);
      }

      const imagem = card.querySelector("img");
      if (imagem && !imagem.dataset.fallbackConfigurado) {
        imagem.dataset.fallbackConfigurado = "true";
        imagem.addEventListener("error", () => {
          if (imagem.dataset.fallbackMostrado) return;
          imagem.dataset.fallbackMostrado = "true";
          const placeholder = document.createElement("div");
          placeholder.className = "imagem-placeholder";
          placeholder.textContent = "Foto do produto em breve";
          imagem.replaceWith(placeholder);
        });
      }
    });
  }

  // O script.js cria os cards; o observador prepara também os que surgirem depois de filtrar.
  const observador = new MutationObserver(prepararCards);
  observador.observe(lista, { childList: true, subtree: true });
  prepararCards();

  // Captura os cliques de adicionar à sacola tanto nos cards quanto no modal.
  lista.addEventListener("click", (evento) => {
    const botao = evento.target.closest("button");
    if (!botao || !botao.closest(".card")) return;
    const nome = botao.closest(".card").querySelector("h3")?.textContent?.trim() || "Seu mimo";
    window.setTimeout(() => mostrarNotificacao(nome), 0);
  }, true);

  botaoAdicionarModal.addEventListener("click", () => {
    if (!cardSelecionado) return;
    const botaoOriginal = cardSelecionado.querySelector("button");
    if (!botaoOriginal) {
      mostrarNotificacao("Não foi possível adicionar este produto");
      return;
    }
    botaoOriginal.click();
    fecharModal();
  });

  modal.querySelectorAll("[data-fechar-modal]").forEach((elemento) => {
    elemento.addEventListener("click", fecharModal);
  });

  document.addEventListener("keydown", (evento) => {
    if (evento.key === "Escape" && modal.classList.contains("aberto")) fecharModal();
  });

  fecharNotificacao?.addEventListener("click", () => {
    notificacao.classList.remove("visivel");
    window.clearTimeout(temporizadorNotificacao);
  });
})();
