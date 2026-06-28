/*
2. Saudação de acordo com a hora
Crie uma variável horaAtual. Se estiver entre 6 e 12, 
mostre "Bom dia"; entre 12 e 18, "Boa tarde";
 caso contrário, "Boa noite".
*/

const horaAtual = 14;

if(horaAtual >= 6 && horaAtual < 12){
    console.log("Bom dia");
}else if(horaAtual >= 12 && horaAtual < 18){
    console.log("Boa tarde");
}else{
    console.log("Boa noite");
}