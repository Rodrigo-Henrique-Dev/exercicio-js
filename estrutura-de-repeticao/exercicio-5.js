/*   
    5 - Supondo que a população de um país A seja da ordem de 80000 habitantes com uma taxa anual de crescimento de 3% e que a população de B seja 200000 habitantes com uma taxa de crescimento de 1.5%.Faça um programa que calcule e escreva o número de anos necessários para que a população do país A ultrapasse ou iguale a população do país B, mantidas as taxas de crescimento.      
        Altere o programa anterior permitindo ao usuário informar as populações e as taxas de crescimento iniciais. Valide a entrada e permita repetir a operação.
*/

let populacaoA = parseInt(prompt("Escreva a Populacao-A Inicial : "))
let populacaoB = parseInt(prompt("Escreva a Populacao-B Inicial : "))
let crescimentoA = parseFloat(prompt("Escreva a Taxa de Crescimento-A Inicial : "))
let crescimentoB = parseFloat(prompt("Escreva a Taxa de Crescimento-B Inicial : "))
let ano = 0

while (populacaoA <= populacaoB) {
    populacaoA = parseInt(populacaoA + (populacaoA * crescimentoA))
    populacaoB = parseInt(populacaoB + (populacaoB * crescimentoB))
    ano++
}

console.log(`Serao ${ano} Anos ate a Populacao A ultrapassar/igualar a Populacao B`)