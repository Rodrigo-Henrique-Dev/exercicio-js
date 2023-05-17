/*
    7 - Faça um Programa que leia um vetor de 5 números inteiros, mostre a soma, a multiplicação e os números.
*/

let mostra = ""
let soma = 0
let vetor = null
for (let i = 0; i < 5; i++) {
    vetor = parseInt(prompt("Escreva um Numero : "))
    soma = soma + vetor
    mostra = mostra + " - " + vetor.toString()
}
let multiplicação = vetor * 5

console.log(`Os numeros sao : ${mostra}\n` +
    `A soma dos Numeros sao : ${soma}\n` +
    `A multiplicacao é : ${multiplicação}`
)