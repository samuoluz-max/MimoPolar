// =====================================================
// produtos.js — lista de produtos da Mimo Polar
// Este arquivo só guarda os dados. Quem desenha os cards,
// filtra e controla a sacola é o script.js.
//
// Cada produto precisa de:
//   id         número único (1, 2, 3...)
//   nome       nome que aparece no card (e é usado na busca)
//   categoria  igual a uma das opções do <select> em produtos.html:
//              "Papai Noel", "Renas", "Bonecos de neve",
//              "Ursinhos natalinos" ou "Outros personagens"
//   descricao  texto curto do card
//   preco      número com ponto (89.9), sem "R$"
//   imagem     caminho da foto, ex.: "img/produtos/papai-noel-classico.webp"
//
// Cole aqui os seus 50 produtos, no mesmo formato do exemplo.
// =====================================================
 
const produtos = [
  // Exemplo (apague ou substitua):
  // {
  //   id: 1,
  //   nome: "Papai Noel Clássico",
  //   categoria: "Papai Noel",
  //   descricao: "Pelúcia macia de 30 cm com gorro e barba fofinha.",
  //   preco: 89.9,
  //   imagem: "img/produtos/papai-noel-classico.webp",
  // },
];

// =====================================================
// Vitrine: produtos mais vendidos
// Esta parte controla apenas a imagem e o texto em destaque.
// =====================================================

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
    descricao: "Um urso inflável de grande porte, ideal para decorar sua casa e criar um ambiente festivo e acolhedor, perfeito para sentar e contar histórias de Natal.",
    alt: "Urso inflável grande de Natal"
  }
];

const imagemDestaque = document.getElementById("imagem-produto-destaque");
const tituloDestaque = document.getElementById("titulo-produto-destaque");
const descricaoDestaque = document.getElementById("descricao-produto-destaque");
const contadorDestaque = document.getElementById("contador-mais-vendidos");
const botaoAvancar = document.querySelector(".avançar");
const botaoVoltar = document.querySelector(".voltar");

let indiceProdutoAtual = 0;

function mostrarProdutoDestaque() {
  // Busca os dados do produto que está na posição atual do array.
  const produtoAtual = produtosMaisVendidos[indiceProdutoAtual];

  // Atualiza a imagem e os textos sem precisar recriar os elementos HTML.
  imagemDestaque.src = produtoAtual.imagem;
  imagemDestaque.alt = produtoAtual.alt;
  tituloDestaque.textContent = produtoAtual.titulo;
  descricaoDestaque.textContent = produtoAtual.descricao;
  contadorDestaque.textContent = `${indiceProdutoAtual + 1} de ${produtosMaisVendidos.length}`;
}

botaoAvancar.addEventListener("click", () => {
  indiceProdutoAtual++;

  // Depois do último produto, volta para o primeiro.
  if (indiceProdutoAtual >= produtosMaisVendidos.length) {
    indiceProdutoAtual = 0;
  }

  mostrarProdutoDestaque();
});

botaoVoltar.addEventListener("click", () => {
  indiceProdutoAtual--;

  // Antes do primeiro produto, vai para o último.
  if (indiceProdutoAtual < 0) {
    indiceProdutoAtual = produtosMaisVendidos.length - 1;
  }

  mostrarProdutoDestaque();
});
