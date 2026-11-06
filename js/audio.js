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
