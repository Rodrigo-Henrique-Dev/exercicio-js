/*
    2 - Faça um programa que leia um nome de usuário e a sua senha e não aceite a senha igual ao nome do usuário, mostrando uma mensagem de erro e voltando a pedir as informações.
*/

let nome = prompt("Escreva um Nome de Usuario : ").toLowerCase()
let senha = prompt("Escreva sua Senha : ").toLowerCase()

while (senha === nome) {
    senha = prompt("Escreva uma Senha diferente de seu Usuario : ").toLowerCase()
}

console.log("Seu Cadastro Foi Criado ")