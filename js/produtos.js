// =====================================================
// produtos.js — dados dos 50 produtos e interações da vitrine.
// A montagem dos cards, filtros e sacola continua no script.js.
// =====================================================

const produtos = [
{
id: 1,
nome: "Papai Noel Clássico",
categoria: "Papai Noel e ajudantes",
descricao:
"Um Papai Noel tradicional de pelúcia, fofo e com detalhes natalinos, perfeito para presentear ou decorar.",
preco: 89.9,
imagem: "img/produtos/papaiclassico.png",
destaque: true,
},

{
id: 2,
nome: "Papai Noel com Saco de Presentes",
categoria: "Papai Noel e ajudantes",
descricao:
"Papai Noel segurando um saco de presentes colorido para entrar no clima natalino.",
preco: 109.9,
imagem: "img/produtos/papaisaco.png",
},

{
id: 3,
nome: "Papai Noel no Trenó",
categoria: "Papai Noel e ajudantes",
descricao:
"Papai Noel sentado em um trenó decorativo, com acabamento de tecido felpudo.",
preco: 59.9,
imagem: "img/produtos/papaitreno.png",
},

{
id: 4,
nome: "Mamãe Noel Grande",
categoria: "Papai Noel e ajudantes",
descricao:
"Mamãe Noel de pelúcia em tamanho grande, com vestido vermelho e detalhes festivos.",
preco: 94.9,
imagem: "img/produtos/mamaegrande.png",
},

{
id: 5,
nome: "Casal Papai e Mamãe Noel",
categoria: "Papai Noel e ajudantes",
descricao:
"Um conjunto de pelúcias representando o casal Papai e Mamãe Noel, ideal para decorar a casa no Natal.",
preco: 109.9,
imagem: "img/produtos/casal noel.png",
},

{
id: 6,
nome: "Papai Noel Pequeno",
categoria: "Papai Noel e ajudantes",
descricao:
"Versão pequena do Papai Noel, ideal para andar com ele no bolso ou decorar pequenos espaços.",
preco: 29.9,
imagem: "img/produtos/papai fofo.png",
},

{
id: 7,
nome: "Papai Noel Grande",
categoria: "Papai Noel e ajudantes",
descricao:
"Papai Noel de pelúcia em tamanho grande, com detalhes festivos e acabamento macio, perfeito para presentear ou decorar.",
preco: 119.9,
imagem: "img/produtos/papaigrande.png",
},

{
id: 8,
nome: "Mamãe Noel",
categoria: "Papai Noel e ajudantes",
descricao:
"Papai Noel em versão miniatura, sentado e com expressão alegre, perfeito para enfeitar mesas e prateleiras.",
preco: 84.9,
imagem: "img/produtos/mamaenoel.png",
},

{
id: 9,
nome: "Mini Papai Noel",
categoria: "Papai Noel e ajudantes",
descricao:
"Miniatura de Papai Noel em pelúcia, com detalhes festivos e acabamento lã macia, ideal para decorar a árvore de Natal.",
preco: 34.9,
imagem: "img/produtos/minipai.jpg",
},

{
id: 11,
nome: "Rena Clássica",
categoria: "Renas e bichos da floresta",
descricao:
"Rena marrom com chifres macios, focinho claro e cachecol natalino.",
preco: 79.9,
imagem: "img/produtos/renasentada.png",
destaque: true,
},

{
id: 12,
nome: "Rena Bebê",
categoria: "Renas e bichos da floresta",
descricao:
"Rena bebê de corpo pequeno, olhos delicados e nariz arredondado.",
preco: 59.9,
imagem: "img/produtos/renafiilhote.png",
},

{
id: 13,
nome: "Rena de Nariz Vermelho",
categoria: "Renas e bichos da floresta",
descricao:
"Rena inspirada nas histórias de Natal, com nariz vermelho e cachecol verde.",
preco: 84.9,
imagem: "img/produtos/renanarizvermelho.png",
},

{
id: 14,
nome: "Rena Marrom",
categoria: "Renas e bichos da floresta",
descricao:
"Rena de pelúcia marrom com chifres, focinho claro e expressão amigável.",
preco: 74.9,
imagem: "img/produtos/renamarrom.png",
},

{
id: 15,
nome: "Rena de Cachecol",
categoria: "Renas e bichos da floresta",
descricao: "Rena de pelúcia com cachecol xadrez em cores natalinas.",
preco: 89.9,
imagem: "img/produtos/rena cachecol.webp",
},

{
id: 17,
nome: "Casal de Renas",
categoria: "Renas e bichos da floresta",
descricao:
"Duas renas de pelúcia, uma maior e outra menor, com detalhes natalinos e acabamento macio.",
preco: 99.9,
imagem: "img/produtos/casal rena.webp",
},

{
id: 18,
nome: "Boneco de Neve Clássico",
categoria: "Bonecos de neve e bichos do inverno",
descricao:
"Boneco de neve com cartola, nariz de cenoura e cachecol vermelho.",
preco: 74.9,
imagem: "img/produtos/boneco de neve.png",
destaque: true,
},

{
id: 19,
nome: "Boneco de Neve com Cachecol Azul",
categoria: "Bonecos de neve e bichos do inverno",
descricao:
"Boneco de neve branco com cachecol azul e pequenos botões escuros.",
preco: 69.9,
imagem: "img/produtos/boneco de neve azul.webp",
},

{
id: 20,
nome: "Boneca de Neve",
categoria: "Bonecos de neve e bichos do inverno",
descricao: "Boneca de neve com gorro, laço e detalhes delicados em tecido.",
preco: 79.9,
imagem: "img/produtos/boneco de neve mulher.png",
},

{
id: 21,
nome: "Casal de Bonecos de Neve",
categoria: "Bonecos de neve e bichos do inverno",
descricao:
"Duas pelúcias de bonecos de neve, uma ao lado da outra, formando um casal.",
preco: 129.9,
imagem: "img/produtos/casal.webp",
},

{
id: 22,
nome: "Urso Classico de Roupa",
categoria: "Ursinhos natalinos",
descricao: "Ursinho de pelúcia com roupinha natalina, ideal para decorar.",
preco: 29.9,
imagem: "img/produtos/ursoclassicoderoupa.png",
},

{
id: 29,
nome: "Urso Verde de Natal",
categoria: "Ursinhos natalinos",
descricao:
"Ursinho verde com detalhes festivos discretos e textura de pelúcia macia.",
preco: 84.9,
imagem: "img/produtos/urso-verde.webp",
},

{
id: 23,
nome: "Urso Rosa",
categoria: "Ursinhos natalinos",
descricao:
"Ursinho de pelúcia rosa com detalhes natalinos, ideal para presentear ou decorar.",
preco: 89.9,
imagem: "img/produtos/ursorosa.webp",
destaque: true,
},

{
id: 24,
nome: "Urso Marrom Clássico de Natal",
categoria: "Ursinhos natalinos",
descricao:
"Ursinho marrom de pelúcia com detalhes natalinos e toque extremamente macio.",
preco: 67.99,
imagem: "img/produtos/ursoclassico.png",
},

{
id: 25,
nome: "Urso Polar",
categoria: "Ursinhos natalinos",
descricao:
"Urso polar branco de pelúcia, com focinho delicado e aparência acolhedora.",
preco: 34.9,
imagem: "img/produtos/ursopolarbranco.png",
},

{
id: 26,
nome: "Ursinha Mamãe",
categoria: "Ursinhos natalinos",
descricao:
"Ursinha de pelúcia vestida como Mamãe, com vestido vermelho e gorro.",
preco: 49.9,
imagem: "img/produtos/ursinha.png",
},

{
id: 27,
nome: "Urso Poltrona Natalino",
categoria: "Ursinhos natalinos",
descricao:
"Urso de pelúcia sentado em uma poltrona natalina, com gorro e detalhes festivos.",
preco: 374.9,
imagem: "img/produtos/ursopoltrona.png",
},

{
id: 28,
nome: "Urso Almofada Gigante",
categoria: "Ursinhos natalinos",
descricao:
"Ursão de pelúcia em tamanho grande, ideal para fazer um lugar para se deitar.",
preco: 249.9,
imagem: "img/produtos/ursoalmofada.png",
},

{
id: 31,
nome: "Urso Clássico Gigante",
categoria: "Ursinhos natalinos",
descricao: "Ursinho em tom creme com laço verde e acabamento delicado",
preco: 79.9,
imagem: "img/produtos/ursogordinho.png",
},

{
id: 30,
nome: "Urso Cachecol",
categoria: "Ursinhos natalinos",
descricao:
"Ursinho de pelúcia com cachecol vermelho e detalhes natalinos, perfeito para presentear alguém especial.",
preco: 84.9,
imagem: "img/produtos/ursocachecol.png",
},

{
id: 32,
nome: "Coelho de Pelúcia",
categoria: "Outros personagens",
descricao:
"Coelho de pelúcia usando pijama temático com estampas natalinas.",
preco: 89.9,
imagem: "img/produtos/coelho.png",
},

{
id: 33,
nome: "Ouriço de Pelúcia",
categoria: "Renas e bichos da floresta",
descricao:
"Ouriço de pelúcia compacto para presentear, com focinho bordado e laço vermelho.",
preco: 39.9,
imagem: "img/produtos/ourico.png",
},

{
id: 34,
nome: "Pinguim com Gorro",
categoria: "Bonecos de neve e bichos do inverno",
descricao:
"Pinguim de pelúcia preto e branco usando gorro vermelho de Natal.",
preco: 64.9,
imagem: "img/produtos/pinguingorro.png",
},

{
id: 35,
nome: "Mini Pinguim",
categoria: "Bonecos de neve e bichos do inverno",
descricao:
"Mini pinguim de pelúcia com detalhes delicados e acabamento macio.",
preco: 69.9,
imagem: "img/produtos/pinguinfofo.png",
},

{
id: 36,
nome: "Gnomo de Natal",
categoria: "Papai Noel e ajudantes",
descricao:
"Gnomo natalino com gorro comprido, barba macia e nariz arredondado.",
preco: 59.9,
imagem: "img/produtos/gnominho.png",
},

{
id: 37,
nome: "Duende de Natal",
categoria: "Outros personagens",
descricao:
"Duende com roupa verde, detalhes vermelhos e pequenos sapatos pontudos.",
preco: 74.9,
imagem: "img/produtos/elfo.png",
},

{
id: 38,
nome: "Duende Mulher",
categoria: "Outros personagens",
descricao:
"Versão feminina do duende natalino, com vestido vermelho e gorro verde.",
preco: 54.9,
imagem: "img/produtos/elfa.png",
},

{
id: 39,
nome: "Triplo T com Gorro Natalino",
categoria: "Outros personagens",
descricao:
"Triplo T de pelúcia usando um gorro natalino vermelho e branco, perfeito para presentear ou decorar.",
preco: 79.9,
imagem: "img/produtos/triplo T.png",
},

{
id: 40,
nome: "Bailara Caputina",
categoria: "Outros personagens",
descricao:
"Bailara Caputina é uma pelúcia encantadora com detalhes natalinos, perfeita para presentear ou decorar.",
preco: 69.9,
imagem: "img/produtos/bailarina.png",
},

{
id: 41,
nome: "Triplo T e Bailara Caputina",
categoria: "Outros personagens",
descricao:
"Um casal de pelúcias representando personagens fofos e encantadores, perfeitos para presentear ou decorar.",
preco: 64.9,
imagem: "img/produtos/casal fofo.png",
},

{
id: 42,
nome: "Biscoito de Gengibre de Pelúcia",
categoria: "Outros personagens",
descricao: "Biscoito de gengibre de pelúcia recheado com fofura.",
preco: 49.9,
imagem: "img/produtos/biscoito.png",
destaque: true,
},

{
id: 43,
nome: "Doce Canudo de Pelúcia",
categoria: "Outros personagens",
descricao:
"Doce canudo de pelúcia em vermelho e branco, perfeito para enfeitar a árvore de Natal.",
preco: 89.9,
imagem: "img/produtos/docecanudo.png",
},

{
id: 44,
nome: "Árvore de Natal de Pelúcia",
categoria: "Outros personagens",
descricao:
"Árvore de Natal em miniatura feita de pelúcia verde, com detalhes em vermelho e dourado.",
preco: 99.9,
imagem: "img/produtos/arvore.png",
},

{
id: 45,
nome: "Dragão de Pelúcia",
categoria: "Outros personagens",
descricao:
"Dragão de pelúcia com detalhes verdes e pequenos acessórios de Natal.",
preco: 119.9,
imagem: "img/produtos/dragao.png",
},

{
id: 46,
nome: "Esquilo de Pelúcia",
categoria: "Renas e bichos da floresta",
descricao: "Esquilo de pelúcia segurando uma pequena noz entre as patas.",
preco: 64.9,
imagem: "img/produtos/esquilo.png",
},

{
id: 47,
nome: "Coruja de Pelúcia",
categoria: "Renas e bichos da floresta",
descricao: "Corujinha de pelúcia com plumagem marrom e cachecol festivo.",
preco: 69.9,
imagem: "img/produtos/coruja.png",
},

{
id: 48,
nome: "Foca de Pelúcia",
categoria: "Bonecos de neve e bichos do inverno",
descricao:
"Foca bebê cinza-clara, com olhos delicados e corpo arredondado.",
preco: 74.9,
imagem: "img/produtos/foca.png",
},

{
id: 49,
nome: "Baleia Unicornio",
categoria: "Bonecos de neve e bichos do inverno",
descricao:
"Baleia de pelúcia azul com chifre de unicórnio e detalhes delicados.",
preco: 22.9,
imagem: "img/produtos/baleiachfre.png",
},

{
id: 50,
nome: "Baleia de Pelúcia",
categoria: "Bonecos de neve e bichos do inverno",
descricao:
"Baleia de pelúcia azul com detalhes delicados e acabamento macio.",
preco: 22.9,
imagem: "img/produtos/baleia.png",
},

{
id: 51,
nome: "Raposa Polar",
categoria: "Bonecos de neve e bichos do inverno",
descricao:
"Raposa de pelúcia em tons claros, com aparência macia e detalhes delicados.",
preco: 79.9,
imagem: "img/produtos/raposapolar.png",
},

{
id: 52,
nome: "Raposa de Pelúcia",
categoria: "Renas e bichos da floresta",
descricao:
"Raposa de pelúcia em tom branco-creme, com cauda volumosa e focinho delicado.",
preco: 89.9,
imagem: "img/produtos/raposa.png",
},
];

