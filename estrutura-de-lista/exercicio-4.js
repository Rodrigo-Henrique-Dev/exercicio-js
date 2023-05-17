/*
    4 - Faça um Programa que leia um vetor de 10 caracteres, e diga quantas consoantes foram lidas. Imprima as consoantes.
*/

const vogais = ["a", "e", "i", "o", "u"]
const consoantes = []

for (let i = 0; i < 10; i++) {
    const palavra = prompt("Escreva uma Letra :")
    if (vogais.includes(palavra) === false) {
        consoantes.push(palavra)
    }
}

console.log({ consoantes: consoantes, total: consoantes.length })


