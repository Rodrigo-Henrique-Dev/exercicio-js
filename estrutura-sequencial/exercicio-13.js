/*
    13 - Tendo como dado de entrada a altura (h) de uma pessoa, 
    construa um algoritmo que calcule seu peso ideal, utilizando as seguintes fórmulas:
    Para homens: (72.7*h) - 58
    Para mulheres: (62.1*h) - 44.7
*/

const generoInput = prompt(" Escreva M-Masculino ou F-Feminino ")
const genero = generoInput.toUpperCase()
const altura = parseFloat(prompt(" Escreva Sua Altura. Ex : 1.74 "))
let imc = 0 

if(genero === "M"){
    imc = (72.7 * altura) - 58
}

if(genero === "F"){
    imc = (62.1 * altura) - 44.7 
}

console.log(`De Acordo com seus Dados, Seu Peso Ideal é de : ${imc} KGs `)