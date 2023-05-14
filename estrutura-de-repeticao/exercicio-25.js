/*    
    25 - Faça um programa que peça para n pessoas a sua idade, ao final o programa devera verificar se a média de idade da turma varia entre 0 e 25,26 e 60 e maior que 60; e então, dizer se a turma é jovem, adulta ou idosa, conforme a média calculada.
*/

const nPessoas = parseInt(prompt("Escreva quantas pessoas tem  na sala : "))
let idade = 0
let soma = 0
for (let i = 0; i < nPessoas; i++) {
    idade = parseInt(prompt("Escreva a Idade de um aluno por Vez : "))
    soma = soma + idade
}
let media = soma / nPessoas

if (media <= 25) {
    console.log(`Com media ${media}, A Turma é : Jovem`)
}

if (media > 25 && media <= 60) {
    console.log(`Com media ${media}, A Turma é : Adulta`)
}

if (media > 60) {
    console.log(`Com media ${media}, A Turma é : Idosa`)
}