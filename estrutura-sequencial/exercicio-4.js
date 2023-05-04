// 4 - Faça um Programa que peça as 4 notas bimestrais e mostre a média.

let soma = 0 
for(let i = 1; i < 4; i++){
	let notas = parseInt(prompt(`Escreva Sua ${i} Nota : `))
	soma = soma + notas 
}

let media = soma / 4
console.log(`Sua media é : ${media}`)