/*
    7 - Faça um Programa que leia um vetor de 5 números inteiros, mostre a soma, a multiplicação e os números.
*/

let vetor = []
let soma = 0
let multiplicacao = 0
for (let i = 0; i < 5; i++) {
    const numero = parseInt(prompt("Escreva um Numero : "))
    soma = soma + numero
    multiplicacao = soma * numero
    vetor.push(numero)
}
console.log(`a soma é : ${soma}\n` +
    `a multiplicacao é : ${multiplicacao}\n` +
    `Os numeros sao : ${vetor}`)