/*
    5 - Faça um Programa que leia 20 números inteiros e armazene-os num vetor. Armazene os números pares no vetor PAR e os números IMPARES no vetor impar. Imprima os três vetores.
*/
let par = ""
let impar = ""
let numero = ""
for (let i = 0; i < 20; i++) {
    numero = parseInt(prompt("Escreva um Numero : "))
    if (numero % 2 === 0) {
        par = par + " - " + numero.toString()
    } else {
        impar = impar + " - " + numero.toString()
    }
}

console.log(`Numeros Pares : ${par}\n Numeros Impares : ${impar}`)

/* 
Como fazer com os Numeros o mesmo que o Par e Impar
*/
