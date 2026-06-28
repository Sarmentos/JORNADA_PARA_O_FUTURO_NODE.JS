for(let i = 0; i <= 5; i++){
    console.log(i);
}

for(let i = 0; i <= 15; i++){
    if(i % 2 === 0){
        console.log(i);
    }   
}

for(let i = 0; i <= 15; i++){
    if(i % 2 > 0){
        console.log(i);
    }   
}

const palavra = 'javascript';

// palavra.length indica quantos caracteres uma string possui
// palavra[i] - pega a letra da posição indicada

for(let i = 0; i < palavra.length; i++){
    console.log(palavra[i]);
}