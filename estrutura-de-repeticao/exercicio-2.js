/*
    2 - Faça um programa que leia um nome de usuário e a sua senha e não aceite a senha igual ao nome do usuário, mostrando uma mensagem de erro e voltando a pedir as informações.
*/

let nota = parseInt(prompt(" Escreva a Nota : "))

for (let i = 0; nota < 0 || nota > 10; i++) {
    nota = parseInt(prompt(" Escreva a Nota valida entre (0 a 10):"))
}

console.log(`Sua nota foi : ${nota}`)