/**
 
3. Cálculo de IMC
Crie uma função chamada calcularIMC que receba dois parâmetros: peso e altura.
A função deve calcular o IMC utilizando a fórmula:

IMC = peso / (altura * altura)

A função deve retornar o valor do IMC.
Depois, utilize o retorno da função para exibir no console uma mensagem com o resultado.
*/


function calcularIMC(peso, altura) {
    const imc = peso / (altura * altura);
    return imc;
}

const peso = 70; // Peso em kg
const altura = 1.75; // Altura em metros

const resultadoIMC = calcularIMC(peso, altura);
console.log("O seu IMC é: " + resultadoIMC.toFixed(2));