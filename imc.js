
const calcular = document.getElementById("btn-calcular");

calcular.addEventListener("click",CalculaIMC);

function CalculaIMC()
{
const nome = document.getElementById("nome").value
const altura = document.getElementById('altura').value
const peso = document.getElementById("peso").value
const resultado = document.getElementById("Div-Resultado");


if(nome != "" && altura != "" && peso != ""){
    const valorIMC = (peso / (altura*altura)).toFixed(1);
    var valorIndicado;

    if(valorIMC < 18.5){
    valorIndicado = "Magreza";
    }

    else if(valorIMC >= 18.5 && valorIMC <= 24.9){
    valorIndicado = "Normal";
    }

    else if(valorIMC >= 25.0 && valorIMC <= 29.9){
    valorIndicado = "Sobrepeso";
    }

    else if(valorIMC >= 30.0 && valorIMC <= 39.9){
    valorIndicado = "Obesidade";
    }

    else{
    valorIndicado = "Obesidade Grave";
    }

    resultado.textContent = "Seu IMC "+nome+" é "+valorIMC +" . Seu IMC indica "+valorIndicado;
}
else{
   alert("Campos incompletos");
}

}