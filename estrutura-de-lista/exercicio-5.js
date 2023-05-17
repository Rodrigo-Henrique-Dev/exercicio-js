/*
    5 - Faça um Programa que leia 20 números inteiros e armazene-os num vetor. Armazene os números pares no vetor PAR e os números IMPARES no vetor impar. Imprima os três vetores.
*/

let par = []
let impar = []
let numeros = []
for (let i = 0; i < 20; i++) {
    let numero = parseInt(prompt("Escreva um Numero : "))
    if (numero % 2 === 0) {
        par.push(numero)
        numeros.push(numero)
    } else {
        impar.push(numero)
        numeros.push(numero)
    }
}



console.log(`Numeros Pares : ${par}\n` +
    `Numeros Impares : ${impar}\n` +
    `Numeros : ${numeros}`
)

