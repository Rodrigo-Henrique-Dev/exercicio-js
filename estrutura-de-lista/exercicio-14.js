/*    
    14 - Faça um programa que peça 10 números inteiros, calcule e mostre a quantidade de números pares e a quantidade de números impares.
*/

let par = []
let impar = []
let contadorPar = 0
let contadorImpar = 0
for (let i = 0; i < 10; i++) {
    const numeros = parseInt(prompt("Escreva um Numero : "))
    if (numeros % 2 === 0) {
        par.push(numeros)
        contadorPar++
    } else {
        impar.push(numeros)
        contadorImpar++
    }
}
console.log({ Pares: contadorPar, Impares: contadorImpar })