/*
    13 - Faça um Programa que leia um número e exiba o dia correspondente da semana. (1-Domingo, 2- Segunda, etc.), se digitar outro valor deve aparecer valor inválido.
*/

const numero = parseInt(prompt("Escreva um numero : ") || "")
let dia = ""

if (numero == 1) {
    dia = "Domingo"
}

if (numero == 2) {
    dia = "Segunda"
}

if (numero == 3) {
    dia = "Terca"
}

if (numero == 4) {
    dia = "Quarta"
}

if (numero == 5) {
    dia = "Quinta"
}

if (numero == 6) {
    dia = "Sexta"
}

if (numero == 7) {
    dia = "Sabado"
}

if (dia === "") {
    alert("Valor Invalido")
} else {
    alert(`O dia correspondente ao numero ${numero} é : ${dia}`)
}