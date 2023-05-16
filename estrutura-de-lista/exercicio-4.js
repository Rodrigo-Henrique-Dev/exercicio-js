/*
    4 - Faça um Programa que leia um vetor de 10 caracteres, e diga quantas consoantes foram lidas. Imprima as consoantes.
*/
let consoante = 0
const vogais = ["a", "e", "i", "o", "u"]
let palavra = prompt("Escreva 10 Letras :")
while (palavra.length < 10) {
    palavra = prompt("Escreva 10 Letras :")
}

if (palavra.includes(vogais) === false) {
    consoante += 1
}

console.log(consoante)

/* 
como separar a palvra para verificacao,
*/
