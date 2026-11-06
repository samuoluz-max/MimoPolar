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
mostrarProdutos(produtos); // desenha os 50 cards ao abrir a página
