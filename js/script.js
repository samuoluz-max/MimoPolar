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

const semMovimento = { matches: false };

// =====================================================
// TODAS AS PÁGINAS — cabeçalho que cresce sozinho
// O cabeçalho é fixo e pode quebrar em 2 ou 3 linhas conforme a tela.
// Aqui a altura real dele vai para --altura-cabecalho, para o conteúdo
// da página nunca ficar escondido embaixo dele.
// =====================================================
(function ajustarAlturaCabecalho() {
  const cabecalho = document.querySelector(".cabecalho");
  if (!cabecalho) return;

  function atualizar() {
    const altura = Math.ceil(cabecalho.getBoundingClientRect().height);
    document.documentElement.style.setProperty(
      "--altura-cabecalho",
      `${altura}px`,
    );
  }

  atualizar();

  if ("ResizeObserver" in window) {
    new ResizeObserver(atualizar).observe(cabecalho);
  } else {
    window.addEventListener("resize", atualizar);
  }

  // fontes e imagens podem mudar a altura depois do carregamento
  window.addEventListener("load", atualizar);
  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(atualizar);
  }
})();

// =====================================================
// TODAS AS PÁGINAS — neve global com controle persistente
// =====================================================
const botaoNeve = document.querySelector(".botao-neve");

if (botaoNeve) {
  const CHAVE_NEVE = "efeitoNeveAtivo";
  const camadaNeve = document.createElement("div");
  camadaNeve.className = "camada-neve";
  camadaNeve.setAttribute("aria-hidden", "true");

  // Na home a neve entra dentro da seção do parallax, para ficar acima
  // da foto e abaixo do Papai Noel e da pelúcia. Nas outras páginas
  // (que não têm essa seção) ela vai para o body, atrás do conteúdo.
  (document.getElementById("fundo-parallax") || document.body).append(
    camadaNeve,
  );

  let neveAtiva = true;
  try {
    const preferenciaSalva = localStorage.getItem(CHAVE_NEVE);
    if (preferenciaSalva !== null) neveAtiva = preferenciaSalva === "true";
  } catch (erro) {
    console.error(
      "Não foi possível carregar a preferência do efeito de neve.",
      erro,
    );
  }

  const textoBotaoNeve = botaoNeve.querySelector("[data-texto-neve]");

  function atualizarEfeitoNeve() {
    document.body.classList.toggle("neve-desativada", !neveAtiva);
    botaoNeve.setAttribute("aria-pressed", String(neveAtiva));
    botaoNeve.setAttribute(
      "aria-label",
      neveAtiva ? "Desligar efeito de neve" : "Ligar efeito de neve",
    );
    if (textoBotaoNeve) {
      textoBotaoNeve.textContent = neveAtiva ? "Neve ligada" : "Neve desligada";
    }
  }

  atualizarEfeitoNeve();

  botaoNeve.addEventListener("click", () => {
    neveAtiva = !neveAtiva;
    atualizarEfeitoNeve();

    try {
      localStorage.setItem(CHAVE_NEVE, String(neveAtiva));
    } catch (erro) {
      console.error(
        "Não foi possível salvar a preferência do efeito de neve.",
        erro,
      );
    }
  });
}

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
    eventos.forEach((e) =>
      document.removeEventListener(e, tocarNoPrimeiroToque),
    );
    sino
      .play()
      .then(marcarComoTocado)
      .catch(() => {});
  }

  sino
    .play()
    .then(marcarComoTocado)
    .catch(() => {
      eventos.forEach((e) =>
        document.addEventListener(e, tocarNoPrimeiroToque),
      );
    });
})();

// =====================================================
// 1. TODAS AS PÁGINAS — música de fundo
// =====================================================
const CHAVE_MUSICA = "musicaNatal";
const musica = new Audio("audio/musica-natal.mp3");
musica.loop = true;
musica.volume = 0.05;

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
      musica
        .play()
        .then(atualizarBotaoMusica)
        .catch(() => {});
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
// 2. INDEX.HTML — parallax da home (fundo, logo, pelúcia e Papai Noel)
// =====================================================
const fundoParallax = document.getElementById("fundo-parallax");
const logos = document.getElementById("logos");
const papai = document.getElementById("papai");
const pelucia = document.getElementById("pelucia");

const parallaxCompacto = window.matchMedia("(max-width: 1100px)");
const parallaxSemMovimento = {
  matches: new URLSearchParams(location.search).has("semparallax"),
};

