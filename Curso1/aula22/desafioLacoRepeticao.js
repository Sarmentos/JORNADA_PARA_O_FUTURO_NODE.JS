// contar quantos numeros pares e quantos numeros impares existem entre 0 e 100

let totalNumeroPares = 0;
let totalNumeroImpares = 0;

// laço de repedicao 

for (let i = 0; i <= 100; i++) {
    if (i % 2 === 0) {
        totalNumeroPares++;
    } else {
        totalNumeroImpares++;
    }
}

console.log(`Total de números pares: ${totalNumeroPares}`);
console.log(`Total de números ímpares: ${totalNumeroImpares}`);

let y = 0;
do{
    if (y % 2 === 0) {
        totalNumeroPares++;
    }else {
        totalNumeroImpares++;
    }
}while (y <= 100);

let x = 0;

while (x <= 100) {
    if (x % 2 === 0) {
        totalNumeroPares++;
    }else {
        totalNumeroImpares++;
    }
    x++;
}
