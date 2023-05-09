/*
    4 - Supondo que a população de um país A seja da ordem de 80000 habitantes com uma taxa anual de crescimento de 3% e que a população de B seja 200000 habitantes com uma taxa de crescimento de 1.5%.Faça um programa que calcule e escreva o número de anos necessários para que a população do país A ultrapasse ou iguale a população do país B, mantidas as taxas de crescimento.
*/

let populacaoA = 80000
let populacaoB = 200000
let crescimentoA = 0.03
let crescimentoB = 0.015
let ano = 0
while (populacaoA <= populacaoB) {
    populacaoA = parseInt(populacaoA + (populacaoA * crescimentoA))
    populacaoB = parseInt(populacaoB + (populacaoB * crescimentoB))
    ano++
}

console.log(`Serao ${ano} Anos ate a Populacao A ultrapassar/igualar a Populacao B`)