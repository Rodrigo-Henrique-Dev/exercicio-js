/*
    13 - Faça um programa que peça dois números, base e expoente, calcule e mostre o primeiro número elevado ao segundo número. Não utilize a função de potência da linguagem.
*/

let base = parseInt(prompt("Escreva a Base : "))
let expoente = parseInt(prompt("Escreva o Expoente : "))
let resultado = 1

for (let i = 1; i <= expoente; i++) {
    resultado = base * base
    resultado = base * resultado
}

console.log({ RESULTADO: resultado })

/* 
nao funciona mesmo a estrutura estando lgicamente correta,
ou erro na estrutura nao encontrado
*/