// Produtos apresentados no carrossel "Mais vendidos".
const produtosMaisVendidos = [
{
imagem: "img/produtos/rena cachecol.webp",
titulo: "Rena de Cachecol",
descricao:
"Rena de pelúcia com cachecol em cores natalinas, perfeita para decorar sua casa durante a temporada festiva.",
alt: "Rena de Cachecol",
},
{
imagem: "img/produtos/boneco de neve azul.webp",
titulo: "Boneco de Neve com Cachecol Azul",
descricao:
"Boneco de neve de pelúcia com cachecol azul, ideal para presentear ou decorar sua casa durante a temporada natalina.",
alt: "Boneco de Neve com Cachecol Azul",
},
{
imagem: "img/produtos/casal rena.webp",
titulo: "Casal de renas de pelúcia",
descricao:
"Um casal de renas de pelúcia, perfeito para decorar sua casa durante a temporada natalina. ",
alt: "Casal de renas de pelúcia",
},
{
imagem: "img/produtos/ursorosa.webp",
titulo: "Urso Rosa de Pelúcia",
descricao:
"Um urso rosa de pelúcia, perfeito para presentear ou decorar sua casa durante a temporada natalina. Feito com materiais de alta qualidade, este urso traz alegria e espírito festivo para qualquer ambiente.",
alt: "Urso Rosa de Pelúcia",
},
{
imagem: "img/produtos/minipai.jpg",
titulo: "Mini Papai Noel de Pelúcia",
descricao:
" Um mini Papai Noel de pelúcia, ideal para presentear ou decorar sua casa durante a temporada natalina. Feito com materiais de alta qualidade, este mini Papai Noel traz alegria e espírito festivo para qualquer ambiente.",
alt: "Mini Papai Noel de Pelúcia",
},
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
if (
!imagemDestaque ||
!tituloDestaque ||
!descricaoDestaque ||
!contadorDestaque
)
return;

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
indiceProdutoAtual =
(indiceProdutoAtual - 1 + produtosMaisVendidos.length) %
produtosMaisVendidos.length;
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
const descricao =
paragrafos.find((p) => !p.classList.contains("preco")) || paragrafos[0];
const preco = card.querySelector(".preco");

if (!titulo) return;

cardSelecionado = card;
ultimoFoco = document.activeElement;
modalTitulo.textContent = titulo.textContent.trim();
modalDescricao.textContent = descricao
? descricao.textContent.trim()
: "Um mimo especial para deixar seu Natal ainda mais encantador.";
modalPreco.textContent = preco ? formatarPreco(preco.textContent) : "";

const imagemAntiga = modal.querySelector(
".modal-visual .imagem-placeholder",
);
if (imagemAntiga) imagemAntiga.remove();

if (
imagem &&
imagem.getAttribute("src") &&
(!imagem.complete || imagem.naturalWidth > 0)
) {
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
if (ultimoFoco && typeof ultimoFoco.focus === "function")
ultimoFoco.focus();
}

function mostrarNotificacao(nomeProduto) {
const titulo = notificacao.querySelector("strong");
const texto = notificacao.querySelector("p");
if (titulo) titulo.textContent = "Produto adicionado!";
if (texto)
texto.textContent = `${nomeProduto} foi adicionado. Confira sua sacola no canto superior direito.`;

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
if (titulo)
card.setAttribute("aria-label", `Ver detalhes de ${titulo}`);
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
lista.addEventListener(
"click",
(evento) => {
const botao = evento.target.closest("button");
if (!botao || !botao.closest(".card")) return;
const nome =
botao.closest(".card").querySelector("h3")?.textContent?.trim() ||
"Seu mimo";
window.setTimeout(() => mostrarNotificacao(nome), 0);
},
true,
);

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
if (evento.key === "Escape" && modal.classList.contains("aberto"))
fecharModal();
});

