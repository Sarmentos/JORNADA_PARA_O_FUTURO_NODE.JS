const frutas = [ 'Uva', 'Banana', 'Maçã', 'Laranja', 'Pera' ];
// Uva = 0
// Banana = 1
// Maçã = 2
// Laranja = 3
// Pera = 4

console.log(frutas);
// console.log('Primeira fruta:',frutas[0]);
// console.log('Última fruta:',frutas[4]);

// console.log('Total de frutas:', frutas.length);

// frutas.push('Abacaxi');

// console.log('Total de frutas:', frutas.length);

// console.log('Última fruta:',frutas[frutas.length - 1]);

// frutas.splice(1,2);
// console.log('Frutas restantes:',frutas);

for (let i = 0; i < frutas.length; i++) {
    console.log('Indice:', i);
    console.log(frutas[i]);
}

frutas.forEach((fruta, indice) => {
    console.log('Indice:', indice);
    console.log(fruta);
});

for (const fruta of frutas) {
    console.log(fruta);
}