/*
    9 - Faça um Programa que leia três números e mostre-os em ordem decrescente.
*/

const numero1 = parseInt(prompt(" Escreva o Primeiro Numero : "))
const numero2 = parseInt(prompt(" Escreva o Segundo Numero : "))
const numero3 = parseInt(prompt(" Escreva o Terceiro Numero : "))
const conjunto = [numero1, numero2, numero3]

conjunto.reverse()
console.log(`a ordem decrescente é : ${conjunto}`)
