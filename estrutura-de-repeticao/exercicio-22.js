/*
    22 -Altere o programa de cálculo dos números primos, informando, caso o número não seja primo, por quais número ele é divisível
*/

const numero = parseInt(prompt("Escreva um Numero Para Teste : "))
let ehPrimo = true
let divisores = ""

for (let i = 2; i < numero; i++) {

    if (numero % i === 0) {
        ehPrimo = false
        break
    }
}

for (let divisor = 1; divisor < numero; divisor++) {

    if (numero % divisor === 0) {
        divisores = divisores + "," + divisor.toString()
    }
}

if (ehPrimo === true) {
    console.log(`O numero ${numero} é Primo`)
} else {
    console.log(`O ${numero} nao é Primo Os divisores sao : ${divisores}`)
}