var segundaFase = parseInt( prompt("Porque a professora reprovou eles = 1\n Preconceito = 2"));


//Estrutura de repeticao

while(true){
    if(segundaFase === 1 || segundaFase ===2 ){
        break;
    }
    else{
        alert ("O jogo só aceita resposta nos valores numéricos 1 e 2.");
        segundaFase = parseInt( prompt("Porque a professora reprovou eles = 1\n Preconceito = 2"));
    }
}


function fase (segundaFase)
{
    if(segundaFase === 1)
{document.write(
    `   
    <a href="../Quarta Fase/DocinhoQuartaFase.html"> <p> Qual arma do crime? </p> </a>
    `
)}

else {
    document.write(`
        <p> Game Over </p>
    `)
}
}

fase(segundaFase)
