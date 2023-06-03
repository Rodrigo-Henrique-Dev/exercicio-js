/*
    9 - Reverso do número. Faça uma função que retorne o reverso de um número inteiro informado. Por exemplo: 127 -> 721.
*/

function inverterNumero(numero) {
    numero = numero.toString()
    let stringInvertida = numero.split('').reverse().join('')

    console.log(stringInvertida)
}

inverterNumero(1234)