/*
    2 - Faça um programa para imprimir:
        1
        1   2
        1   2   3
        .....
        1   2   3   ...  n
    para um n informado pelo usuário. Use uma função que receba um valor n inteiro imprima até a n-ésima linha.
*/

function nesimo(n) {
    let mensagem = ""
    for (let i = 1; i <= n; i++) {
        mensagem = mensagem + " " + i
    }
    return mensagem
}

function linhas(n) {
    for (let i = 1; i <= n; i++) {
        const resultado = nesimo(i)
        console.log(resultado)
    }
}
linhas(10)