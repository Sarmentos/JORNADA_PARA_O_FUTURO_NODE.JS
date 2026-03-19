const falar = {
    falar(){
     console.log(`${this.nome} está falando.`);
    },
};

const comer = {
    comer(){
     console.log(`${this.nome} está comendo.`);
    },
};

const beber = {
    beber(){
     console.log(`${this.nome} está bebendo.`)
    },
};

const pessoasPrototype = {...falar, ...comer, ...beber};

function CriaPessoa(nome, sobrenome){
    return Object.create(pessoasPrototype,{
        nome:{value: nome},
        sobrenome: {value: sobrenome}
    });
}

const p1 =  CriaPessoa('Lucas','Sarmento');
const p2 =  CriaPessoa('Maria','Sarmento');
console.log(p1);
console.log(p2);