// Folga da imagem acima da section (precisa ser igual ao top negativo
// da regra .parallax::before no CSS: 15% da altura da section)
const FOLGA_FUNDO = 0.15;

// Velocidade dos elementos (menor = mais lento = mais profundidade).
// No tablet e no celular o efeito é mais leve.
const FATORES_PARALLAX = {
  desktop: { fundo: 0.3, logosX: -1, logosY: 0, papai: 0.5, pelucia: 0.3 },
  compacto: { fundo: 0.18, logosX: 0, logosY: 0.1, papai: 0.12, pelucia: 0.08 },
};

if (fundoParallax && logos && papai && pelucia) {
  let ticking = false;

  const mover = (elemento, x, y) => {
    elemento.style.transform = `translate3d(${x}px, ${y}px, 0)`;
  };

  const limparParallax = () => {
    fundoParallax.style.removeProperty("--fundo-y");
    [logos, papai, pelucia].forEach((el) => el.style.removeProperty("transform"));
  };

  const atualizarParallax = () => {
    ticking = false;

    if (parallaxSemMovimento.matches) {
      limparParallax();
      return;
    }

    const f = parallaxCompacto.matches
      ? FATORES_PARALLAX.compacto
      : FATORES_PARALLAX.desktop;

    // Depois que o banner sai da tela não precisa mais calcular
    const alturaBanner = fundoParallax.offsetHeight;
    const rolagem = Math.min(Math.max(window.scrollY, 0), alturaBanner);

    // O fundo desce devagar, mas nunca além da folga da imagem.
    // Assim não aparece faixa vazia nem repetição.
    const limite = alturaBanner * FOLGA_FUNDO;
    fundoParallax.style.setProperty(
      "--fundo-y",
      `${Math.min(rolagem * f.fundo, limite)}px`,
    );

    mover(logos, rolagem * f.logosX, rolagem * f.logosY);
    mover(papai, 0, rolagem * f.papai);
    mover(pelucia, 0, rolagem * f.pelucia);
  };

  const pedirAtualizacao = () => {
    if (!ticking) {
      ticking = true;
      window.requestAnimationFrame(atualizarParallax);
    }
  };

  window.addEventListener("scroll", pedirAtualizacao, { passive: true });
  window.addEventListener("resize", pedirAtualizacao);
  window.addEventListener("orientationchange", pedirAtualizacao);
  window.addEventListener("load", pedirAtualizacao);
  parallaxCompacto.addEventListener("change", pedirAtualizacao);

  atualizarParallax();
}

// =====================================================
// ANIMAÇÕES DE ENTRADA AO ROLAR A PÁGINA
// Anima só os elementos dentro das seções .animar-rolagem
// =====================================================
const elementosAnimados = document.querySelectorAll(
  ".animar-rolagem .sobretitulo, .animar-rolagem h2, .animar-rolagem .grade-produtos, .animar-rolagem .home-links-grade, .animar-rolagem .botao-comprar-home",
);

