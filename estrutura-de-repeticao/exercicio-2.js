/*
    2 - Faça um programa que leia um nome de usuário e a sua senha e não aceite a senha igual ao nome do usuário, mostrando uma mensagem de erro e voltando a pedir as informações.
*/

let usuario = prompt(" Escreva o seu Usuario : ").toLowerCase()
let senha = prompt("Escreva a sua Senha : ").toLowerCase()

for (let i = 0; usuario === senha; i++) {
    usuario = prompt(" Escreva um Login Diferente da Senha :").toLowerCase()
    senha = prompt("Escreva sua Senha Diferente do Login :").toLowerCase()
}

console.log("Seu cadastro Foi Criado : ")