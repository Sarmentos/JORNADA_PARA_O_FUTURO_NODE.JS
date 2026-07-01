const readline = require('readline');

const leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

leitor.question('Digite seu nome: ' ,(name)=>{
    console.log(`Olá, ${name}! Bem-vindo ao curso.`);

    leitor.question('Digite sua idade: ', (age) => {
        if(age >= 18){
            console.log(`Você é maior de idade.`);
        } else {
            console.log(`Você não é maior de idade.`);
        }
        leitor.close();
    });
});