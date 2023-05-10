/* 
    19 - Faça um programa que, dado um conjunto de N números, determine o menor valor, o maior valor e a soma dos valores.
    Altere o programa anterior para que ele aceite apenas números entre 0 e 1000.
*/

let quantidade = parseInt(prompt("Escreva quantos Numeros deseja Ler : "))
let maior = 0
let menor = 0
let soma = 0

for (let i = 0; i < quantidade; i++) {
    let numero = parseInt(prompt(`Escreva um Numero : `))
    while (numero < 0 || numero > 1000) {
        numero = parseInt(prompt("Escreva um Numero Valido : (0 ate 1000)"))
    }
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