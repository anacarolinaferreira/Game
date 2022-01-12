var segundaFase = parseInt( prompt("Por amor = 1\n Queria todo o dominio da floresta = 2"));


//Estrutura de repeticao

while(true){
    if(segundaFase === 1 || segundaFase ===2 ){
        break;
    }
    else{
        alert ("O jogo só aceita resposta nos valores numéricos 1 e 2.");
        segundaFase = parseInt( prompt("Por amor = 1\n Queria todo o dominio da floresta = 2"));
    }
}


function fase (segundaFase)
{
    if(segundaFase === 2)
{document.write(
    `   
    <a href="../Quarta Fase/FlorzinhaQuartaFase.html"> <p> Qual foi a forma? </p> </a>
    `
)}

else {
    document.write(`
        <p> Game Over </p>
    `)
}
}

fase(segundaFase)
