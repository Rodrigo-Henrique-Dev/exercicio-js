/*
    9 - Faça um Programa que leia um vetor A com 10 números inteiros, calcule e mostre a soma dos quadrados dos elementos do vetor.
*/

let vetor = []
let soma = 0
for (let i = 0; i < 10; i++) {
    const numero = parseInt(prompt("Escreva um Numero Inteiro : "))
    const quadrado = Math.pow(numero, numero)
    soma = soma + quadrado
    vetor.push(soma)
}
console.log({ soma: soma, vetor: vetor })