/*
    8 - Faça um Programa que peça a idade e a altura de 5 pessoas, armazene cada informação no seu respectivo vetor. Imprima a idade e a altura na ordem inversa a ordem lida.
*/
let idade = []
let altura = []
for (let i = 1; i < 6; i++) {
    idade.push(parseInt(prompt("Escreva a sua Idade : ")))
    altura.push(parseFloat(prompt("Escreva a sua Altura : ")))
}
const idadeInput = idade.reverse()
const alturaInput = altura.reverse()

console.log({ idade: idadeInput, altura: alturaInput })
