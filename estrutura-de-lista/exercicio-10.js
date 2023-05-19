/*
    10 - Faça um Programa que leia dois vetores com 10 elementos cada. Gere um terceiro vetor de 20 elementos, cujos valores deverão ser compostos pelos elementos intercalados dos dois outros vetores.
*/

let par = []
let impar = []
let numeros = []
let contadorPar = 0
let contadorImpar = 0
for (let i = 0; i < 20; i++) {
    const numero = parseInt(prompt("Escreva um Numero : "))
    if (numero % 2 === 0) {
        par.push(numero)
    } else {
        impar.push(numero)
    }
}
for (let i2 = 1; i2 <= 20; i2++) {
    if (i2 % 2 === 0) {
        numeros[i2] = par[contadorPar]
        contadorPar++
    } else {
        numeros[i2] = impar[contadorImpar]
        contadorImpar++
    }
}
console.log(numeros)


/*
como intercalar os dois vetores 
*/