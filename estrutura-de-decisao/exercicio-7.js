/*
    7 - Faça um Programa que leia três números e mostre o maior e o menor deles.
*/

const numero1 = parseInt(prompt(" Escreva o Primeiro Numero : "))
const numero2 = parseInt(prompt(" Escreva o Segundo Numero : "))
const numero3 = parseInt(prompt(" Escreva o Terceiro Numero : "))
let maior = numero1
let menor = numero1

if (maior < numero2) {
    maior = numero2
}

if (maior < numero3) {
    maior = numero3
}

if (menor > numero2) {
    menor = numero2
}

if (menor > numero3) {
    menor = numero3
}

console.log(`O maior numero é o : ${maior}` +
    `O menor numero é o : ${menor}`)