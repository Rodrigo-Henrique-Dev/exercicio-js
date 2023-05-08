/*
    12 - Faça um programa para o cálculo de uma folha de pagamento, sabendo que os descontos são do Imposto de Renda, que depende do salário bruto (conforme tabela abaixo) e 3% para o Sindicato e que o FGTS corresponde a 11% do Salário Bruto, mas não é descontado (é a empresa que deposita). O Salário Líquido corresponde ao Salário Bruto menos os descontos. O programa deverá pedir ao usuário o valor da sua hora e a quantidade de horas trabalhadas no mês.
    Desconto do IR:
    Salário Bruto até 900 (inclusive) - isento
    Salário Bruto até 1500 (inclusive) - desconto de 5%
    Salário Bruto até 2500 (inclusive) - desconto de 10%
    Salário Bruto acima de 2500 - desconto de 20% Imprima na tela as informações, dispostas conforme o exemplo abaixo. 
        Salário Bruto: (5 * 220)        : R$ 1100,00
        (-) IR (5%)                     : R$   55,00  
        (-) INSS ( 10%)                 : R$  110,00
        FGTS (11%)                      : R$  121,00
        Total de descontos              : R$  165,00
        Salário Liquido                 : R$  935,00
*/

let salarioBruto = parseInt(prompt(" Escreva Seu Salario Bruto para Calculo : "))
let ir = 0
let inss = salarioBruto * 0.1
let sindicato = salarioBruto * 0.03
let fgts = salarioBruto * 0.11

if (salarioBruto <= 900) {
    ir = 0
}

if (salarioBruto > 900 && salarioBruto <= 1500) {
    ir = 0.05
}

if (salarioBruto > 1500 && salarioBruto <= 2500) {
    ir = 0.1
}

if (salarioBruto > 2500) {
    ir = 0.2
}
let calculoIR = salarioBruto * ir
let totalDesconto = calculoIR + inss + sindicato
let salarioLiquido = (salarioBruto + fgts) - totalDesconto

console.log(`Seu salario Bruto é de : ${salarioBruto} Reais\n` +
    `Desconto do IR : ${ir * 100}% : ${calculoIR} Reais\n` +
    `Desconto do Sindicato : ${sindicato} Reais\n` +
    `Adicionado do FGTS : ${fgts} Reais\n` +
    `Seu Salario Liquido é de : ${salarioLiquido} Reais`)