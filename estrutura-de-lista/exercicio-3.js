/*
    3 - Faça um Programa que leia 4 notas, mostre as notas e a média na tela.
*/
let mostra = ""
let soma = 0
for (let i = 0; i < 4; i++) {
    const notas = parseFloat(prompt("Escreva sua Nota : "))
    soma = soma + notas
    if (mostra === "") {
        mostra = notas.toString()
    } else {
        mostra = mostra + " - " + notas.toString()
    }
}
let media = soma / 4
console.log(`as notas fora ${mostra}\n Sua media foi de : ${media}`)