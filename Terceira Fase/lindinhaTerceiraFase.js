var segundaFase = parseInt( prompt("Macaco Louco = 1\n Coringa = 2"));


//Estrutura de repeticao

while(true){
    if(segundaFase === 1 || segundaFase ===2 ){
        break;
    }
    else{
        alert ("O jogo só aceita resposta nos valores numéricos 1 e 2.");
        segundaFase = parseInt( prompt("Macaco Louco = 1\n Coringa = 2"));
    }
}


function fase (segundaFase)
{
    if(segundaFase === 1)
{document.write(
    `   
    <a href="../Quarta Fase/lindinhaQuartaFase.html"> <p> Qual arma do crime? </p> </a>
    `
)}

else {
    document.write(`
        <p> Game Over </p>
    `)
}
}

fase(segundaFase)
