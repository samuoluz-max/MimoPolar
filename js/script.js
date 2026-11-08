// =====================================================
// script.js — todos os recursos de JavaScript da Mimo Polar
//
// Organização:
//   1. Todas as páginas   -> música de fundo
//   2. index.html         -> parallax da home
//   3. produtos.html      -> cards, busca/filtro e sacola
//   4. galeria.html       -> slideshow
//   5. páginas com .contagem -> contagem regressiva até o Natal de 2026
//
// Cada bloco só roda se os elementos dele existirem na página,
// então o mesmo arquivo pode ser carregado em todos os HTML.
// (Em produtos.html, js/produtos.js precisa vir antes deste arquivo.)
// =====================================================

const semMovimento = window.matchMedia("(prefers-reduced-motion: reduce)");

// =====================================================
// SINO AO ENTRAR NO SITE (toca uma vez por visita)
// =====================================================
(function sinoDeEntrada() {
  const CHAVE = "sinoTocou";

  // se já tocou nesta visita, não toca de novo
  try {
    if (sessionStorage.getItem(CHAVE)) return;
  } catch (erro) {}

  const sino = new Audio("audio/sino.mp3");
  sino.volume = 0.5;

  function marcarComoTocado() {
    try {
      sessionStorage.setItem(CHAVE, "1");
    } catch (erro) {}
  }

  const eventos = ["pointerdown", "keydown", "touchstart"];

  function tocarNoPrimeiroToque() {
    eventos.forEach((e) => document.removeEventListener(e, tocarNoPrimeiroToque));
    sino.play().then(marcarComoTocado).catch(() => {});
  }

  sino.play().then(marcarComoTocado).catch(() => {
    eventos.forEach((e) => document.addEventListener(e, tocarNoPrimeiroToque));
  });
})();


// =====================================================
// 1. TODAS AS PÁGINAS — música de fundo
// =====================================================
const CHAVE_MUSICA = "musicaNatal";
const musica = new Audio("audio/musica-natal.mp3");
musica.loop = true;
musica.volume = 0.3;

const botaoMusica = document.getElementById("btn-musica");

function atualizarBotaoMusica() {
  if (botaoMusica) {
    botaoMusica.textContent = musica.paused ? "Ativar música" : "Pausar música";
  }
}

function tocarSino() {
  const som = new Audio("audio/sino.mp3");
  som.volume = 0.5;
  som.play().catch((erro) => {
    console.error("Não foi possível reproduzir o som de sino.", erro);
  });
}

if (botaoMusica) {
  botaoMusica.addEventListener("click", async () => {
    if (musica.paused) {
      try {
        await musica.play();
      } catch (erro) {
        console.error("Não foi possível reproduzir a música natalina.", erro);
        botaoMusica.textContent = "Áudio indisponível";
        return;
      }
    } else {
      musica.pause();
    }
    atualizarBotaoMusica();
  });

  // Continua de onde parou ao trocar de página.
  // O navegador pode bloquear o play automático; nesse caso o botão
  // continua em "Ativar música" e basta clicar.
  let estadoSalvo = null;
  try {
    estadoSalvo = JSON.parse(sessionStorage.getItem(CHAVE_MUSICA));
  } catch (erro) {
    estadoSalvo = null;
  }

  if (estadoSalvo) {
    musica.addEventListener(
      "loadedmetadata",
      () => {
        musica.currentTime = estadoSalvo.tempo || 0;
      },
      { once: true },
    );
    if (estadoSalvo.tocando) {
      musica.play().then(atualizarBotaoMusica).catch(() => {});
    }
  }

  window.addEventListener("pagehide", () => {
    try {
      sessionStorage.setItem(
        CHAVE_MUSICA,
        JSON.stringify({ tocando: !musica.paused, tempo: musica.currentTime }),
      );
    } catch (erro) {
      // sem armazenamento disponível: segue sem lembrar a música
    }
  });
}

// =====================================================
// 2. INDEX.HTML — parallax da home (logo, pelúcia e Papai Noel)
// =====================================================
const logos = document.getElementById("logos");
const papai = document.getElementById("papai");
const pelucia = document.getElementById("pelucia");
const neve = document.getElementById("neve");
const parallaxMobile = window.matchMedia("(max-width: 768px)");

let ticking = false;

if (logos && papai && pelucia && neve) {
  function updateParallax() {
    if (parallaxMobile.matches) {
      logos.style.removeProperty("transform");
      papai.style.removeProperty("transform");
      pelucia.style.removeProperty("transform");
      neve.style.removeProperty("transform");
      ticking = false;
      return;
    }

    const value = window.scrollY;

    logos.style.transform = `translateX(${value * -2}px)`;
    papai.style.transform = `translateY(${value * 0.5}px)`;
    pelucia.style.transform = `translateY(${value * 0.7}px)`;
    neve.style.transform = `translateY(${value}px)`;

    ticking = false;
  }

  window.addEventListener("scroll", () => {
    if (parallaxMobile.matches) {
      return;
    }

    if (!ticking) {
      window.requestAnimationFrame(updateParallax);
      ticking = true;
    }
  });

  window.addEventListener("resize", updateParallax);
  updateParallax();
}

