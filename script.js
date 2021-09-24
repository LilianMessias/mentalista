var numeroSecreto = parseInt(Math.random() * 11); // gerar um numero aleatório
// OBS: parseInt(Math.random() * 11 = vai gerar um numero aleatorio multiplicar por 11 e converter por um numero inteiro

function Chutar() {
    var elementoResultado = document.getElementById("resultado")
    var chute = parseInt(document.getElementById("valor").value) // value = só o valor do input.  parseInt = converte par numeros inteiros
    console.log(chute);
    if (chute == numeroSecreto){
        elementoResultado.innerHTML= "Você Acertou!";
    }else if (chute > 10 || chute < 0){
        elementoResultado.innerHTML = "Digite um numero de 0 a 10";
    } else {      
        elementoResultado.innerHTML = "Você eRROOUU";
    }
}