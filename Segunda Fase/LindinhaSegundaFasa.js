var primeiraFase = parseInt( prompt("Na prefeitura = 1\n No circo = 2"));


//Estrutura de repeticao

while(true){
    if(primeiraFase === 1 || primeiraFase ===2 ){
        break;
    }
    else{
        alert ("O jogo só aceita resposta nos valores numéricos 1 e 2.");
        primeiraFase = parseInt( prompt("Na prefeitura = 1\n No circo = 2"));
    }
}


function fase (primeiraFase)
{
    if(primeiraFase === 1)
{document.write(
    `   
    <a href="../Terceira Fase/lindinhaTerceiraFase.html"> <p> Quem matou a Senhorita Belo? </p> </a>
    `
)}

else {
    document.write(`
        <p> Game Over </p>
    `)
}
}

fase(primeiraFase)
