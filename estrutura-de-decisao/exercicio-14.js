/*
    14 - Faça um programa que lê as duas notas parciais obtidas por um aluno numa disciplina ao longo de um semestre, e calcule a sua média. A atribuição de conceitos obedece à tabela abaixo:
    Média de Aproveitamento  Conceito
    Entre 9.0 e 10.0        A
    Entre 7.5 e 9.0         B
    Entre 6.0 e 7.5         C
    Entre 4.0 e 6.0         D
    Entre 4.0 e zero        E
    O algoritmo deve mostrar na tela as notas, a média, o conceito correspondente e a mensagem “APROVADO” se o conceito for A, B ou C ou “REPROVADO” se o conceito for D ou E.
*/

let soma = 0
let conceito = ""
let situacao = ""
for (let i = 0; i < 2; i++) {
    let notas = parseFloat(prompt("Escreva uma Nota : "))
    soma = soma + notas
}

let media = soma / 2

if (media >= 9 && media <= 10) {
    conceito = "A"
    situacao = "Aprovado"
}

if (media >= 7.5 && media < 9) {
    conceito = "B"
    situacao = "Aprovado"
}

if (media < 7.5 && media >= 6) {
    conceito = "C"
    situacao = "Aprovado"
}

if (media < 6 && media >= 4) {
    conceito = "D"
    situacao = "Reprovado"
}

if (media >= 0 && media < 4) {
    conceito = "E"
    situacao = "Reprovado"
}

console.log(`Sua media foi de : ${media}\n` +
    `Seu conceito é : ${conceito}\n` +
    `Voce foi ${situacao}`)