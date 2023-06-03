/*
    7 - Faça um programa que use a função valorPagamento para determinar o valor a ser pago por uma prestação de uma conta. O programa deverá solicitar ao usuário o valor da prestação e o número de dias em atraso e passar estes valores para a função valorPagamento, que calculará o valor a ser pago e devolverá este valor ao programa que a chamou. O programa deverá então exibir o valor a ser pago na tela. Após a execução o programa deverá voltar a pedir outro valor de prestação e assim continuar até que seja informado um valor igual a zero para a prestação. Neste momento o programa deverá ser encerrado, exibindo o relatório do dia, que conterá a quantidade e o valor total de prestações pagas no dia. O cálculo do valor a ser pago é feito da seguinte forma. Para pagamentos sem atraso, cobrar o valor da prestação. Quando houver atraso, cobrar 3% de multa, mais 0,1% de juros por dia de atraso.
*/

function valorPagamento(pagamento, atraso) {
    if (atraso === 0) {
        return pagamento
    } else {
        pagamento = pagamento + (pagamento * 0.03) + (atraso * 0.1)
        return pagamento
    }
}

let valorTotal = 0
let contador = 0
while (true) {
    const valorBruto = parseFloat(prompt("Escreva o valor da Prestacao : "))
    const diasAtraso = parseInt(prompt("Escreva quantos dias tem de Atraso na Prestacao : "))
    const valorASerPago = valorPagamento(valorBruto, diasAtraso)
    valorTotal = valorTotal + valorASerPago
    contador++
    if (valorASerPago === 0) {
        break;
    }
}
console.log(`Valor Total das Prestacoes : ${valorTotal}\n` +
    `Quantidade de Prestacoes : ${contador}`)