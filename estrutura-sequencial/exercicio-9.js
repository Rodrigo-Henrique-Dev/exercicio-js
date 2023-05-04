//  9 - Faça um Programa que peça a temperatura em graus Fahrenheit, transforme e mostre a temperatura em graus Celsius.
//C = 5 * ((F-32) / 9).

const f = parseInt(prompt("Escreva a temperatura que deseja converter em Fahrenheit "))
const c = 5 * ((f - 32) / 9)

console.log(`A temperatura de ${f} Fahrenheit convertida para Celsius é de : ${c} Graus Celsius `)