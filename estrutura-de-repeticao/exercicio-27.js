/*
    27 - Faça um programa que calcule o número médio de alunos por turma. Para isto, peça a quantidade de turmas e a quantidade de alunos para cada turma. As turmas não podem ter mais de 40 alunos.
*/

let turmas = parseInt(prompt("Escreva o Numero de Turmas : "))
let soma = 0
let media = 0
for (let i = 0; i < turmas; i++) {
    let alunos = parseInt(prompt("Escreva Quantos Alunos tem na Turma : "))
    while (alunos <= 0 || alunos > 40) {
        alunos = parseInt(prompt("Nao podem haver 0 ou Mais de 40 Alunos : "))
    }
    soma = soma + alunos
    media = soma / turmas
}
console.log(`A media de alunos por Turma é : ${media} `)