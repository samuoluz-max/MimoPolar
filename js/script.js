// Essa e a parte dos slides.
const slides = document.querySelectorAll(".slide");
let atual = 0;
function mostrarSlide(indice) {
  slides.forEach((s) => s.classList.remove("ativo"));
  atual = (indice + slides.length) % slides.length; // volta ao início/fim
  slides[atual].classList.add("ativo");
}
document
  .getElementById("proximo")
  .addEventListener("click", () => mostrarSlide(atual + 1));
document
  .getElementById("anterior")
  .addEventListener("click", () => mostrarSlide(atual - 1));
setInterval(() => mostrarSlide(atual + 1), 5000);

// Efeito Parallax, por favor adicione e declare a variavel das camadas e dos slides no html por favor.
const camadas = document.querySelectorAll("[data-velocidade]");
window.addEventListener("scroll", () => {
  const rolagem = window.scrollY;
  camadas.forEach((camada) => {
    const velocidade = camada.dataset.velocidade;
    camada.style.transform = `translateY(${rolagem * velocidade}px)`;
  });
});
