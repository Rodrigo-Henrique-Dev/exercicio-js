/*
    16 - Faça um programa para uma loja de tintas. O programa deverá pedir o tamanho em metros quadrados da área a ser pintada. Considere que a cobertura da tinta é de 1 litro para cada 3 metros quadrados e que a tinta é vendida em latas de 18 litros, que custam R$ 80,00. Informe ao usuário a quantidades de latas de tinta a serem compradas e o preço total.
*/

const area = parseInt(prompt("Escreva a Area em Metros que deseja Pintar : "))
const preco = 80
const lataLitros = 18
const cobertura = 3
let litrosTinta = area / cobertura
let lataTinta = litrosTinta / lataLitros

if (litrosTinta / lataLitros !== 0) {
    lataTinta++
}
let precototal = lataTinta * preco

console.log(`Para Pintar uma area de ${area} Metros\n` +
    `Voce precisa de ${litrosTinta} Litros, que sao ${lataTinta} Lata(s)\n` +
    `Que custam ${precototal} Reais`)