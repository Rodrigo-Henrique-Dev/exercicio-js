/*    
    26 - Um posto está vendendo combustíveis com a seguinte tabela de descontos:
    Álcool:
    até 20 litros, desconto de 3% por litro
    acima de 20 litros, desconto de 5% por litro
    Gasolina:
    até 20 litros, desconto de 4% por litro
    acima de 20 litros, desconto de 6% por litro Escreva um algoritmo que leia o número de litros vendidos, o tipo de combustível (codificado da seguinte forma: A-álcool, G-gasolina), calcule e imprima o valor a ser pago pelo cliente sabendo-se que o preço do litro da gasolina é R$ 2,50 o preço do litro do álcool é R$ 1,90.
*/

let litros = parseFloat(prompt("Escreva quantos litros deseja abastecer") || "")
let combustivel = prompt("Digite A para álcool ou G para gasolina: ").toUpperCase()
let preco = 0

if (combustivel === "A") {
    preco = litros * 1.9
    if (litros <= 20) {
        preco -= 1.9 * (litros * 3 / 100)
    } else {
        preco -= 1.9 * (litros * 5 / 100)
    }
    console.log(`O preco do Alcool é : ${preco} Reais`)
}

if (combustivel === "G") {
    preco = litros * 2.5
    if (litros <= 20) {
        preco -= 2.5 * (litros * 4 / 100)
    } else {
        preco -= 2.5 * (litros * 6 / 100)

    }
    console.log(`O preco da Gasolina é : ${preco} Reais`)
}
