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

function nesimo(n) {
    let mensagem = ""
    for (let i = 0; i < n; i++) {
        mensagem = mensagem + " " + n
    }
    return mensagem
}

function linhas(n) {
    for (let i = 1; i <= n; i++) {
        const resultado = nesimo(i)
        console.log(resultado)
    }
}
linhas(5)