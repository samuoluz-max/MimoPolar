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
        const largura = camada.getBoundingClientRect().width;
        const percurso = Math.max(0, palco.clientWidth - largura - 40);
        camada.style.transform = `translate3d(${progresso * percurso * velocidade}px, ${-progresso * 70}px, 0)`;
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
