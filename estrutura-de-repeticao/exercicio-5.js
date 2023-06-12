/*   
    5 - Supondo que a população de um país A seja da ordem de 80000 habitantes com uma taxa anual de crescimento de 3% e que a população de B seja 200000 habitantes com uma taxa de crescimento de 1.5%.Faça um programa que calcule e escreva o número de anos necessários para que a população do país A ultrapasse ou iguale a população do país B, mantidas as taxas de crescimento.      
        Altere o programa anterior permitindo ao usuário informar as populações e as taxas de crescimento iniciais. Valide a entrada e permita repetir a operação.
*/

let paisA = parseInt(prompt("Escreva o numero de Habitantes do País A :"))
let taxaA = parseInt(prompt("Escreva a taxa de Crescimento do País A :"))
let paisB = parseInt(prompt("Escreva o numero de Habitantes do País B :"))
let taxaB = parseInt(prompt("Escreva a taxa de Crescimento do País B :"))
let anos = 0

while (paisA <= paisB) {
    paisA = parseInt(paisA + (paisA * taxaA))
    paisB = parseInt(paisB + (paisB * taxaB))
    anos++
}

if (paisA > paisB) {
    console.log(`O País A ultrapassou/Igualou o País B em ${anos} Anos\n` +
        `Cada um Tendo ${paisA} e ${paisB} Habitantes Respectivamente`)
} 