fecharNotificacao?.addEventListener("click", () => {
notificacao.classList.remove("visivel");
window.clearTimeout(temporizadorNotificacao);
});
})();

// =====================================================
// Barra lateral da sacola: abre, fecha e recebe a lista de itens.
// =====================================================
(function configurarSacolaLateral() {
  const painel = document.getElementById("painel-sacola");
  const fundo = document.getElementById("fundo-sacola");
  const btnAbrir = document.querySelector(".atalho-carrinho");
  const btnFechar = document.getElementById("fechar-sacola");
  const lista = document.getElementById("lista-sacola");
  const vazia = document.getElementById("sacola-vazia");
  const totalPainel = document.getElementById("total-sacola");

  if (!painel || !fundo || !btnAbrir) return;

  const formatarMoeda = (valor) =>
    valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

  function abrirSacola(evento) {
    evento.preventDefault(); // impede o link de pular para #catalogo
    painel.classList.add("aberto");
    fundo.classList.add("ativo");
    painel.setAttribute("aria-hidden", "false");
    btnFechar.focus();
  }

  function fecharSacola() {
    painel.classList.remove("aberto");
    fundo.classList.remove("ativo");
    painel.setAttribute("aria-hidden", "true");
    btnAbrir.focus();
  }

  btnAbrir.addEventListener("click", abrirSacola);
  btnFechar.addEventListener("click", fecharSacola);
  fundo.addEventListener("click", fecharSacola);

  document.addEventListener("keydown", (evento) => {
    if (evento.key === "Escape" && painel.classList.contains("aberto"))
      fecharSacola();
  });

  // Chame esta função sempre que a sacola mudar.
  // itens: [{ nome, preco, quantidade }]
  window.atualizarSacolaLateral = function (itens) {
    lista.innerHTML = "";
    let total = 0;

    itens.forEach((item) => {
      const subtotal = item.preco * item.quantidade;
      total += subtotal;

      const li = document.createElement("li");
      li.className = "item-sacola";

      const nome = document.createElement("span");
      nome.textContent = `${item.nome} × ${item.quantidade}`;

      const preco = document.createElement("strong");
      preco.textContent = formatarMoeda(subtotal);

      li.append(nome, preco);
      lista.appendChild(li);
    });

    vazia.hidden = itens.length > 0;
    totalPainel.textContent = formatarMoeda(total);
  };
})();
// ----- Finalizar compra (demonstrativo) -----
const botaoFinalizarCompra = document.getElementById("finalizar-compra");
const feedbackCompra = document.getElementById("feedback-compra");

if (botaoFinalizarCompra && feedbackCompra) {
  botaoFinalizarCompra.addEventListener("click", () => {
    if (carrinho.length === 0) {
      feedbackCompra.textContent =
        "Sua sacola está vazia. Adicione um mimo antes de finalizar.";
      feedbackCompra.className = "feedback-compra erro";
      feedbackCompra.hidden = false;
      return;
    }

    carrinho = [];
    salvarCarrinho();
    atualizarCarrinho();

    feedbackCompra.textContent =
      "Compra finalizada com sucesso. Como este é um projeto demonstrativo, a compra não foi concluída.";
    feedbackCompra.className = "feedback-compra sucesso";
    feedbackCompra.hidden = false;
  });
}