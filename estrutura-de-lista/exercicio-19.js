/*
    19 - Uma empresa de pesquisas precisa tabular os resultados da seguinte enquete feita a um grande quantidade de organizações

"Qual o melhor Sistema Operacional para uso em servidores?"

As possíveis respostas são:

1- Windows Server
2- Unix
3- Linux
4- Netware
5- Mac OS
6- Outro
Você foi contratado para desenvolver um programa que leia o resultado da enquete e informe ao final o resultado da mesma. O programa deverá ler os valores até ser informado o valor 0, que encerra a entrada dos dados. Não deverão ser aceitos valores além dos válidos para o programa (0 a 6). Os valores referentes a cada uma das opções devem ser armazenados num vetor. Após os dados terem sido completamente informados, o programa deverá calcular a percentual de cada um dos concorrentes e informar o vencedor da enquete. O formato da saída foi dado pela empresa, e é o seguinte:
Sistema Operacional     Votos   %
-------------------     -----   ---
Windows Server           1500   17%
Unix                     3500   40%
Linux                    3000   34%
Netware                   500    5%
Mac OS                    150    2%
Outro                     150    2%
-------------------     -----
Total                    8800

O Sistema Operacional mais votado foi o Unix, com 3500 votos, correspondendo a 40% dos votos.

*/

let voto = null
let votos = 0
let wPorcento = 0
let uPorcento = 0
let lPorcento = 0
let nPorcento = 0
let mPorcento = 0
let oPorcento = 0

while (voto = null || voto !== 0) {
    voto = parseInt(prompt("Qual o Sistema Operacional que voce usa :\n 1-Windows\n 2-Unix\n 3-Linux\n 4-Netware\n 5-MacOs\n 6-Outro "))
    while (voto > 6) {
        voto = parseInt(prompt("Qual o Sistema Operacional que voce usa :\n 1-Windows\n 2-Unix\n 3-Linux\n 4-Netware\n 5-MacOs\n 6-Outro "))
    }
    if (voto === 1) {
        windows++
    }
    if (voto === 2) {
        unix++
    }
    if (voto === 3) {
        linux++
    }
    if (voto === 4) {
        netware++
    }
    if (voto === 5) {
        macOs++
    }
    if (voto === 6) {
        outro++
    }
    votos = windows + unix + linux + netware + macOs + outro
    wPorcento = parseInt(votos / windows)
    uPorcento = parseInt(votos / unix)
    lPorcento = parseInt(votos / linux)
    nPorcento = parseInt(votos / netware)
    mPorcento = parseInt(votos / macOs)
    oPorcento = parseInt(votos / outro)
}
console.log(`Final da votacao :\n` +
    `Windows teve ${windows} com ${wPorcento}% de voto\n` +
    `Windows teve ${unix} com ${uPorcento}% de voto\n` +
    `Windows teve ${linux} com ${lPorcento}% de voto\n` +
    `Windows teve ${netware} com ${nPorcento}% de voto\n` +
    `Windows teve ${macOs} com ${mPorcento}% de voto\n` +
    `Windows teve ${outro} com ${oPorcento}% de voto\n`
)