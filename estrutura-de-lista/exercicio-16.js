/*
    16 - Utilize uma lista para resolver o problema a seguir. Uma empresa paga seus vendedores com base em comissões. O vendedor recebe $200 por semana mais 9 por cento de suas vendas brutas daquela semana. Por exemplo, um vendedor que teve vendas brutas de $3000 em uma semana recebe $200 mais 9 por cento de $3000, ou seja, um total de $470. Escreva um programa (usando um array de contadores) que determine quantos vendedores receberam salários nos seguintes intervalos de valores:
    $200 - $299
    $300 - $399
    $400 - $499
    $500 - $599
    $600 - $699
    $700 - $799
    $800 - $899
    $900 - $999
    $1000 em diante
    Desafio: Crie ma fórmula para chegar na posição da lista a partir do salário, sem fazer vários ifs aninhados.

*/
let contador200 = 0
let contador300 = 0
let contador400 = 0
let contador500 = 0
let contador600 = 0
let contador700 = 0
let contador800 = 0
let contador900 = 0
let contador1000 = 0
let funcionarios = parseInt(prompt("Escreva quantos funcionarios faram a conta : '"))
for (let indice = 0; indice < funcionarios; indice++) {
    let salarioFixo = parseFloat(prompt("Escreva Seu Salario Base :"))
    let salarioInteiro = 0
    for (let i = 1; i < 5; i++) {
        let venda = parseFloat(prompt(`Escreva Sua Venda na ${i} Semana : `))
        let porcentagem = venda * 0.09
        salarioInteiro = venda + porcentagem
    }

    if (salarioInteiro >= 200 && salarioInteiro <= 299) {
        contador200++
    }

    if (salarioInteiro >= 300 && salarioInteiro <= 399) {
        contador300++
    }

    if (salarioInteiro >= 400 && salarioInteiro <= 499) {
        contador400++
    }

    if (salarioInteiro >= 500 && salarioInteiro <= 599) {
        contador500++
    }

    if (salarioInteiro >= 600 && salarioInteiro <= 699) {
        contador600++
    }

    if (salarioInteiro >= 700 && salarioInteiro <= 799) {
        contador700++
    }

    if (salarioInteiro >= 800 && salarioInteiro <= 899) {
        contador800++
    }

    if (salarioInteiro >= 900 && salarioInteiro <= 999) {
        contador900++
    }

    if (salarioInteiro >= 1000) {
        contador1000++
    }
}
console.log(`${contador200} Pessoa(s) ganham entre 200-299 Reais`)
console.log(`${contador300} Pessoa(s) ganham entre 300-399 Reais`)
console.log(`${contador400} Pessoa(s) ganham entre 400-499 Reais`)
console.log(`${contador500} Pessoa(s) ganham entre 500-599 Reais`)
console.log(`${contador600} Pessoa(s) ganham entre 600-699 Reais`)
console.log(`${contador700} Pessoa(s) ganham entre 700-799 Reais`)
console.log(`${contador800} Pessoa(s) ganham entre 800-899 Reais`)
console.log(`${contador900} Pessoa(s) ganham entre 900-999 Reais`)
console.log(`${contador1000} Pessoa(s) ganham 1000 Reais em Diante`)