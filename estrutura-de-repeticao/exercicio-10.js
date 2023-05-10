/*
    10 - Faça um programa que receba dois números inteiros e gere os números inteiros que estão no intervalo compreendido por eles.
*/

let n1 = parseInt(prompt("Escreva um Numero : "))
let n2 = parseInt(prompt("Escreva outro Numero : "))

if (n1 > n2) {
    let box = n1
    n1 = n2
    n2 = box
}

while (n1 <= n2) {
    console.log(n1)
    n1 = n1 + 1
}