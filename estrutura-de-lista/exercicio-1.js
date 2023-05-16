/*
    1 - Faça um Programa que leia um vetor de 5 números inteiros e mostre-os.
*/

let mostra = ""
for (let i = 0; i < 5; i++) {
    const numeros = parseInt(prompt("Escreva um Numero"))
    mostra = mostra + " - " + numeros.toString()
}
console.log(mostra)