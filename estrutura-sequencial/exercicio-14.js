/*
    João Papo-de-Pescador, homem de bem, comprou um microcomputador para controlar o rendimento diário de seu trabalho. Toda vez que ele traz um peso de peixes maior que o estabelecido pelo regulamento de pesca do estado de São Paulo (50 quilos) deve pagar uma multa de R$ 4,00 por quilo excedente. João precisa que você faça um programa que leia a variável peso (peso de peixes) e calcule o excesso. Gravar na variável excesso a quantidade de quilos além do limite e na variável multa o valor da multa que João deverá pagar. Imprima os dados do programa com as mensagens adequadas.
*/

const peixes = parseInt(prompt(" Escreva quantos Peixes esta Levando : "))
let multa = 0
let excedente = 0

if (peixes > 50) {
    excedente = peixes - 50
    multa = excedente * 4
    console.log(`Voce tem ${excedente} Kg a mais do que o Regulamento\n` +
        `Tera que pagar uma Multa de ${multa} Reais`)
} else {
    console.log(`Voce tem ${peixes} Kg e nao esta acima do Regulamento\n` +
        ` Voce esta isento de Multa `)
}
