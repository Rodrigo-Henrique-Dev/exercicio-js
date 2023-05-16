/*
    2 - Faça um Programa que leia um vetor de 10 números reais e mostre-os na ordem inversa.
*/
let indice = 1
let mostra = ""
let numero = 0
for (let i = 0; i < 10; i++) {
    numero = parseFloat(prompt("Escreva um numero Real :"))
}
indice = numero
while (indice >= 1) {
    mostra = mostra + " - " + indice.toString()
    indice -= 1
}
console.log(mostra)