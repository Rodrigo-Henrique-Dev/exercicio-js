//12 - Tendo como dados de entrada a altura de uma pessoa, construa um algoritmo que calcule seu peso ideal, 
//  Usando a seguinte fórmula: (72.7*altura) - 58

const altura = parseFloat(prompt("Escreva Sua Altura : "))
const imc = (72.7 * altura) - 58

console.log(`Seu Peso ideal de acordo com sua Altura (${altura}) é de : ${imc} KGs `)