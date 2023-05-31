/*
    6 - Faça um programa que converta da notação de 24 horas para a notação de 12 horas. Por exemplo, o programa deve converter 14:25 em 2:25 P.M. A entrada é dada em dois inteiros. Deve haver pelo menos duas funções: uma para fazer a conversão e uma para a saída. Registre a informação A.M./P.M. como um valor ‘A’ para A.M. e ‘P’ para P.M. Assim, a função para efetuar as conversões terá um parâmetro formal para registrar se é A.M. ou P.M. Inclua um loop que permita que o usuário repita esse cálculo para novos valores de entrada todas as vezes que desejar.
*/

function conversao(n) {
    n.split("");

    let horas = parseInt(s[0] + s[1])
    let minutos = s[3] + s[4]
    let segundos = s[6] + s[7]
    let ampm = s[s.length - 2]

    if (horas >= 12 && ampm === "A") {
        horas = horas - 12
    } else if (horas < 12 && ampm === "P") {
        horas = horas + 12
    }

    if (horas < 10) {
        return (`0${horas}:${minutos}:${segundos}`)
    } else {
        return (`${horas}:${minutos}:${segundos}`)
    }
}
console.log(conversao("06:40:30AM"))