/*
    22 - Faça um Programa que peça um número inteiro e determine se ele é par ou impar. Dica: utilize o operador módulo (resto da divisão).
*/

const numero = parseInt(prompt("Escreva um numero inteiro : "))
let resposta = ""
if (numero % 2 !== 0) {
    resposta = "Impar"
} else {
    resposta = "Par"
}

console.log(`O numero ${numero} é : ${resposta}`)