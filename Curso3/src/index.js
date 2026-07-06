export function contaPalavras(texto){
    const paragrafos = extraiPalavras(texto);
    const contagem = paragrafos.flatMap((paragrafo) => {
        if(!paragrafo) return [];
        return [verificaPalavresDuplicadas(paragrafo)];
    })
    console.log(contagem);
}

function extraiPalavras(texto){
    return texto.toLowerCase().split('\n');
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