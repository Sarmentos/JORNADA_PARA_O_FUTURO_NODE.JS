import fs from 'fs';
import trataErros from '../err/funcoesErro.js';
import { contaPalavras } from '../index.js';

const texto = process.argv;
const link = texto[2];

fs.readFile(link, 'utf-8', (err, data) => {
    try {
        if (err) throw err;
        contaPalavras(data);
    } catch (err) {
        trataErros(err);
    }
});