/*
    7 - Faça um programa que leia 5 números e informe o maior número.
*/

let max = null
let numeros = []
for (let contador = 0; contador < 5; contador++) {
    let numero = parseInt(prompt("Escreva um Numero : "))
    numeros.push(numero)
    if (max === null || numero > max) {
        max = numero
    }
}
console.log(typeof (numeros))
console.log(`O maior numero é o : ${max}`)



/* 
    Quando testado no console Math.Max(numeros) le apenas o primeiro numero 
    O Resto sao definidos como NaN
    O Array Numeros é setado como Object
    Variavel Max Quando fora do FOR setada como Undefined
*/