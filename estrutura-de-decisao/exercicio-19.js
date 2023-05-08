/*
    19 - Faça um Programa que leia um número inteiro menor que 1000 e imprima a quantidade de centenas, dezenas e unidades do mesmo.
    Observando os termos no plural a colocação do "e", da vírgula entre outros. Exemplo:
    326 = 3 centenas, 2 dezenas e 6 unidades
    12 = 1 dezena e 2 unidades Testar com: 326, 300, 100, 320, 310,305, 301, 101, 311, 111, 25, 20, 10, 21, 11, 1, 7 e 16
*/

let numero = parseInt(prompt("Escreva um numero menor que 1000 : ") || "")
const unidades = parseInt(numero / 1 % 10)
const dezenas = parseInt(numero / 10 % 10)
const centenas = parseInt(numero / 100 % 10)


if (numero < 1000) {
    console.log(); (`O numero ${numero} tem com ele :\n ${centenas} Centena(s)\n ` +
        `${dezenas} Dezena(s)\n ${unidades} Unidade(s)`
    )
}