console.log(`Trabalhando com listas`);


const listaDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
    `Minas Gerais`,
    
);
console.log(listaDestinos);

listaDestinos.push(`Santa Catarina`);

/*listaDestinos.forEach(e => {
    console.log(e);
});*/

listaDestinos.splice(2,1);
console.log(listaDestinos);
console.log(listaDestinos[2]);

