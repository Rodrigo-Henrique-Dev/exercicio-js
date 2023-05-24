/*    
    18 - Uma grande emissora de televisão quer fazer uma enquete entre os seus telespectadores para saber qual o melhor jogador após cada jogo. Para isto, faz-se necessário o desenvolvimento de um programa, que será utilizado pelas telefonistas, para a computação dos votos. Sua equipe foi contratada para desenvolver este programa, utilizando a linguagem de programação C++. Para computar cada voto, a telefonista digitará um número, entre 1 e 23, correspondente ao número da camisa do jogador. Um número de jogador igual zero, indica que a votação foi encerrada. Se um número inválido for digitado, o programa deve ignorá-lo, mostrando uma breve mensagem de aviso, e voltando a pedir outro número. Após o final da votação, o programa deverá exibir:
    O total de votos computados;
    Os númeos e respectivos votos de todos os jogadores que receberam votos;
    O percentual de votos de cada um destes jogadores;
    O número do jogador escolhido como o melhor jogador da partida, juntamente com o número de votos e o percentual de votos dados a ele.
    Observe que os votos inválidos e o zero final não devem ser computados como votos. O resultado aparece ordenado pelo número do jogador. O programa deve fazer uso de arrays. O programa deverá executar o cálculo do percentual de cada jogador através de uma função. Esta função receberá dois parâmetros: o número de votos de um jogador e o total de votos. A função calculará o percentual e retornará o valor calculado. Abaixo segue uma tela de exemplo. O disposição das informações deve ser o mais próxima possível ao exemplo. Os dados são fictícios e podem mudar a cada execução do programa. Ao final, o programa deve ainda gravar os dados referentes ao resultado da votação em um arquivo texto no disco, obedecendo a mesma disposição apresentada na tela.
*/

let c1 = 0
let c2 = 0
let c3 = 0
let c4 = 0
let c5 = 0
let c6 = 0
let c7 = 0
let c8 = 0
let c9 = 0
let c10 = 0
let c11 = 0
let c12 = 0
let c13 = 0
let c14 = 0
let c15 = 0
let c16 = 0
let c17 = 0
let c18 = 0
let c19 = 0
let c20 = 0
let c21 = 0
let c22 = 0
let c23 = 0
let camisa = null
while (camisa === null || camisa !== 0) {
    camisa = parseInt(prompt("Qual Jogador Votara de 1 ate 23(0 encerra a votacao : )"))
    if (camisa === 1) {
        c1++
    }
    if (camisa === 2) {
        c2++
    }
    if (camisa === 3) {
        c3++
    }
    if (camisa === 4) {
        c4++
    }
    if (camisa === 5) {
        c5++
    }
    if (camisa === 6) {
        c6++
    }
    if (camisa === 7) {
        c7++
    }
    if (camisa === 8) {
        c8++
    }
    if (camisa === 9) {
        c9++
    }
    if (camisa === 10) {
        c10++
    }
    if (camisa === 11) {
        c11++
    }
    if (camisa === 12) {
        c12++
    }
    if (camisa === 13) {
        c13++
    }
    if (camisa === 14) {
        c14++
    }
    if (camisa === 15) {
        c15++
    }
    if (camisa === 16) {
        c16++
    }
    if (camisa === 17) {
        c17++
    }
    if (camisa === 18) {
        c18++
    }
    if (camisa === 19) {
        c19++
    }
    if (camisa === 20) {
        c20++
    }
    if (camisa === 21) {
        c21++
    }
    if (camisa === 22) {
        c22++
    }
    if (camisa === 23) {
        c23++
    }

}
console.log(`Votacao Encerrada :\n` +
    `Jogador 1 teve : ${c1} Votos\n` +
    `Jogador 2 teve : ${c2} Votos\n` +
    `Jogador 3 teve : ${c3} Votos\n` +
    `Jogador 4 teve : ${c4} Votos\n` +
    `Jogador 5 teve : ${c5} Votos\n` +
    `Jogador 6 teve : ${c6} Votos\n` +
    `Jogador 7 teve : ${c7} Votos\n` +
    `Jogador 8 teve : ${c8} Votos\n` +
    `Jogador 9 teve : ${c9} Votos\n` +
    `Jogador 10 teve : ${c10} Votos\n` +
    `Jogador 11 teve : ${c11} Votos\n` +
    `Jogador 12 teve : ${c12} Votos\n` +
    `Jogador 13 teve : ${c13} Votos\n` +
    `Jogador 14 teve : ${c14} Votos\n` +
    `Jogador 15 teve : ${c15} Votos\n` +
    `Jogador 16 teve : ${c16} Votos\n` +
    `Jogador 17 teve : ${c17} Votos\n` +
    `Jogador 18 teve : ${c18} Votos\n` +
    `Jogador 19 teve : ${c19} Votos\n` +
    `Jogador 20 teve : ${c20} Votos\n` +
    `Jogador 21 teve : ${c21} Votos\n` +
    `Jogador 22 teve : ${c22} Votos\n` +
    `Jogador 23 teve : ${c23} Votos\n`

)