// =====================================================
// 3. PRODUTOS.HTML — cards, busca/filtro e sacola
// =====================================================
// "produtos" vem de js/produtos.js (só existe na página de produtos)
const temProdutos = typeof produtos !== "undefined";

const listaProdutos = document.getElementById("lista-produtos");
const campoBusca = document.getElementById("busca");
const seletorCategoria = document.getElementById("categoria");
const contadorProdutos = document.getElementById("contador");
const botaoLimparCarrinho = document.getElementById("limpar-carrinho");

// ----- Cards -----
function formatarPreco(valor) {
  return valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

function criarCard(produto) {
  return `
<article class="card">
  <img src="${produto.imagem}" alt="${produto.nome}" loading="lazy">
  <h3>${produto.nome}</h3>
  <p>${produto.descricao}</p>
  <strong class="preco">${formatarPreco(produto.preco)}</strong>
  <button class="btn-comprar" type="button" data-id="${produto.id}">Adicionar ao carrinho</button>
</article>`;
}

function mostrarProdutos(lista) {
  if (!listaProdutos) return;
  listaProdutos.innerHTML = lista.length
    ? lista.map(criarCard).join("")
    : '<p class="sem-resultados">Nenhum produto encontrado.</p>';
}

// ----- Busca e filtro -----
// Ignora maiúsculas e acentos ("pelucia" encontra "Pelúcia")
function normalizar(texto) {
  return texto
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

function filtrar() {
  const texto = normalizar(campoBusca.value.trim());
  const categoria = seletorCategoria.value;
  const resultado = produtos.filter((p) => {
    const combinaNome = normalizar(p.nome).includes(texto);
    const combinaCategoria = categoria === "todas" || p.categoria === categoria;
    return combinaNome && combinaCategoria;
  });
  mostrarProdutos(resultado);
  if (contadorProdutos) {
    contadorProdutos.textContent = `Mostrando ${resultado.length} de ${produtos.length} produtos`;
  }
}

// ----- Sacola (guarda só os ids no localStorage) -----
function lerCarrinho() {
  try {
    const dados = JSON.parse(localStorage.getItem("carrinho"));
    if (!Array.isArray(dados)) return [];
    // aceita o formato antigo (objetos inteiros) e o novo (só ids)
    return dados
      .map((item) => (item && typeof item === "object" ? item.id : item))
      .filter((id) => Number.isFinite(id));
  } catch (erro) {
    return [];
  }
}

function salvarCarrinho() {
  try {
    localStorage.setItem("carrinho", JSON.stringify(carrinho));
  } catch (erro) {
    console.error("Não foi possível salvar a sacola.", erro);
  }
}

let carrinho = lerCarrinho();

function atualizarCarrinho() {
  document.querySelectorAll("[data-qtd-carrinho]").forEach((el) => {
    el.textContent = carrinho.length;
  });

  const totalCarrinho = document.getElementById("total-carrinho");
  if (totalCarrinho && temProdutos) {
    const total = carrinho.reduce((soma, id) => {
      const produto = produtos.find((p) => p.id === id);
      return soma + (produto ? produto.preco : 0);
    }, 0);
    totalCarrinho.textContent = formatarPreco(total);
  }
}

function adicionarAoCarrinho(id) {
  if (!temProdutos || !produtos.some((p) => p.id === id)) {
    console.error(`Produto com id ${id} não encontrado.`);
    return;
  }
  carrinho.push(id);
  salvarCarrinho();
  atualizarCarrinho();
}

// ----- Ligando tudo na página -----
if (listaProdutos && !temProdutos) {
  console.error(
    "A lista 'produtos' não foi encontrada. Confira se js/produtos.js " +
      "está carregado em produtos.html antes de js/script.js.",
  );
}

if (listaProdutos && temProdutos) {
  mostrarProdutos(produtos);

  if (campoBusca && seletorCategoria) {
    campoBusca.addEventListener("input", filtrar);
    seletorCategoria.addEventListener("change", filtrar);
    filtrar(); // já mostra "Mostrando X de Y produtos" ao abrir a página
  }

  listaProdutos.addEventListener("click", (evento) => {
    if (evento.target instanceof Element) {
      const botao = evento.target.closest(".btn-comprar");
      if (botao) {
        adicionarAoCarrinho(Number(botao.dataset.id));
        tocarSino();
      }
    }
  });
}

if (botaoLimparCarrinho) {
  botaoLimparCarrinho.addEventListener("click", () => {
    carrinho = [];
    salvarCarrinho();
    atualizarCarrinho();
  });
}

atualizarCarrinho();

// =====================================================
// 4. GALERIA.HTML — slideshow
// =====================================================
const slides = document.querySelectorAll(".slide");
const slideshow = document.querySelector(".galeria-slideshow");
const contadorSlides = document.querySelector(".slides-contador");
const botaoAnterior = document.getElementById("anterior");
const botaoProximo = document.getElementById("proximo");

if (
  slides.length &&
  slideshow &&
  contadorSlides &&
  botaoAnterior &&
  botaoProximo
) {
  let atual = 0;
  let intervalo;

  function mostrarSlide(indice) {
    slides[atual].classList.remove("ativo");
    slides[atual].setAttribute("aria-hidden", "true");
    atual = (indice + slides.length) % slides.length;
    slides[atual].classList.add("ativo");
    slides[atual].setAttribute("aria-hidden", "false");
    contadorSlides.textContent = `${atual + 1} de ${slides.length}`;
  }

  function pararIntervalo() {
    window.clearInterval(intervalo);
  }

  function iniciarIntervalo() {
    pararIntervalo();
    if (!semMovimento.matches) {
      intervalo = window.setInterval(() => mostrarSlide(atual + 1), 5000);
    }
  }

  botaoProximo.addEventListener("click", () => mostrarSlide(atual + 1));
  botaoAnterior.addEventListener("click", () => mostrarSlide(atual - 1));
  slideshow.addEventListener("mouseenter", pararIntervalo);
  slideshow.addEventListener("mouseleave", iniciarIntervalo);
  slideshow.addEventListener("focusin", pararIntervalo);
  slideshow.addEventListener("focusout", (evento) => {
    if (!slideshow.contains(evento.relatedTarget)) {
      iniciarIntervalo();
    }
  });

  iniciarIntervalo();
}


// =====================================================
// 5. PÁGINAS COM CONTAGEM — tempo até o Natal de 2026
// =====================================================
const elementoDias = document.getElementById("dias");
const elementoHoras = document.getElementById("horas");
const elementoMinutos = document.getElementById("minutos");
const elementoSegundos = document.getElementById("segundos");

if (elementoDias && elementoHoras && elementoMinutos && elementoSegundos) {
  function atualizarContagem() {
    const agora = new Date();
    const natal2026 = new Date(2026, 11, 25);
    const diferenca = Math.max(0, natal2026.getTime() - agora.getTime());
    const segundosRestantes = Math.floor(diferenca / 1000);
    const dias = Math.floor(segundosRestantes / 86400);
    const horas = Math.floor((segundosRestantes % 86400) / 3600);
    const minutos = Math.floor((segundosRestantes % 3600) / 60);
    const segundos = segundosRestantes % 60;

    elementoDias.textContent = String(dias);
    elementoHoras.textContent = String(horas).padStart(2, "0");
    elementoMinutos.textContent = String(minutos).padStart(2, "0");
    elementoSegundos.textContent = String(segundos).padStart(2, "0");
  }

  atualizarContagem();
  window.setInterval(atualizarContagem, 1000);
}


// =====================================================
// 6. INDEX.HTML — slideshow da home
// =====================================================
const promoSlides = document.querySelectorAll(".promo-slide");
const promoSlideshow = document.getElementById("promo-slideshow");
const promoAnterior = document.getElementById("promo-anterior");
const promoProximo = document.getElementById("promo-proximo");
const promoIndicadores = document.getElementById("promo-indicadores");

if (
  promoSlides.length &&
  promoSlideshow &&
  promoAnterior &&
  promoProximo &&
  promoIndicadores
) {
  let promoAtual = 0;
  let promoTimer;

  // cria uma bolinha para cada slide
  promoSlides.forEach((slide, i) => {
    const ponto = document.createElement("button");
    ponto.className = "promo-indicador";
    ponto.type = "button";
    ponto.setAttribute("aria-label", `Ir para o slide ${i + 1}`);
    ponto.addEventListener("click", () => {
      promoMostrar(i);
      promoIniciar();
    });
    promoIndicadores.appendChild(ponto);
  });
  const promoPontos = promoIndicadores.querySelectorAll(".promo-indicador");

  function promoMostrar(indice) {
    promoSlides[promoAtual].classList.remove("ativo");
    promoPontos[promoAtual].classList.remove("ativo");
    promoAtual = (indice + promoSlides.length) % promoSlides.length;
    promoSlides[promoAtual].classList.add("ativo");
    promoPontos[promoAtual].classList.add("ativo");
  }

  function promoParar() {
    window.clearInterval(promoTimer);
  }

  function promoIniciar() {
    promoParar();
    if (!semMovimento.matches) {
      promoTimer = window.setInterval(() => promoMostrar(promoAtual + 1), 5000);
    }
  }

  promoProximo.addEventListener("click", () => {
    promoMostrar(promoAtual + 1);
    promoIniciar();
  });
  promoAnterior.addEventListener("click", () => {
    promoMostrar(promoAtual - 1);
    promoIniciar();
  });
  promoSlideshow.addEventListener("mouseenter", promoParar);
  promoSlideshow.addEventListener("mouseleave", promoIniciar);

  promoMostrar(0);
  promoIniciar();
}