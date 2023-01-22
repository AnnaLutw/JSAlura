console.log("Trabalhando com loops");

const listaDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
    `Minas Gerais`,

);
console.log(listaDestinos);

const idadeComprador = 20;
const estaAcompanhado = false;
let temPassagem = false;
const destino = "Minas Gerais";

const podeComprar =  (estaAcompanhado || idadeComprador >= 18 == true) ;


let destinoExiste = false;
for(let i = 0;i< listaDestinos.length; i++){

    if(listaDestinos[i] == destino){
        destinoExiste = true;
        break;
    }
}


console.log(`Destino Existe: ${destinoExiste}`);

if(podeComprar && destinoExiste){
    console.log("Boa viagem");
}else{
    console.log("Desculpe tivemos um erro");
}