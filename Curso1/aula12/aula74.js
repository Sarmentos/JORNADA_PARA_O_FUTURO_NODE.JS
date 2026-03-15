const produto = {nome: 'Produto', preco: 1.8};
// const outraCoisa = {...produto, material: 'Plástico'};
// const outraCoisa = Object.assign({}, produto, {material: 'Plástico'});
// const caneca = {nome : produto.nome, preco: produto.preco, material: 'Plástico'};

// Object.defineProperty(produto, 'nome', {
//     writable: false,
//     configurable: false,
//     value: 'Qualquer outra coisa'
// });

// console.log(produto);
// console.log(caneca);

// outraCoisa.nome = 'Caneca';
// outraCoisa.preco = 2.5;

// console.log(produto);
// console.log(outraCoisa);

console.log(Object.values(produto));
// produto.nome = 'Outra coisa';
// delete produto.nome;
// console.log(produto);