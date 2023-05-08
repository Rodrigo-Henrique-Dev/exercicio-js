/*
    15 - Faça um Programa que peça os 3 lados de um triângulo. O programa deverá informar se os valores podem ser um triângulo. Indique, caso os lados formem um triângulo, se o mesmo é: equilátero, isósceles ou escaleno.
    Dicas:
    Três lados formam um triângulo quando a soma de quaisquer dois lados for maior que o terceiro;
    Triângulo Equilátero: três lados iguais;
    Triângulo Isósceles: quaisquer dois lados iguais;
    Triângulo Escaleno: três lados diferentes;
*/

const lado1 = parseInt(prompt("Escreva o Primeiro lado :") || "")
const lado2 = parseInt(prompt("Escreva o Segundo lado :") || "")
const lado3 = parseInt(prompt("Escreva o Terceiro lado :") || "")
let tipo = ""
if (lado1 + lado2 < lado3 || lado2 + lado3 < lado1 || lado1 + lado3 < lado2) {
    tipo = "Nenhum Triangulo"
}

if (lado1 === lado2 && lado2 === lado3) {
    tipo = "Equilátero"
}

if (lado1 === lado2 && lado1 + lado2 >= lado3 || lado2 === lado3 && lado2 + lado3 >= lado1 || lado1 === lado3 && lado1 + lado3 >= lado2) {
    tipo = "Isósceles"
}

if (lado1 !== lado2 && lado2 !== lado3 && lado1 !== lado3) {
    tipo = "Escaleno"
}

console.log(`O tipo do Triangulo Formado é : ${tipo}`)
