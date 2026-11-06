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