if (elementosAnimados.length && "IntersectionObserver" in window) {
  document.body.classList.add("animacao-rolagem-ativa");
  elementosAnimados.forEach((elemento) => elemento.classList.add("revelar"));

  const observadorRolagem = new IntersectionObserver(
    (entradas, observador) => {
      entradas.forEach((entrada) => {
        if (entrada.isIntersecting) {
          entrada.target.classList.add("visivel");
          observador.unobserve(entrada.target);
        }
      });
    },
    { threshold: 0.1 },
  );

  elementosAnimados.forEach((elemento) => observadorRolagem.observe(elemento));
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
  <button class="btn-comprar" type="button" data-id="${produto.id}">Adicionar a Sacola</button>
</article>`;
}

function mostrarProdutos(lista) {
  if (!listaProdutos) return;
  listaProdutos.innerHTML = lista.length
    ? lista.map(criarCard).join("")
    : '<p class="sem-resultados">Nenhum produto encontrado.</p>';
}

function preencherCategorias() {
  if (!seletorCategoria || !temProdutos) return;

  const quantidades = new Map();
  produtos.forEach((produto) => {
    quantidades.set(
      produto.categoria,
      (quantidades.get(produto.categoria) || 0) + 1,
    );
  });

  seletorCategoria.replaceChildren(new Option("Todas as pelúcias", "todas"));
  quantidades.forEach((quantidade, categoria) => {
    seletorCategoria.add(new Option(`${categoria} (${quantidade})`, categoria));
  });
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

  // Atualiza a barra lateral agrupando os ids repetidos em itens com quantidade.
  if (temProdutos && window.atualizarSacolaLateral) {
    const agrupados = new Map();
    carrinho.forEach((id) => {
      const produto = produtos.find((p) => p.id === id);
      if (!produto) return;
      const item = agrupados.get(id) || {
        id,
        nome: produto.nome,
        preco: produto.preco,
        quantidade: 0,
      };
      item.quantidade++;
      agrupados.set(id, item);
    });
    window.atualizarSacolaLateral([...agrupados.values()]);
  }
}
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
// ----- Esvaziar sacola pelo painel lateral -----
const botaoLimparSacola = document.getElementById("limpar-sacola");

if (botaoLimparSacola) {
  botaoLimparSacola.addEventListener("click", () => {
    carrinho = [];
    salvarCarrinho();
    atualizarCarrinho();
  });
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

// ----- Remover item pela sacola lateral -----
const listaSacola = document.getElementById("lista-sacola");

if (listaSacola) {
  listaSacola.addEventListener("click", (evento) => {
    const botao = evento.target.closest(".remover-item-sacola");
    if (!botao) return;

    const id = Number(botao.dataset.id);
    carrinho = carrinho.filter((itemId) => itemId !== id);
    salvarCarrinho();
    atualizarCarrinho();
  });
}

// ----- Ligando tudo na página -----
if (listaProdutos && !temProdutos) {
  console.error(
    "A lista 'produtos' não foi encontrada. Confira se js/produtos.js " +
      "está carregado em produtos.html antes de js/script.js.",
  );
}

if (listaProdutos && temProdutos) {
  preencherCategorias();
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
// HOME — produtos marcados como destaque no catálogo
// =====================================================
const listaDestaquesHome = document.getElementById("produtos-destaque");

if (listaDestaquesHome) {
  const destaques = temProdutos
    ? produtos.filter((produto) => produto.destaque)
    : [];

  if (!destaques.length) {
    listaDestaquesHome.textContent = "Em breve, novos destaques da coleção.";
  } else {
    destaques.forEach((produto) => {
      const card = document.createElement("article");
      card.className = "card";

      const imagem = document.createElement("img");
      imagem.src = produto.imagem;
      imagem.alt = produto.nome;
      imagem.loading = "lazy";

      const titulo = document.createElement("h3");
      titulo.textContent = produto.nome;

      const descricao = document.createElement("p");
      descricao.textContent =
        produto.descricao.length > 110
          ? `${produto.descricao.slice(0, 107).trimEnd()}...`
          : produto.descricao;

      const preco = document.createElement("strong");
      preco.className = "preco";
      preco.textContent = formatarPreco(produto.preco);

      const link = document.createElement("a");
      link.href = "produtos.html#catalogo";
      link.textContent = "Ver produto";
      link.setAttribute("aria-label", `Ver ${produto.nome} no catálogo`);

      card.append(imagem, titulo, descricao, preco, link);
      listaDestaquesHome.append(card);
    });
  }
}

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
// GALERIA.HTML — lightbox para ampliar a imagem atual
// =====================================================
const lightbox = document.getElementById("galeria-lightbox");
const lightboxImagem = document.getElementById("lightbox-imagem");
const lightboxLegenda = document.getElementById("lightbox-legenda");
const botaoFecharLightbox = document.querySelector(".lightbox-fechar");

if (lightbox && lightboxImagem && lightboxLegenda && botaoFecharLightbox) {
  document.querySelectorAll(".galeria-imagem img").forEach((imagem) => {
    imagem.tabIndex = 0;
    imagem.setAttribute("role", "button");
    imagem.setAttribute("aria-label", `Ampliar imagem: ${imagem.alt}`);

    function abrirLightbox() {
      lightboxImagem.src = imagem.currentSrc || imagem.src;
      lightboxImagem.alt = imagem.alt;
      lightboxLegenda.textContent =
        imagem
          .closest("figure")
          ?.querySelector("figcaption")
          ?.textContent.trim() || imagem.alt;
      lightbox.showModal();
      botaoFecharLightbox.focus();
    }

    imagem.addEventListener("click", abrirLightbox);
    imagem.addEventListener("keydown", (evento) => {
      if (evento.key === "Enter" || evento.key === " ") {
        evento.preventDefault();
        abrirLightbox();
      }
    });
  });

  botaoFecharLightbox.addEventListener("click", () => lightbox.close());
  lightbox.addEventListener("click", (evento) => {
    if (evento.target === lightbox) lightbox.close();
  });
}

// =====================================================
// 5. CONTAGEM — tempo até o Natal de 2026 (header e contador grande da home)
// Funciona com os ids do header (#dias, #horas, #minutos, #segundos)
// e com o contador grande da home ([data-contagem="dias"], etc.).
// =====================================================
const alvosContagem = {
  dias: document.querySelectorAll('#dias, [data-contagem="dias"]'),
  horas: document.querySelectorAll('#horas, [data-contagem="horas"]'),
  minutos: document.querySelectorAll('#minutos, [data-contagem="minutos"]'),
  segundos: document.querySelectorAll('#segundos, [data-contagem="segundos"]'),
};

if (alvosContagem.dias.length) {
  const preencher = (lista, texto) =>
    lista.forEach((el) => {
      el.textContent = texto;
    });

  function atualizarContagem() {
    const natal2026 = new Date(2026, 11, 25);
    const diferenca = Math.max(0, natal2026.getTime() - Date.now());
    const total = Math.floor(diferenca / 1000);

    preencher(alvosContagem.dias, String(Math.floor(total / 86400)));
    preencher(
      alvosContagem.horas,
      String(Math.floor((total % 86400) / 3600)).padStart(2, "0"),
    );
    preencher(
      alvosContagem.minutos,
      String(Math.floor((total % 3600) / 60)).padStart(2, "0"),
    );
    preencher(alvosContagem.segundos, String(total % 60).padStart(2, "0"));
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
    slide.setAttribute("aria-hidden", "true");
    const ponto = document.createElement("button");
    ponto.className = "promo-indicador";
    ponto.type = "button";
    ponto.setAttribute("aria-label", `Ir para o slide ${i + 1}`);
    ponto.setAttribute("aria-pressed", "false");
    ponto.addEventListener("click", () => {
      promoMostrar(i);
      promoIniciar();
    });
    promoIndicadores.appendChild(ponto);
  });
  const promoPontos = promoIndicadores.querySelectorAll(".promo-indicador");

  function promoMostrar(indice) {
    promoSlides[promoAtual].classList.remove("ativo");
    promoSlides[promoAtual].setAttribute("aria-hidden", "true");
    promoPontos[promoAtual].classList.remove("ativo");
    promoPontos[promoAtual].setAttribute("aria-pressed", "false");
    promoAtual = (indice + promoSlides.length) % promoSlides.length;
    promoSlides[promoAtual].classList.add("ativo");
    promoSlides[promoAtual].setAttribute("aria-hidden", "false");
    promoPontos[promoAtual].classList.add("ativo");
    promoPontos[promoAtual].setAttribute("aria-pressed", "true");
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

// =====================================================
// CONTATO.HTML — validação do formulário demonstrativo
// =====================================================
const formularioContato = document.querySelector(".contato-formulario");
const feedbackContato = document.getElementById("contato-feedback");

if (formularioContato && feedbackContato) {
  const camposObrigatorios = [
    ...formularioContato.querySelectorAll("[required]"),
  ];
  const campoEmail = formularioContato.querySelector('input[type="email"]');

  formularioContato.addEventListener("submit", (evento) => {
    evento.preventDefault();
    camposObrigatorios.forEach((campo) =>
      campo.removeAttribute("aria-invalid"),
    );

    const campoVazio = camposObrigatorios.find((campo) => !campo.value.trim());
    const emailInvalido =
      !campoVazio &&
      campoEmail &&
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(campoEmail.value.trim());
    const campoInvalido = campoVazio || (emailInvalido ? campoEmail : null);

    feedbackContato.hidden = false;
    if (campoInvalido) {
      campoInvalido.setAttribute("aria-invalid", "true");
      feedbackContato.className = "contato-feedback erro";
      feedbackContato.textContent = campoVazio
        ? "Preencha todos os campos obrigatórios."
        : "Digite um endereço de e-mail válido.";
      campoInvalido.focus();
      return;
    }

    feedbackContato.className = "contato-feedback sucesso";
    feedbackContato.textContent =
      "Formulário validado com sucesso. Como este é um projeto demonstrativo, a mensagem não foi enviada.";
    formularioContato.reset();
  });

  camposObrigatorios.forEach((campo) => {
    campo.addEventListener("input", () => {
      if (campo.value.trim()) campo.removeAttribute("aria-invalid");
    });
  });
}