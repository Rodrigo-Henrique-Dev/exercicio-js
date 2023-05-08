/*
    17 - Faça um Programa que peça um número correspondente a um determinado ano e em seguida informe se este ano é ou não bissexto.
*/

const ano = parseInt(prompt("Escreva o ano que deseja Verificar : ") || "")

if (ano % 4 === 0 && ano % 100 !== 0 || ano % 400 === 0) {
    alert(`O ano ${ano} é Bissexto`)
} else {
    alert(`O ano ${ano} nao é Bissexto`)
}