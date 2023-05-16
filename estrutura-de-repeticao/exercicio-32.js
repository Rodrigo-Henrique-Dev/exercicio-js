/*    
    32 - Faça um programa que calcule o fatorial de um número inteiro fornecido pelo usuário. Ex.: 5!=5.4.3.2.1=120. A saída deve ser conforme o exemplo abaixo:
        Fatorial de: 5
        5! =  5 . 4 . 3 . 2 . 1 = 120
*/

const numero = parseInt(prompt("Escreva o Numero que Deseja Fatorar : "))
let resultado = 1
let i = 1
let multiplicadores = ""
let indice = 1
while (i <= numero) {
    resultado = resultado * i
    i += 1
}

indice = numero
while (indice >= 1) {
    if (multiplicadores === "") {
        multiplicadores = indice.toString()
    } else {
        multiplicadores = multiplicadores + " * " + indice.toString()
    }
    indice -= 1
}
console.log(`${numero}! = ${multiplicadores} = ${resultado}`)


