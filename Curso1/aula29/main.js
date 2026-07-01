const numeros = [1, 2, 3, 4, 5];

// numeros.forEach(function(numero) {
    // console.log(numero);
// });
// 
const numerosPares = numeros.filter(function(numero) {
    return numero % 2 === 0;
});
console.log(numerosPares);