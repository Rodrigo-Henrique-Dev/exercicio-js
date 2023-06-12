/*
    8 - Faça um programa que leia 5 números e informe a soma e a média dos números.
*/

let notas = 0
for (let i = 1; i <= 5; i++) {
    let nota = parseInt(prompt(`Escreva Sua Nota ${i} : `))
    notas = notas + nota
}
let media = notas / 5

console.log(`A media das 5 Notas foi ${media}`)