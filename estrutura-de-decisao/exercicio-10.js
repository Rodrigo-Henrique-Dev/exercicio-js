/* 
    10 - Faça um Programa que pergunte em que turno você estuda. Peça para digitar M-matutino ou V-Vespertino ou N- Noturno. Imprima a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!" ou "Valor Inválido!", conforme o caso.
*/

const turno = prompt("Escreva o turno que estuda :(N- Noturno,V-Vespertino ou M-matutino ").toLowerCase()

if (turno === "n") {
    console.log("Boa Noite!")
}

if (turno === "v") {
    console.log("Boa Tarde!")
}

if (turno === "m") {
    console.log("Bom Dia!")
}

if (turno !== "m" && turno !== "v" && turno !== "n") {
    console.log("Valor Inválido!")
}