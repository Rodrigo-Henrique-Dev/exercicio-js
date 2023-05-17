/*
    6 - Faça um Programa que peça as quatro notas de 10 alunos, calcule e armazene num vetor a média de cada aluno, imprima o número de alunos com média maior ou igual a 7.0.
*/
let media = 0
let media7 = 0
let notas = 0
for (let i = 0; i < 10; i++) {
    for (let indice = 0; indice < 4; indice++) {
        const nota = parseFloat(prompt("Escreva suas Nota :"))
        notas = notas + nota
        media = notas / 4
        if (media >= 7) {
            media7 += 1
        }
    }
}
console.log(`Os alunos que tiveram media 7 ou mais foram : ${media7} Alunos`)
