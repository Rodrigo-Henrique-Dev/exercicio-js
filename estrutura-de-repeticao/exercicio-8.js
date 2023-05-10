/*
    8 - Faça um programa que leia 5 números e informe a soma e a média dos números.
*/

let soma = 0
for (let i = 0; i < 5; i++) {
    let notas = parseFloat(prompt("Escreva uma Nota : "))
    soma = soma + notas
}

let media = soma / 5

console.log(`A soma dos Numeros é : ${soma}\n` +
    `A media dos Numeros é : ${media}`
)