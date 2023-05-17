/*
    8 - Faça um Programa que peça a idade e a altura de 5 pessoas, armazene cada informação no seu respectivo vetor. Imprima a idade e a altura na ordem inversa a ordem lida.
*/
let idade = 0
let altura = 0
for (let i = 1; i < 6; i++) {
    idade = prompt("Escreva Sua Idade :")
    altura = parseFloat(prompt("Escreva Sua Altura : "))
    console.log(`A Pessoa ${i} tem ${altura} Metros e tem ${idade} Anos `)
}

/*
como inverter a ordem nesse caso
*/
