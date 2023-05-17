/*
    9 - Faça um Programa que leia um vetor A com 10 números inteiros, calcule e mostre a soma dos quadrados dos elementos do vetor.
*/

let soma = 0
for (let i = 0; i < 10; i++) {
    let vetor = parseInt(prompt("Escreva um Numero : "))
    let quadrado = Math.pow(vetor, vetor)
    soma = soma + quadrado
}

console.log(`A soma dos Quadrados dos Vetores da : ${soma}`)
