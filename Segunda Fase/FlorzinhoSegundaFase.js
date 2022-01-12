var primeiraFase = parseInt( prompt("Princesa Mais Grana = 1\n Coyote = 2"));


//Estrutura de repeticao

while(true){
    if(primeiraFase === 1 || primeiraFase ===2 ){
        break;
    }
    else{
        alert ("O jogo só aceita resposta nos valores numéricos 1 e 2.");
        primeiraFase = parseInt( prompt("Princesa Mais Grana = 1\n Coyote = 2"));
    }
}


function fase (primeiraFase)
{
    if(primeiraFase === 1)
{document.write(
    `   
    <a href="../Terceira Fase/florzinhaTerceiraFase.html"> <p> Qual foi o motivo? </p> </a>
    `
)}

else {
    document.write(`
        <p> Game Over </p>
    `)
}
}

fase(primeiraFase)
