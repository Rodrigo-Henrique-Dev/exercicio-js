/*
    28 - Faça um programa que calcule o valor total investido por um colecionador em sua coleção de CDs e o valor médio gasto em cada um deles. O usuário deverá informar a quantidade de CDs e o valor para em cada um.
*/

let quantidade = parseInt(prompt("Quantos CD's Voce ja Comprou : "))
let total = 0
for (let i = 0; i < quantidade; i++) {
    let preco = parseFloat(prompt("Escreva o Valor Para cada CD's : "))
    total = total + preco
}
console.log(`O Total Investido nos CD's sao : ${total} Reais `)