const produto = {
  nome: "Mouse",
  preco: 80
};

const mostrarProduto = (p) => `Produto: ${p.nome} - Preço: R$ ${p.preco}`;

console.log(mostrarProduto(produto));