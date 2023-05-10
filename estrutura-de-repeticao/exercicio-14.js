/*   
    14 - Faça um programa que peça 10 números inteiros, calcule e mostre a quantidade de números pares e a quantidade de números impares.
*/

let contador = 1
let par = 0
let impar = 0

while (contador <= 10) {
    let numero = parseInt(prompt("Escreva 10 Numeros Inteiros : "))
    contador++
    if (numero % 2 === 0) {
        numero = par
        par++
    } else {
        numero = impar
        impar++
    }
}

alert(`A quantidade de numeros Pares é : ${par}`)
alert(`A quantidade de numeros Impares é : ${impar}`)