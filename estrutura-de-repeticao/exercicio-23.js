/*    
    23 - Faça um programa que mostre todos os primos entre 1 e N sendo N um número inteiro fornecido pelo usuário. O programa deverá mostrar também o número de divisões que ele executou para encontrar os números primos. Serão avaliados o funcionamento, o estilo e o número de testes (divisões) executados.
*/
let contadorPrimo = 0
let divisoes = 0
let ehPrimo = true
const n1 = 1
const n2 = parseInt(prompt("Escreva um Numero Inteiro : "))

for (let i = 0; i < n2; i++) {
    if (i % 2 !== 0) {
        ehPrimo = false
        divisoes++
    } else {
        contadorPrimo++
        divisoes++
    }
}

console.log({ divisoes, contadorPrimo })