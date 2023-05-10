/* 
    18 - Faça um programa que, dado um conjunto de N números, determine o menor valor, o maior valor e a soma dos valores.
*/

const quantidade = parseInt(prompt("Escreva quantos Numeros deseja Ler : "))
let maior = 0
let menor = 0
let soma = 0

for (let i = 0; i < quantidade; i++) {
    const numero = parseInt(prompt(`Escreva um Numero : `))
    if (maior === 0) {
        maior = numero
    }

    if (menor === 0) {
        menor = numero
    }

    if (numero > maior) {
        maior = numero
    }

    if (numero < menor) {
        menor = numero
    }

    soma = soma + numero
}
console.log(`A soma 'é : ${soma}\n` +
    `O maior numero é : ${maior}\n` +
    `O menor numero é : ${menor}`
)