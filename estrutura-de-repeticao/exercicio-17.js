/*
    17 - Faça um programa que calcule o fatorial de um número inteiro fornecido pelo usuário. Ex.: 5!=5.4.3.2.1=120
*/

const numero = parseInt(prompt("Escreva o Numero que Deseja Fatorar : ") || "")
let resultado = 1
let i = 1

while (i <= numero) {
    resultado *= i
    i += 1
}
console.log(`O Fatorial do numero ${numero} é : ${resultado}`)