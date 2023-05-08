/*
    11 - As Organizações Tabajara resolveram dar um aumento de salário aos seus colaboradores e lhe contraram para desenvolver o programa que calculará os reajustes.
    Faça um programa que recebe o salário de um colaborador e o reajuste segundo o seguinte critério, baseado no salário atual:
    salários até R$ 280,00 (incluindo) : aumento de 20%
    salários entre R$ 280,00 e R$ 700,00 : aumento de 15%
    salários entre R$ 700,00 e R$ 1500,00 : aumento de 10%
    salários de R$ 1500,00 em diante : aumento de 5% Após o aumento ser realizado, informe na tela:
    o salário antes do reajuste;
    o percentual de aumento aplicado;
    o valor do aumento;
    o novo salário, após o aumento.
*/

let salarioInput = parseInt(prompt(" Escreva seu Salario para Reajuste : "))
let desconto = 0

if (salarioInput <= 280) {
    desconto = 0.2
}

if (salarioInput > 280 && salarioInput <= 700) {
    desconto = 0.15
}

if (salarioInput > 700 && salarioInput < 1500) {
    desconto = 0.1
}

if (salarioInput >= 1500) {
    desconto = 0.05
}

let aumento = salarioInput * desconto
let salarioNovo = salarioInput + aumento

console.log(`Seu salario antigo era de : ${salarioInput}\n` +
    `O Percentual do aumento foi de ${desconto} vezes\n` +
    `O aumento aplicado foi de ${aumento} Reais\n` +
    `Apos o aumento seu Salario é de : ${salarioNovo} Reais`)