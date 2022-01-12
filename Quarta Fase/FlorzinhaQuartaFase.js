var terceiraFase = parseInt( prompt("Pedrada = 1\n Fogo na floresta = 2"));


//Estrutura de repeticao

while(true){
    if(terceiraFase === 1 || terceiraFase ===2 ){
        break;
    }
    else{
        alert ("O jogo só aceita resposta nos valores numéricos 1 e 2.");
        terceiraFase = parseInt( prompt("Pedrada = 1\n Fogo na floresta = 2"));
    }
}


function fase (terceiraFase)
{
    if(terceiraFase === 2)
{document.write(
    `   
     <p> Parabéns, você conseguiu desvendar o mistério! </p>
    `
)}

else {
    document.write(`
        <p> Game Over </p>
    `)
}
}

fase(terceiraFase)
