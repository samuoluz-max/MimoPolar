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
setInterval(() => mostrarSlide(atual + 1), 5000); // troca a cada 5 segundos
mostrarSlide(0);

const camadas = document.querySelectorAll("[data-velocidade]");
window.addEventListener("scroll", () => {
  const rolagem = window.scrollY;
  camadas.forEach((camada) => {
    const velocidade = camada.dataset.velocidade;
    camada.style.transform = `translateY(${rolagem * velocidade}px)`;
  });
});

const musica = new Audio("audio/musica-natal.mp3");
musica.loop = true; // repete sem parar
musica.volume = 0.3; // volume baixo (vai de 0 a 1)
const botaoMusica = document.getElementById("btn-musica");
botaoMusica.addEventListener("click", () => {
if (musica.paused) {
musica.play();
botaoMusica.textContent = "Pausar música";
} else {
musica.pause();
botaoMusica.textContent = "Tocar música";
}
});
function tocarSino() { // efeito sonoro curtinho, ex.: ao adicionar no carrinho
const som = new Audio("audio/sino.mp3");
som.volume = 0.5;
som.play();

function atualizarContagem() {
const agora = new Date();
let natal = new Date(agora.getFullYear(), 11, 25); // mês 11 = dezembro!
if (agora > natal) natal = new Date(agora.getFullYear() + 1, 11, 25);
const falta = natal - agora; // diferença em milissegundos
const dias = Math.floor(falta / (1000 * 60 * 60 * 24));
const horas = Math.floor(falta / (1000 * 60 * 60)) % 24;
const minutos = Math.floor(falta / (1000 * 60)) % 60;
const segundos = Math.floor(falta / 1000) % 60;
document.getElementById("contagem").textContent =
`${dias}d ${horas}h ${minutos}min ${segundos}s para o Natal`;
}
setInterval(atualizarContagem, 1000);
atualizarContagem();
