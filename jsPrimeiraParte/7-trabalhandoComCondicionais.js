console.log("Trabalhando com condicionais");

const listaDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
    `Minas Gerais`,

);
console.log(listaDestinos);

const idadeComprador = 20;
const estaAcompanhado = false;
const temPassagem = true;


if (estaAcompanhado || idadeComprador >= 18) {

    console.log("Compra efetuada");
    listaDestinos.splice(2, 1);

}
else {
    console.log("Menor de idade não está acompanhada, não pode comprar");
}
console.log("\n");
console.log("Embarque: ");
if(idadeComprador >= 18 && temPassagem ){
    console.log("Boa viagem");
}else{
    console.log("Você não pode embarcar");
}

console.log(listaDestinos); 