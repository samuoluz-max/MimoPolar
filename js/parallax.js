const cena = document.querySelector(".parallax-natal");
const palco = document.querySelector(".parallax-palco");
const camadas = document.querySelectorAll(".parallax-natal [data-velocidade]");
const movimentoReduzido = window.matchMedia("(prefers-reduced-motion: reduce)");

if (cena && palco && !movimentoReduzido.matches) {
  let quadroAgendado = false;

  const atualizarParallax = () => {
    const distancia = Math.max(1, cena.offsetHeight - palco.offsetHeight);
    const progresso = Math.max(
      0,
      Math.min(1, -cena.getBoundingClientRect().top / distancia),
    );

    camadas.forEach((camada) => {
      const velocidade = Number(camada.dataset.velocidade);

      if (camada.dataset.eixo === "x") {
        const deslocamento = Number(camada.dataset.deslocamento);
        const temDeslocamento = Number.isFinite(deslocamento);
        const percurso = temDeslocamento
          ? deslocamento
          : Math.max(0, palco.clientWidth - camada.getBoundingClientRect().width - 40);
        const movimentoHorizontal = temDeslocamento
          ? progresso * percurso
          : progresso * percurso * velocidade;
        const movimentoVertical = temDeslocamento ? 0 : -70;
        camada.style.transform = `translate3d(${movimentoHorizontal}px, ${progresso * movimentoVertical}px, 0)`;
      } else {
        camada.style.transform = `translate3d(0, ${-progresso * distancia * velocidade}px, 0)`;
      }
    });

    quadroAgendado = false;
  };

  const agendarAtualizacao = () => {
    if (!quadroAgendado) {
      window.requestAnimationFrame(atualizarParallax);
      quadroAgendado = true;
    }
  };

  window.addEventListener("scroll", agendarAtualizacao, { passive: true });
  window.addEventListener("resize", agendarAtualizacao);
  atualizarParallax();
}
