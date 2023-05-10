/*   
    14 - Faça um programa que peça 10 números inteiros, calcule e mostre a quantidade de números pares e a quantidade de números impares.
*/

let n = 1
let p = 0
let i = 0

while (n <= 10) {
    let a = parseInt(prompt("Escreva 10 Numeros Inteiros : "))
    n++
    if (a % 2 === 0) {
        a = p
        p++
    } else {
        a = i
        i++
    }
}

alert(`A quantidade de numeros Pares é : ${p}`)
alert(`A quantidade de numeros Impares é : ${i}`)