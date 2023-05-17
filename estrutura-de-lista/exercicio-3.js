/*
    3 - Faça um Programa que leia 4 notas, mostre as notas e a média na tela.
*/
let media = 0
let notas = []
for (let i = 0; i < 4; i++) {
    notas.push(parseInt(prompt("Escreva uma das Notas : ")))
    media = notas / 4
}
console.log(`Suas notas foram  ${notas}\n` +
    `Sua media foi de ${media}`)


/*
Quando Feito a Media, da o Elemento NaN
Como passar de Object para Number 
*/