/*    
    20 - Altere o programa de cálculo do fatorial, permitindo ao usuário calcular o fatorial várias vezes e limitando o fatorial a números inteiros positivos e menores que 16.
*/

const vezes = parseInt(prompt("Escreva quantos Numeros Deseja Fatorar : "))

for (let v = 0; v < vezes; v++) {
    let numero = parseInt(prompt("Escreva o Numero que Deseja Fatorar : "))
    let resultado = 1
    let i = 1
    while (numero < 0 || numero > 16) {
        numero = parseInt(prompt("Escreva um Numero Valido para Fatorar(0 ate 16) : "))
    }
    while (i <= numero) {
        resultado *= i
        i += 1
    }
    console.log(`O Fatorial do numero ${numero} é : ${resultado}`)
}
