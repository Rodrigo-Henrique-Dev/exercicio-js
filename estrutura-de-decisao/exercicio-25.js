/* 
    25 - Faça um programa que faça 5 perguntas para uma pessoa sobre um crime.As perguntas são:
    "Telefonou para a vítima?"
    "Esteve no local do crime?"
    "Mora perto da vítima?"
    "Devia para a vítima?"
    "Já trabalhou com a vítima?" O programa deve no final emitir uma classificação sobre a participação da pessoa no crime.Se a pessoa responder positivamente a 2 questões ela deve ser classificada como "Suspeita", entre 3 e 4 como "Cúmplice" e 5 como "Assassino".Caso contrário, ele será classificado como "Inocente".
*/

let confirmacao = 0

const pergunta1 = prompt("Telefonou para a vítima? S-Sim ou N-Nao").toUpperCase()

if (pergunta1 === "S") {
    confirmacao++
}

const pergunta2 = prompt("Esteve no local do crime? S-Sim ou N-Nao").toUpperCase()

if (pergunta2 === "S") {
    confirmacao++
}

const pergunta3 = prompt("Mora perto da vítima? S-Sim ou N-Nao").toUpperCase()

if (pergunta3 === "S") {
    confirmacao++
}

const pergunta4 = prompt("Devia para a vítima? S-Sim ou N-Nao").toUpperCase()

if (pergunta4 === "S") {
    confirmacao++
}

const pergunta5 = prompt("Já trabalhou com a vítima? S-Sim ou N-Nao").toUpperCase()

if (pergunta5 === "S") {
    confirmacao++
}

if (confirmacao < 2) {
    console.log(" Voce é Inocente ")

} else if (confirmacao === 2) {
    console.log("Voce é Suspeito(a)")

} else if (confirmacao < 5) {
    console.log("Voce é Cumplice")
} else {
    console.log("Voce é Assassino(a)")
}