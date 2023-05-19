/*
    12 - Desenvolva um gerador de tabuada, capaz de gerar a tabuada de qualquer número inteiro entre 1 a 10. O usuário deve informar de qual numero ele deseja ver a tabuada. A saída deve ser conforme o exemplo abaixo:
*/
let multiplica = 0
const numero = parseInt(prompt("Escreva um Numero : "))
while (numero < 0 || numero > 10) {
    numero = parseInt(prompt("Escreva um Numero Valido(1 ate 10) : "))
}

for (let i = 0; i < 10; i++) {
    multiplica = numero * i
    console.log(`${numero} * ${i} = ${multiplica}`)
}

