/*
    18 - Faça um Programa que peça uma data no formato dd/mm/aaaa e determine se a mesma é uma data válida.
*/

const input_dia = parseInt(prompt("Escreva o dia : ") || "")
const input_mes = parseInt(prompt("Escreva o mes : ") || "")
const input_ano = parseInt(prompt("Escreva o ano : ") || "")
let validacao = true;
const meses31Dias = [1, 3, 5, 7, 8, 10, 12]
const meses30Dias = [4, 6, 9, 11]


if (input_dia > 31 || input_dia < 1) {
    validacao = false
}

if (input_mes < 1 || input_mes > 12) {
    validacao = false
}

if (input_ano < 1000 || input_ano > 9999) {
    validacao = false
}

if (input_mes === 2 && input_ano % 4 === 0) {
    if (input_dia > 29) {
        validacao = false
    }
}

if (input_mes === 2 && input_ano % 4 !== 0) {
    if (input_dia > 28) {
        validacao = false
    }
}

if (meses31Dias.includes(input_mes)) {
    if (input_dia > 31) {
        validacao = false
    }
}

if (meses30Dias.includes(input_mes)) {
    if (input_dia > 30) {
        validacao = false
    }
}

if (validacao === false) {
    console.log(); ("Data Invalida")
} else {
    console.log(`a Data é valida !`)
}