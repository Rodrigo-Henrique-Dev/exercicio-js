/*
    35 - Encontrar números primos é uma tarefa difícil. Faça um programa que gera uma lista dos números primos existentes entre 1 e um número inteiro informado pelo usuário.
*/

let primos = []
const numero = parseInt(prompt("Escreva ate onde deseja Verificar : "))

for (let i = 2; i < numero; i++) {
    if (i % 2 !== 0) {
        primos.push(i)
    }
}
console.log(primos)