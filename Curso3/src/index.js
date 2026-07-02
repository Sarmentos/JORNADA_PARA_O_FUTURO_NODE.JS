const fs = require('fs');

const texto = process.argv;
const link = texto[2];

fs.readFile(link, 'utf-8', (err, data) => {
    quebraEmParagrafos(data);
    // verificaPalavresDuplicadas(data);
});


// criar um array com as palavras do texto
// contar as ocorrências 
//montar um objeto com o resultado

function quebraEmParagrafos(texto){
    const paragrafos = texto.toLowerCase().split('\n');
    const contagem = paragrafos.flatMap((paragrafo) => {
        if(!paragrafo) return [];
        return [verificaPalavresDuplicadas(paragrafo)];
    })
    // console.log(paragrafos);
    console.log(contagem);
}

function limpaPalavras(palavra){
    return palavra.replace(/[.,\/#!$%^&*;:{}=\-_`~()]/g, '');
}

function verificaPalavresDuplicadas(texto){
    const palavras = texto.split(' ');
    const contagem = {};
    palavras.forEach(palavra => {
        if(palavra.length >= 3) {
            const palavraLimpa = limpaPalavras(palavra);
            contagem[palavraLimpa] = (contagem[palavraLimpa] || 0) + 1;
        }
    });
    return contagem;
}