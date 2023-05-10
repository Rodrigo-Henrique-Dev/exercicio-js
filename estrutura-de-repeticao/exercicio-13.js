/*
    13 - Faça um programa que peça dois números, base e expoente, calcule e mostre o primeiro número elevado ao segundo número. Não utilize a função de potência da linguagem.
*/

const base = parseInt(prompt("Escreva a Base que Deseja : "))
const expoente = parseInt(prompt("Escreva o Expoente que Deseja : "))

console.log(`A Base : ${base} elevada a ${expoente} é : ${base ** expoente}`)