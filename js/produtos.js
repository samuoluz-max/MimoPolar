function formatarPreco(valor) {
  return valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}
function criarCard(produto) {
  return `
<article class="card">
<img src="${produto.imagem}" alt="${produto.nome}" loading="lazy">
<h3>${produto.nome}</h3>
<p>${produto.descricao}</p>
<strong>${formatarPreco(produto.preco)}</strong>
<button class="btn-comprar" data-id="${produto.id}">Adicionar ao carrinho</button>
</article>`;
}
function mostrarProdutos(lista) {
  const area = document.getElementById("lista-produtos");
  area.innerHTML = lista.map(criarCard).join("");
}
mostrarProdutos(produtos);

let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
function adicionarAoCarrinho(id) {
  const produto = produtos.find((p) => p.id === id);
  carrinho.push(produto);
  localStorage.setItem("carrinho", JSON.stringify(carrinho)); // guarda no navegador
  atualizarCarrinho();
}
function atualizarCarrinho() {
  const total = carrinho.reduce((soma, p) => soma + p.preco, 0);
  document.getElementById("qtd-carrinho").textContent = carrinho.length;
  document.getElementById("total-carrinho").textContent = formatarPreco(total);
}
// Os cards são criados pelo JS, então escutamos o clique na ÁREA (delegação de evento)
document
  .getElementById("lista-produtos")
  .addEventListener("click", (evento) => {
    if (evento.target.classList.contains("btn-comprar")) {
      adicionarAoCarrinho(Number(evento.target.dataset.id));
      tocarSino();
    }
  });
atualizarCarrinho();
