/*
    8 - Faça uma função que informe a quantidade de dígitos de um determinado número inteiro informado.
*/

function contador(numero) {
    numero = numero.toString()
    let quantidade = numero.length
    return quantidade
}
quantidadeDigitos = contador(54333)
console.log(quantidadeDigitos)