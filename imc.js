
const calcular = document.getElementById("btn-calcular");

calcular.addEventListener("click",CalculaIMC);

function CalculaIMC()
{
const nome = document.getElementById("nome").value
const altura = document.getElementById('altura').value
const peso = document.getElementById("peso").value
const resultado = document.getElementById("Div-Resultado");