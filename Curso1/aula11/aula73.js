const protuto = {nome: 'Caneca', preco: 1.8};
Object.defineProperty(protuto, 'nome', {
    writable: false,
    configurable: false,
    value: 'Qualquer outra coisa'
});

console.log(Object.getOwnPropertyDescriptor(protuto,'nome'));

// protuto.nome = 'Outra coisa';
// delete protuto.preco;

console.log(protuto);

// protuto.nome = 'Copo';
// copo.preco = 2.5;
// console.log(protuto);
// console.log(copo);
