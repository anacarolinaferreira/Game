var primeiraFase = parseInt( prompt("Magneto = 1\n Gangue Gangrena = 2"));


//Estrutura de repeticao

while(true){
    if(primeiraFase === 1 || primeiraFase ===2 ){
        break;
    }
    else{
        alert ("O jogo só aceita resposta nos valores numéricos 1 e 2.");
        primeiraFase = parseInt( prompt("Magneto = 1\n Gangue Gangrena = 2"));
    }
}


function fase (primeiraFase)
{
    if(primeiraFase === 2)
{document.write(
    `   
    <a href="../Terceira Fase/docinhoTerceiraFase.html"> <p> Porque a gangue matou a professora? </p> </a>
    `
)}

else {
    document.write(`
        <p> Game Over </p>
    `)
}
}

fase(primeiraFase)