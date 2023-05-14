/*    
    24 - Faça um programa que calcule o mostre a média aritmética de N notas.
*/

const notasQuantidade = parseInt(prompt("Escreva quantas notas deseja calcular : "))
let soma = 0
let media = 0
let numero = 0
for (let i = 0; i < notasQuantidade; i++) {
    numeros = parseInt(prompt("Escreva uma Nota : "))
    soma = soma + numeros
    media = soma / notasQuantidade
}

console.log(`A media de ${notasQuantidade} Notas é : ${media}`)