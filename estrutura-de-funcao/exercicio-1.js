/*
    1- Faça um programa para imprimir:
        1
        2   2
        3   3   3
        .....
        n   n   n   n   n   n  ... n
    para um n informado pelo usuário. Use uma função que receba um valor n inteiro e imprima até a n-ésima 
    linha.
*/

function sequencia(numero) {
    let mensagem = ""
    for (let i = 1; i <= numero; i++) {
        mensagem = mensagem + " " + numero
    }
    return mensagem
}

function linhas(numero) {
    for (let i = 1; i <= numero; i++) {
        const resultado = sequencia(i)
        console.log(resultado)
    }
}

linhas(10)