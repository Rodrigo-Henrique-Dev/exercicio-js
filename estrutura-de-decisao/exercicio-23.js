/*
    23 - Faça um Programa que peça um número e informe se o número é inteiro ou decimal. Dica: utilize uma função de arredondamento.
*/

let numero = parseFloat(prompt("Escreva um numero inteiro ou decimal : "))
let calculo = numero % 1
let resposta = ""

if (calculo !== 0) {
    resposta = "decimal"
} else {
    resposta = "inteiro"
}

console.log(`O numero ${numero} é : ${resposta}`)