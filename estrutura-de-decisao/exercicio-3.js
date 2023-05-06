/*
    3 - Faça um Programa que verifique se uma letra digitada é "F" ou "M". Conforme a letra escrever: F - Feminino, M - Masculino, Sexo Inválido.
*/

let generoInput = prompt(" Escreva M-Masculino ou F-Feminino ")
let genero = generoInput.toLowerCase()

if (genero === "m") {
    console.log("Seu genero é Masculino")
}

if (genero === "f") {
    console.log("Seu genero é Feminino")
}

if (genero !== "m" && genero !== "f") {
    console.log("Genero Invalido")
}