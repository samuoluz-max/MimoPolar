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
