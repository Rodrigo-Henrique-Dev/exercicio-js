// 7 - Faça um Programa que calcule a área de um quadrado, em seguida mostre o dobro desta área para o usuário.

const base = parseInt(prompt("Escreva o Tamanho da Base do Quadrado : "))
const altura = parseInt(prompt("Escreva o Tamanho da Altura do Quadrado : "))
const area = base * altura

console.log(`O Dobro da Area ${area} é : ${area * 2}`)