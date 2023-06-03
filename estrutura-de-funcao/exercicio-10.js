/*
    10 - Jogo de Craps. Faça um programa de implemente um jogo de Craps. O jogador lança um par de dados, obtendo um valor entre 2 e 12. Se, na primeira jogada, você tirar 7 ou 11, você um "natural" e ganhou. Se você tirar 2, 3 ou 12 na primeira jogada, isto é chamado de "craps" e você perdeu. Se, na primeira jogada, você fez um 4, 5, 6, 8, 9 ou 10,este é seu "Ponto". Seu objetivo agora é continuar jogando os dados até tirar este número novamente. Você perde, no entanto, se tirar um 7 antes de tirar este Ponto novamente.
*/


// 1 - Lancar um par de dados de (2 ate 12)
// 2 - Implementar as condicoes do jogo
// 3 - 

function jogandoDados() {
    let dado1 = Math.floor(Math.random() * 6 + 1)
    let dado2 = Math.floor(Math.random() * 6 + 1)
    let soma = dado1 + dado2
    return soma
}


function verificacao() {
    const somaDados = jogandoDados()
    if (somaDados === 7 || somaDados === 11) {
        console.log(`Voce tirou Natural ${somaDados} e Ganhou `)
    }
    if (somaDados > 1 && somaDados < 4 || somaDados === 12) {
        console.log(`Voce tirou ${somaDados} que é Craps e Perdeu`)
    }
    if (somaDados > 3 && somaDados < 7 || somaDados > 7 && somaDados < 11) {
        console.log(`Voce fez um Ponto`)
    }
}