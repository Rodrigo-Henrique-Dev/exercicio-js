/*   
    14 - Faça um programa que peça 10 números inteiros, calcule e mostre a quantidade de números pares e a quantidade de números impares.
*/

let contador = 1
let pares = 0
let impares = 0

while (contador <= 10) {
    let numeros = parseInt(prompt("Escreva 10 Numeros Inteiros : "))
    numeros++
    if (numeros % 2 === 0) {
        numeros = pares
        pares++
    } else {
        numeros = impares
        impares++
    }
}

alert(`A quantidade de numeros Pares é : ${pares}`)
alert(`A quantidade de numeros Impares é : ${impares}`)