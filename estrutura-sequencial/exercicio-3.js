// 3 - Faça um Programa que peça dois números e imprima a soma.

let soma = 0 

for(let i = 0; i < 2; i++){
	let numero = parseInt(prompt("Escreva um numero : "))
	soma = soma + numero     
}

console.log(`A soma dos numeros da : ${soma}`)