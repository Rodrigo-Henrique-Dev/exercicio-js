/*
    8 - Faça um programa que pergunte o preço de três produtos e informe qual produto você deve comprar, sabendo que a decisão é sempre pelo mais barato.
*/

const produto1 = parseInt(prompt(" Informe o valor do Primeiro Produto : "))
const produto2 = parseInt(prompt(" Informe o valor do Segundo Produto : "))
const produto3 = parseInt(prompt(" Informe o valor do Terceiro Produto : "))
let barato = produto1

if (barato > produto2) {
    barato = produto2
}

if (barato > produto3) {
    barato = produto3
}

console.log(`Voce deve comprar o mais Barato, que vale ${barato} Reais `)