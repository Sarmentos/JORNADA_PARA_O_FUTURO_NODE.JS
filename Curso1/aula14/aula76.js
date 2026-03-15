// // NEW OBJECT -> Object.prototype
// const objA = {
//     chaveA : 'A'
//     // __proto__: Object.prototype
// };

// const objB = {
//     chaveB : 'B'
//     // __proto__: objA
// };

// const objC = new Object();
// objC.chaveC = 'C';

// Object.setPrototypeOf(objB, objA);
// Object.setPrototypeOf(objC, objB);
// console.log(objB.chaveA); // A
// console.log(objC.chaveB); // B

function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.desconto = function(percentual) {
    this.preco = this.preco - (this.preco * (percentual / 100));
};

Produto.prototype.aumento = function(percentual) {
    this.preco = this.preco + (this.preco * (percentual / 100));
};

const p1 = new Produto('Caneta', 7.99);
const p2 = new Produto('Notebook', 2998.99);


// Literal
const p3 = {
    nome: 'Caderno',
    preco: 27.99
};

Object.setPrototypeOf(p3, Produto.prototype);

const p4 = Object.create(Produto.prototype);
p4.nome = 'Borracha';
p4.preco = 3.99;

p1.desconto(10);
console.log(p1);
p2.aumento(10);
console.log(p2);
p3.aumento(10);
console.log(p3);
p4.desconto(10);
console.log(p4);
