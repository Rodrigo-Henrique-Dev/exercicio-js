/*
    24 - Faça um Programa que leia 2 números e em seguida pergunte ao usuário qual operação ele deseja realizar. O resultado da operação deve ser acompanhado de uma frase que diga se o número é:
    par ou ímpar;
    positivo ou negativo;
    inteiro ou decimal.
*/

const numero1 = parseFloat(prompt("Escreva o Primeiro Numero "))
const numero2 = parseFloat(prompt("Escreva o Segundo Numero "))
let opcao = parseInt(prompt("Escolha uma Opcao : 1-Par ou Impar\n" +
    "2-Positivo ou Negativo\n" +
    "3-Inteiro ou Decimal"))

if (opcao === 1) {
    const numero1par = numero1 % 2 === 0;
    const numero2par = numero2 % 2 === 0;

    if (numero1par) {
        console.log(`${numero1} é Par`)
    } else {
        console.log(`${numero1} é Impar`)
    }

    if (numero2par) {
        console.log(`${numero2} é Par`)
    } else {
        console.log(`${numero2} é Impar`)
    }
}

if (opcao === 2) {
    if (numero1 > 0 && numero2 > 0) {
        console.log(`${numero1} e ${numero2} sao Positivos `)
    }
    if (numero1 < 0 && numero2 < 0) {
        console.log(`${numero1} e ${numero2} sao Negativos `)
    }
    if (numero1 < 0 && numero2 > 0) {
        console.log(`Numero ${numero1} é Negativo e o Numero ${numero2} é Positivo`)
    }
    if (numero1 > 0 && numero2 < 0) {
        console.log(`Numero ${numero1} é Positivo e o Numero ${numero2} é Negativo`)
    }
}

if (opcao === 3) {
    if (numero1 % 1 === 0 && numero2 % 1 === 0) {
        console.log(`${numero1} e ${numero2} sao Inteiros `)
    }
    if (numero1 % 1 !== 0 && numero2 % 1 !== 0) {
        console.log(`${numero1} e ${numero2} sao Decimais `)
    }
    if (numero1 % 1 === 0 && numero2 % 1 !== 0) {
        console.log(`Numero ${numero1} é Inteiro e o Numero ${numero2} é Decimal`)
    }
    if (numero1 % 1 !== 0 && numero2 % 1 === 0) {
        console.log(`Numero ${numero1} é Decimal e o Numero ${numero2} é Inteiro`)
    }
}