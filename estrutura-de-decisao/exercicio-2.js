/*
    2 - Faça um Programa que peça um valor e mostre na tela se o valor é positivo ou negativo.
*/

const numero = parseInt(prompt("Escreva um numero qualquer : "))
let valor = "positivo"
if (numero < 0) {
    valor = "negativo"
}

console.log(`O numero ${numero} é : ${valor}`)