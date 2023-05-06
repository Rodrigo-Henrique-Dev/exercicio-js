/*
    4 - Faça um Programa que verifique se uma letra digitada é vogal ou consoante.
*/

const letra = prompt("Escreva qualquer letra : ").toLowerCase()
const vogal = ["a", "e", "i", "o", "u"]
let resultado = vogal.includes(letra)

if (resultado) {
    console.log(` A letra ${letra} é uma vogal `)
} else {
    console.log(` A letra ${letra} é uma consoante `)
}