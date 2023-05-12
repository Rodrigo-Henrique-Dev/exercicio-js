/*
    21 - Faça um programa que peça um número inteiro e determine se ele é ou não um número primo. Um número primo é aquele que é divisível somente por ele mesmo e por 1.
*/

const numero = parseInt(prompt("Escreva um Numero Inteiro : "))
let Primo = true
for (let i = 2; i < numero; i++) {
    for (let divisor = 2; divisor < numero; divisor++) {
        if (numero % divisor === 0) {
            Primo = false
        }
    }
}

if (Primo) {
    console.log(`O numero ${numero}, é Primo `)
} else {
    console.log(`O numero ${numero}, nao é Primo `)
}