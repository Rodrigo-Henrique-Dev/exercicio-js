/*
    10 - Faça um Programa que leia dois vetores com 10 elementos cada. Gere um terceiro vetor de 20 elementos, cujos valores deverão ser compostos pelos elementos intercalados dos dois outros vetores.
*/

let vetor = []
for (let i = 0; i < 10; i++) {
    vetor.push(prompt("Escreva um Numero : "))
}
console.log(vetor)

let vetor2 = []
for (let indice = 0; indice < 10; i++) {
    vetor2.push(prompt("Escreva um Numero : "))
}
console.log(vetor2)

/*
como intercalar os dois vetores 
*/