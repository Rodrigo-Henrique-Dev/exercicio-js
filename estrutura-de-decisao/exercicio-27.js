/*
    27 - Uma fruteira está vendendo frutas com a seguinte tabela de preços:
                            Até 5 Kg           Acima de 5 Kg
        Morango         R$ 2,50 por Kg           R$ 2,20 por Kg
        Maçã           R$ 1,80 por Kg          R$ 1,50 por Kg
    
    Se o cliente comprar mais de 8 Kg em frutas ou o valor total da compra ultrapassar R$ 25,00, receberá ainda um desconto de 10% sobre este total. Escreva um algoritmo para ler a quantidade (em Kg) de morangos e a quantidade (em Kg) de maças adquiridas e escreva o valor a ser pago pelo cliente.
*/

let morangos = parseInt(prompt("Escreva o Kg de morangos : ") || "")
let macas = parseInt(prompt("Escreva o KG de de maças : ") || "")
let precoMorango1 = morangos * 2.50
let precoMorango2 = morangos * 2.20
let precoMaca1 = macas * 1.80
let precoMaca2 = macas * 1.50
let precoCertoMaca = 1
let precoCertoMorango = 1

console.log(`Voce Selecionou ${morangos} KG de Morango\n` +
    `Voce Selecionou ${macas} KG de Maça`
)

if (morangos > 5) {
    precoCertoMorango = precoMorango1
} else {
    precoCertoMorango = precoMorango2
}

if (macas > 5) {
    precoCertoMaca = precoMaca1
} else {
    precoCertoMaca = precoMaca2
}

let precoTotal = precoCertoMaca + precoCertoMorango

if (precoTotal > 25 || (macas + morangos) > 8) {
    let precoFinal = precoTotal - (precoTotal * 0.1)
    console.log(`Preco Final com desconto : ${precoFinal}`)
} else {
    console.log(`Preco Final : ${precoTotal}`)
}