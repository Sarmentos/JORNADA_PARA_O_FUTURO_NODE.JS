function calcular(num1, num2, operacao) {
    return operacao(num1, num2);
}

function somar(a, b) {
    return a + b;
}

function dividir(a, b) {
    return a / b;
}

const resultadoSoma = calcular(3,8, somar); // soma e um callback
console.log("Resultado da soma: " + resultadoSoma);

const resultadoDivisao = calcular(32,8, dividir); // divisão e um callback
console.log("Resultado da divisão: " + resultadoDivisao);