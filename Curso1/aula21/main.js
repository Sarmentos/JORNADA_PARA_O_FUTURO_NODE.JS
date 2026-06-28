let cont  = 1;

while (cont <= 10) {
    console.log(`Número atual: ${cont}`);
    cont++;
}

let numero = 0;

do {
    console.log(`Número atual: ${numero}`);
    numero++;
} while (numero <= 20);

let contador1 = 0;

while (contador1 <= 15) {
    if (contador1 % 2 === 0) {
        console.log(`Número par: ${contador1}`);
    }
    contador1++;
}

let contador2 = 0;

do{
    if (contador2 % 2 > 0) {
        console.log(`Número ímpar: ${contador2}`);
    }
    contador2++;
}while (contador2 <= 15);