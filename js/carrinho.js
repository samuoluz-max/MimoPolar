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
