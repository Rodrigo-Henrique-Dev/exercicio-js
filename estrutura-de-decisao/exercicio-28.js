/*
    28 - O Hipermercado Tabajara está com uma promoção de carnes que é imperdível. Confira:
                        Até 5 Kg           Acima de 5 Kg
    File Duplo      R$ 4,90 por Kg          R$ 5,80 por Kg
    Alcatra         R$ 5,90 por Kg          R$ 6,80 por Kg
    Picanha         R$ 6,90 por Kg          R$ 7,80 por Kg
    Para atender a todos os clientes, cada cliente poderá levar apenas um dos tipos de carne da promoção, porém não há limites para a quantidade de carne por cliente. Se compra for feita no cartão Tabajara o cliente receberá ainda um desconto de 5% sobre o total da compra. Escreva um programa que peça o tipo e a quantidade de carne comprada pelo usuário e gere um cupom fiscal, contendo as informações da compra: tipo e quantidade de carne, preço total, tipo de pagamento, valor do desconto e valor a pagar.
*/

alert("OPCOES :\n 1- File Duplo\n 2- Alcatra\n 3- Picanha")
const opcoes = parseInt(prompt("Digite Uma das Opcoes : "))
const quantidade = parseInt(prompt("Digite a Quantidade do Produto : "))
const cartao = prompt("A compra será realizada com cartao Tabajara? S-Sim ou N-Nao ").toUpperCase()
let preco = 0
let precoTotal = 0
let resposta = ""
let desconto = 0

if (opcoes === 1) {
    let nome = "File Duplo"
    if (quantidade <= 5) {
        preco = quantidade * 4.90
    } else {
        preco = quantidade * 5.80
    }
}

if (opcoes === 2) {
    let nome = "Alcatra"
    if (opcoes <= 5) {
        preco = quantidade * 5.90
    } else {
        preco = quantidade * 6.80
    }
}

if (opcoes === 3) {
    let nome = "Picanha"
    if (quantidade <= 5) {
        preco = quantidade * 6.90
    } else {
        preco = quantidade * 7.80
    }
}

if (cartao === "S") {
    desconto = ((preco * 5) / 100)
    precoTotal = preco - desconto
} else {
    precoTotal = preco
}

console.log(`O Tipo da Carne é : ${opcoes}\n` +
    `A Quantidade é : ${quantidade}\n` +
    `O Preço é : ${preco}\n ${cartao}-Usando Cartao Tabajara \n` +
    `Total com desconto : ${precoTotal}`
)