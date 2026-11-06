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
