// 10 - Faça um Programa que peça a temperatura em graus Celsius, transforme e mostre em graus Fahrenheit.
// f = (c * 9 / 5 ) + 32 

const c = parseInt(prompt("Escreva a Temperatura em Celsius que deseja Transformar : "))
const f =  (c * 9 / 5) + 32 

console.log(`A temperatura ${c} Celsius em Fahrenheit é de : ${f} Graus`)