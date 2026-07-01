function saudacao(){
    console.log("Blz?");
}

setTimeout(saudacao, 2000); // 2 segundos

let contador = 0;
const intervalo = setInterval(function(){
    contador++;
    console.log("Contador: " + contador);
    if(contador === 5){
        clearInterval(intervalo);
        console.log("Contador finalizado!");
    }
}, 1000); // 1 segundo