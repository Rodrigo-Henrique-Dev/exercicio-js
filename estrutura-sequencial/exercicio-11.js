/* 
    11 - Faça um Programa que peça 2 números inteiros e um número real. Calcule e mostre:
    A - O produto do dobro do primeiro com metade do segundo 
    B - A soma do triplo do primeiro com o terceiro.
    C - o terceiro elevado ao cubo.
*/

let inteiro1 = parseInt(prompt("Escreva um Numero Inteiro : "))
let inteiro2 = parseInt(prompt("Escreva um Numero Inteiro : "))
let real = parseFloat(prompt("Escreva um Numero Real : "))

const a = inteiro1 * 2 * (inteiro2 / 2) 
const b = inteiro2 = (inteiro1 * 3) + real
const c = Math.pow(real, 3)

console.log(`Resposta da Letra A = ${a}`)
console.log(`Resposta da Letra B = ${b}`)
console.log(`Resposta da Letra C = ${c}`)