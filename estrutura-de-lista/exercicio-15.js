/*
    15 - Faça um programa que leia um número indeterminado de valores, correspondentes a notas, encerrando a entrada de dados quando for informado um valor igual a -1 (que não deve ser armazenado). Após esta entrada de dados, faça:
    Mostre a quantidade de valores que foram lidos;
    Exiba todos os valores na ordem em que foram informados, um ao lado do outro;
    Exiba todos os valores na ordem inversa à que foram informados, um abaixo do outro;
    Calcule e mostre a soma dos valores;
    Calcule e mostre a média dos valores;
    Calcule e mostre a quantidade de valores acima da média calculada;
    Calcule e mostre a quantidade de valores abaixo de sete;
    Encerre o programa com uma mensagem;
*/

let notas = [0]
let contadorCima = 0
let contadorBaixo = 0
let posicao = 0
let inverso = null
let soma = 0
let media = 0


for (let i = 0; i < notas.length; i++) {
    const nota = parseFloat(prompt("Escreva uma nota :"))
    notas.push(nota)
    if (nota === -1) {
        break;
    }
    soma = soma + nota
    media = soma / i
    if (media < 7) {
        contadorBaixo++
    } else {
        contadorCima++
    }
    posicao = notas.length()
    inverso = notas.reverse()
}
console.log({ array: notas, soma: soma, media: media, abaixo: contadorBaixo, acima: contadorCima })

/* por que nao consigo usar o notas.length */