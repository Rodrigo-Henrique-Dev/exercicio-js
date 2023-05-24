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
        let pArray = []
        let contador200 = 0
        contador200++
        pArray.push(contador200)
        console.log(`${pArray} Pessoa(s) ganham entre 200-299 Reais`)
    }

    if (salarioInteiro >= 300 && salarioInteiro <= 399) {
        let sArray = []
        let contador300 = 0
        contador300++
        sArray.push(contador300)
        console.log(`${sArray} Pessoa(s) ganham entre 300-399 Reais`)
    }

    if (salarioInteiro >= 400 && salarioInteiro <= 499) {
        let tArray = []
        let contador400 = 0
        contador400++
        tArray.push(contador400)
        console.log(`${tArray} Pessoa(s) ganham entre 400-499 Reais`)
    }

    if (salarioInteiro >= 500 && salarioInteiro <= 599) {
        let qArray = []
        let contador500 = 0
        contador500++
        qArray.push(contador500)
        console.log(`${qArray} Pessoa(s) ganham entre 500-599 Reais`)
    }

    if (salarioInteiro >= 600 && salarioInteiro <= 699) {
        let qiArray = []
        let contador600 = 0
        contador600++
        qiArray.push(contador600)
        console.log(`${qiArray} Pessoa(s) ganham entre 600-699 Reais`)
    }

    if (salarioInteiro >= 700 && salarioInteiro <= 799) {
        let sArray = []
        let contador700 = 0
        contador700++
        sArray.push(contador700)
        console.log(`${sArray} Pessoa(s) ganham entre 700-799 Reais`)
    }

    if (salarioInteiro >= 800 && salarioInteiro <= 899) {
        let seArray = []
        let contador800 = 0
        contador800++
        seArray.push(contador800)
        console.log(`${seArray} Pessoa(s) ganham entre 800-899 Reais`)
    }

    if (salarioInteiro >= 900 && salarioInteiro <= 999) {
        let oArray = []
        let contador900 = 0
        contador900++
        oArray.push(contador900)
        console.log(`${oArray} Pessoa(s) ganham entre 900-999 Reais`)
    }

    if (salarioInteiro >= 1000) {
        let nArray = []
        let contador1000 = 0
        contador1000++
        nArray.push(contador1000)
        console.log(`${nArray} Pessoa(s) ganham 1000 Reais em Diante`)
    }
}