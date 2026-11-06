const musica = new Audio("audio/musica-natal.mp3");
musica.loop = true;
musica.volume = 0.3;

const botaoMusica = document.getElementById("btn-musica");

botaoMusica.addEventListener("click", async () => {
  if (musica.paused) {
    try {
      await musica.play();
      botaoMusica.textContent = "Pausar música";
    } catch (erro) {
      console.error("Não foi possível reproduzir a música natalina.", erro);
      botaoMusica.textContent = "Áudio indisponível";
    }
  } else {
    musica.pause();
    botaoMusica.textContent = "Tocar música";
  }
});

function tocarSino() {
  const som = new Audio("audio/sino.mp3");
  som.volume = 0.5;
  som.play().catch((erro) => {
    console.error("Não foi possível reproduzir o som de sino.", erro);
  });
}




const campoBusca = document.getElementById("busca");
const seletorCategoria = document.getElementById("categoria");
const contador = document.getElementById("contador");
function filtrar() {
  const texto = campoBusca.value.toLowerCase();
  const categoria = seletorCategoria.value;
  const resultado = produtos.filter((p) => {
    const combinaNome = p.nome.toLowerCase().includes(texto);
    const combinaCategoria = categoria === "todas" || p.categoria === categoria;
    return combinaNome && combinaCategoria;
  });
  mostrarProdutos(resultado);
  contador.textContent = `Mostrando ${resultado.length} de ${produtos.length} produtos`;
}
campoBusca.addEventListener("input", filtrar);
seletorCategoria.addEventListener("change", filtrar);



let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

function adicionarAoCarrinho(id) {
  const produto = produtos.find((p) => p.id === id);
  if (!produto) {
    console.error(`Produto com id ${id} não encontrado.`);
    return;
  }

  carrinho.push(produto);
  localStorage.setItem("carrinho", JSON.stringify(carrinho));
  atualizarCarrinho();
}

function atualizarCarrinho() {
  const total = carrinho.reduce((soma, p) => soma + p.preco, 0);
  document.querySelectorAll("[data-qtd-carrinho]").forEach((contador) => {
    contador.textContent = carrinho.length;
  });
  document.getElementById("total-carrinho").textContent = formatarPreco(total);
}

document
  .getElementById("lista-produtos")
  .addEventListener("click", (evento) => {
    if (evento.target instanceof Element) {
      const botao = evento.target.closest(".btn-comprar");
      if (botao) {
        adicionarAoCarrinho(Number(botao.dataset.id));
        tocarSino();
      }
    }
  });

document.getElementById("limpar-carrinho").addEventListener("click", () => {
  carrinho = [];
  localStorage.setItem("carrinho", JSON.stringify(carrinho));
  atualizarCarrinho();
});

atualizarCarrinho();




const florestaLonge = document.querySelector(".parallax-floresta-distante");
const florestaProxima = document.querySelector(".parallax-floresta-proxima");
const papaiNoelTreno = document.querySelector(".parallax-papai-noel");
const camadasParallax = [florestaLonge, florestaProxima, papaiNoelTreno].filter(
  Boolean,
);
const secaoParallax = document.querySelector(".parallax-natal");
const palcoParallax = document.querySelector(".parallax-palco");
const movimentoReduzido = window.matchMedia("(prefers-reduced-motion: reduce)");
let atualizacaoAgendada = false;

function atualizarParallax() {
  const inicioDaCena =
    secaoParallax.getBoundingClientRect().top + window.scrollY;
  const distanciaDaCena = Math.max(
    0,
    secaoParallax.offsetHeight - palcoParallax.offsetHeight,
  );
  const rolagemNaCena = Math.min(
    distanciaDaCena,
    Math.max(0, window.scrollY - inicioDaCena),
  );

  camadasParallax.forEach((camadaParallax) => {
    const velocidadeParallax = Number(camadaParallax.dataset.velocidade);

    if (Number.isFinite(velocidadeParallax)) {
      if (camadaParallax.dataset.eixo === "x") {
        const larguraDisponivel = Math.max(
          0,
          palcoParallax.clientWidth - camadaParallax.offsetWidth - 40,
        );
        const deslocamentoHorizontal = Math.min(
          larguraDisponivel,
          rolagemNaCena * velocidadeParallax,
        );
        camadaParallax.style.transform = `translateX(${deslocamentoHorizontal}px)`;
      } else {
        camadaParallax.style.transform = `translateY(${-rolagemNaCena * velocidadeParallax}px)`;
      }
    }
  });

  atualizacaoAgendada = false;
}

function agendarAtualizacaoParallax() {
  if (!atualizacaoAgendada) {
    window.requestAnimationFrame(atualizarParallax);
    atualizacaoAgendada = true;
  }
}

if (
  camadasParallax.length > 0 &&
  secaoParallax &&
  palcoParallax &&
  !movimentoReduzido.matches
) {
  window.addEventListener("scroll", agendarAtualizacaoParallax, {
    passive: true,
  });
  window.addEventListener("resize", agendarAtualizacaoParallax);
  atualizarParallax();
}




const slides = document.querySelectorAll(".slide");
const slideshow = document.querySelector(".galeria-slideshow");
const contador = document.querySelector(".slides-contador");
const botaoAnterior = document.getElementById("anterior");
const botaoProximo = document.getElementById("proximo");
let atual = 0;

if (slides.length && slideshow && contador && botaoAnterior && botaoProximo) {
  const movimentoReduzido = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;
  let intervalo;

  function mostrarSlide(indice) {
    slides[atual].classList.remove("ativo");
    slides[atual].setAttribute("aria-hidden", "true");
    atual = (indice + slides.length) % slides.length;
    slides[atual].classList.add("ativo");
    slides[atual].setAttribute("aria-hidden", "false");
    contador.textContent = `${atual + 1} de ${slides.length}`;
  }

  function pararIntervalo() {
    window.clearInterval(intervalo);
  }

  function iniciarIntervalo() {
    pararIntervalo();
    if (!movimentoReduzido) {
      intervalo = window.setInterval(() => mostrarSlide(atual + 1), 5000);
    }
  }

  botaoProximo.addEventListener("click", () => {
    mostrarSlide(atual + 1);
  });
  botaoAnterior.addEventListener("click", () => {
    mostrarSlide(atual - 1);
  });
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
