const readline = require('readline');

const leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("Bem-vindo ao Quiz de JavaScript!");
console.log("Responda com as letras corretas: a, b ou c.\n");

let acertos = 0;

leitor.question('1) Qual palavra usamos para criar uma função?\n a) function\n b) func\n c) def\n', (resposta1) => {
    if (resposta1.toLowerCase() === 'a') {
        acertos++;
    }
    leitor.question('2) Qual dessas é uma estrutura de repetição?\n a) for\n b) while\n c) if\n', (resposta2) => {
        if (resposta2.toLowerCase() === 'a') {
            acertos++;
        }
        leitor.question('3) Qual valor é considerado "falsy" em JavaScript?\n a) 0\n b) 1\n c) "texto"\n', (resposta3) => {
            if (resposta3.toLowerCase() === 'a') {
                acertos++;
            }
            console.log(`\nVocê acertou ${acertos} de 3 perguntas.`);
            leitor.close();
        });
    });
});