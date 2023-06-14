/*
    24 - Faça um programa que calcule o mostre a média aritmética de N notas.
*/

const notas = parseInt(prompt("Escreva o numero de Notas que deseja Calcular "))
let media = 0
let soma = 0
for (let i = 1; i <= notas; i++) {
    let nota = parseInt(prompt(`Escreva sua ${i} Nota : `))
    soma = soma + nota
    media = soma / notas
}
console.log(`Sua media foi de ${media}`)