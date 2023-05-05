/*
    18 - Faça um programa que peça o tamanho de um arquivo para download (em MB) e a velocidade de um link de Internet (em Mbps), calcule e informe o tempo aproximado de download do arquivo usando este link (em minutos).
*/

let mb = prompt(" Escreva quantos Mbps o Arquivo Tem : ")
let velocidade = prompt(" Escreva a Velocidade da sua Internet (em Mbps) : ")
let calculoMb = mb / velocidade
let tempo = parseInt(calculoMb / 60)

console.log(` Seu download de ${mb} MB, sendo baixado em ${velocidade} Mbps\n` +
    `Vai demorar ${tempo} minutos `)