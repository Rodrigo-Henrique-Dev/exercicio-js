/*
    33 - O Departamento Estadual de Meteorologia lhe contratou para desenvolver um programa que leia as um conjunto indeterminado de temperaturas, e informe ao final a menor e a maior temperaturas informadas, bem como a média das temperaturas.
*/

let maior = null
let menor = null
let soma = null
let media = null
for (let i = 0; i < temperaturas; i++) {
    let graus = parseInt(prompt("Escreva uma Temperatura de cada vez : "))
    soma = soma + graus
    media = soma / temperaturas
    if (graus > maior) {
        maior = graus
    }
    if (menor === null || graus < menor) {
        menor = graus
    }
}

console.log(`A soma de todas as temperaturas é : ${soma}\n` +
    `A menor temperatura é : ${menor}\n` +
    `A maior temperatura é : ${maior}`)