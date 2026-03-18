// Produto
//  Camiseta, caneca, lapis
function Produto(nome, preco){
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.aumento = function(quantia){
    this.preco += quantia;
};

Produto.prototype.desconto = function(quantia){
    this.preco -= quantia;
};

function Camiseta(nome, preco, cor){
    Produto.call(this,nome,preco);
    this.cor = cor;
}

Camiseta.prototype = Object.create(Produto.prototype);
Camiseta.prototype.constructor = Camiseta;

Camiseta.prototype.personalizarNome = function(nome){
    this.nome = nome;
}

function Caneca(nome, preco,material){
    Produto.call(this, nome, preco);
    this.material = material;
}

Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype = Object.create(Camiseta.prototype);

Caneca.prototype.mudarMaterial = function(novoNome){
    this.material = novoNome;
};

const produto = new Produto('Gen', 111);
const camiseta = new Camiseta('Regata', 7.5, 'Preta');
const caneca = new Caneca('Flu', 12.5, 'Porcelana');
console.log(produto);
console.log(camiseta);
console.log(caneca);