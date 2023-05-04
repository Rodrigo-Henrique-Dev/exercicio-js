// 8 - Faça um Programa que pergunte quanto você ganha por hora e o número de horas trabalhadas no mês. 
//Calcule e mostre o total do seu salário no referido mês.

const ganha = parseInt(prompt("Quanto voce Ganha Por Hora de Trabalho : "))
const horas = parseInt(prompt("Quantas Horas de Trabalho Voce tem em 1 mes : "))
const salario = ganha * horas 

console.log(`Voce tem A Media Salarial de : ${salario} Reais`)