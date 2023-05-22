/*
    17 - Em uma competição de salto em distância cada atleta tem direito a cinco saltos. O resultado do atleta será determinado pela média dos cinco valores restantes. Você deve fazer um programa que receba o nome e as cinco distâncias alcançadas pelo atleta em seus saltos e depois informe o nome, os saltos e a média dos saltos. O programa deve ser encerrado quando não for informado o nome do atleta. A saída do programa deve ser conforme o exemplo abaixo:
*/

let soma = 0
let array = []
let media = 0
let nome = ""
nome = prompt("Escreva o nome do atleta : ")
while (nome === "") {
    return;
}
for (let i = 0; i < 5; i++) {
    let salto = parseInt(prompt("Escreva a Altura do Salto : "))
    soma = soma + salto
    array.push(salto)
    media = salto / 5
}
console.log({ nome: nome, salto: array, soma: soma, media: media })