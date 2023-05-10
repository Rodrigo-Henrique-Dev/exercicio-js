/*
    12 - Desenvolva um gerador de tabuada, capaz de gerar a tabuada de qualquer número inteiro entre 1 a 10. O usuário deve informar de qual numero ele deseja ver a tabuada. A saída deve ser conforme o exemplo abaixo:
        Tabuada de 5:
        5 X 1 = 5
        5 X 2 = 10
        5 X 10 = 50 
*/

const numero = parseInt(prompt("Escreva o Numero que deseja ver a Tabuada"))

for (let i = 0; i <= 10; i++) {
    console.log(`${numero} X ${i} = ${i * numero}`)
}