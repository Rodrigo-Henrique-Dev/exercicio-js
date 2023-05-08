/*   
   20 - Faça um Programa para um caixa eletrônico. O programa deverá perguntar ao usuário a valor do saque e depois informar quantas notas de cada valor serão fornecidas. As notas disponíveis serão as de 1, 5, 10, 50 e 100 reais. O valor mínimo é de 10 reais e o máximo de 600 reais. O programa não deve se preocupar com a quantidade de notas existentes na máquina.
    Exemplo 1: Para sacar a quantia de 256 reais, o programa fornece duas notas de 100, uma nota de 50, uma nota de 5 e uma nota de 1;
    Exemplo 2: Para sacar a quantia de 399 reais, o programa fornece três notas de 100, uma nota de 50, quatro notas de 10, uma nota de 5 e quatro notas de 1.
*/


let saque = parseInt(prompt("Qual Valor que Deseja Sacar : "))
let cem = 0
let cinquenta = 0
let dez = 0
let cinco = 0
let um = 0

for (let i = 0; saque < 10 || saque > 600; i++) {
    saque = parseInt(prompt("Insira um valor entre 10 e 600 Reais : "))
}
if (saque > 10 && saque <= 600) {
    cem = parseInt(saque / 100)
    saque = saque % 100

    cinquenta = parseInt(saque / 50)
    saque = saque % 50

    dez = parseInt(saque / 10)
    saque = saque % 10

    cinco = parseInt(saque / 5)
    saque = saque % 5

    um = saque
}
console.log(`Seu Saque foi de : ${saque}\n` +
    `Confira as notas :\n` +
    `${cem} de 100\n` +
    `${cinquenta} de 50\n` +
    `${dez} de 10\n` +
    `${cinco} de 5\n` +
    `${um} de 1 `
)
