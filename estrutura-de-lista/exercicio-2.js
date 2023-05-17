/*
    2 - Faça um Programa que leia um vetor de 10 números reais e mostre-os na ordem inversa.
*/

let vetor = []
for (let i = 0; i < 10; i++) {
    vetor.push(prompt("Escreva um Numero : "))

}
let vetorReverso = vetor.reverse()
console.log(vetorReverso)