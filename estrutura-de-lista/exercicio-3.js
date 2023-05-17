/*
    3 - Faça um Programa que leia 4 notas, mostre as notas e a média na tela.
*/
let soma = 0
let media = 0
let notas = []
for (let i = 0; i < 4; i++) {
    const nota = parseFloat(prompt("Escreva uma das Notas : "))
    soma += nota
    notas.push(nota)
}
media = soma / 4

console.log(`Suas notas foram  ${notas}\n` +
    `Sua media foi de ${media}`)


