/*
    26 - Numa eleição existem três candidatos. Faça um programa que peça o número total de eleitores. Peça para cada eleitor votar e ao final mostrar o número de votos de cada candidato.
*/

const eleitores = parseInt(prompt("Escreva quantos eleitores Votarao : "))
let resposta = 0
let voto1 = 0
let voto2 = 0
let voto3 = 0
for (let i = 0; i < eleitores; i++) {
    resposta = parseInt(prompt("Escreva o numero do canditado : "))
    while (resposta < 0 || resposta > 3) {
        resposta = parseInt(prompt("Escreva um numero valido (1 ate 3)"))
    }

    if (resposta === 1) {
        voto1++
    }

    if (resposta === 2) {
        voto2++
    }

    if (resposta === 3) {
        voto3++
    }
}

console.log(`O canditado 1 teve : ${voto1} Votos\n` +
    `O candidato 2 teve : ${voto2} Votos\n` +
    `O candidato 3 teve : ${voto3} Votos`)