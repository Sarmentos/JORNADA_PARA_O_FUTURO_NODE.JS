const saudacao = (nome) =>{
    console.log("Olá, " + nome + "! Bem-vindo ao curso.");
}

saudacao("João");


function mostraNome() { 

console.log(this.nome); 

} 
 
nome = 'Ana'; // aqui, nome está no escopo global 


mostraNome(); // Resultado: Ana (this refere-se ao escopo global)