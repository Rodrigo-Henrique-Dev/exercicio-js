
/*
    1 - Faça um Programa que peça dois números e imprima o maior deles.
*/

const numero1 = parseInt(prompt(" Escreva o Primeiro Numero : "))
const numero2 = parseInt(prompt(" Escreva o Segundo Numero : "))
let maior = numero1

if (maior < numero2) {
    maior = numero2
}

console.log(`O maior numero é o : ${maior}`)