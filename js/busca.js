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
