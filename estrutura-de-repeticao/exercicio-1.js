/*   
   1 - Faça um programa que peça uma nota, entre zero e dez. Mostre uma mensagem caso o valor seja inválido e continue pedindo até que o usuário informe um valor válido.
*/

let nota = parseInt(prompt(" Escreva a Nota : "))

for (let i = 0; nota < 0 || nota > 10; i++) {
    nota = parseInt(prompt(" Escreva a Nota valida entre (0 a 10):"))
}

console.log(`Sua nota foi : ${nota}`)