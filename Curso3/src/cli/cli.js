import fs from 'fs';
import trataErros from '../err/funcoesErro.js';
import { contaPalavras } from '../index.js';

const texto = process.argv;
const link = texto[2];
const endereco = texto[3];

fs.readFile(link, 'utf-8', (err, data) => {
    try {
        if (err) throw err;
       const resultado = contaPalavras(data);
       criaESalvaArquivo(resultado, endereco);
    } catch (err) {
        trataErros(err);
    }
});

async function criaESalvaArquivo(listaPalavra,endereco) {
    const arquivo = `${endereco}/resultado.txt`;
    const textoPalavras = JSON.stringify(listaPalavra, null, 2);
    try{
        await fs.promises.writeFile(arquivo, textoPalavras);
        console.log(`Arquivo salvo em: ${arquivo}`);
    }catch(err){
        throw Error;
    }
}