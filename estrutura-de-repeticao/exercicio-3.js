/*
    3 - Faça um programa que leia e valide as seguintes informações:
    Nome: maior que 3 caracteres;
    Idade: entre 0 e 150;
    Salário: maior que zero;
    Sexo: 'f' ou 'm';
    Estado Civil: 's', 'c', 'v', 'd';
*/

let nome = prompt("Escreva seu Nome")

while (nome.length <= 3) {
    nome = prompt("Escreva um Nome com Mais de 3 Letras")
}

let idade = parseInt(prompt("Escreva Sua Idade"))

while (idade < 0 || idade > 150) {
    idade = parseInt(prompt("Escreva uma Idade Valida :"))
}

let salario = parseFloat(prompt("Escreva seu Salario"))

while (salario <= 0) {
    salario = parseFloat(prompt("Escreva um Salario Valido(acima de 0)"))
}

let genero = prompt("Escreva F-Feminino ou M-Masculino").toUpperCase()

while (genero !== "F" && genero !== "M") {
    genero = prompt("Escreva uma letra Valida (F-Feminino ou M-Masculino)").toUpperCase()
}

let estadoCivil = prompt("Escreva Estado Civil (S-Solteiro(a)\n" +
    "C-Casado(a)\n" +
    "V-Viuvo(a)\n" +
    "D-Divorciado(a)").toUpperCase()

while (estadoCivil !== "S" && estadoCivil !== "C" && estadoCivil !== "V" && estadoCivil !== "D") {
    prompt("Escreva Estado Civil Valido (S-Solteiro(a)\n" +
        "C-Casado(a)\n" +
        "V-Viuvo(a)\n" +
        "D-Divorciado(a)").toUpperCase()
}

console.log(`Nome : ${nome}\nIdade : ${idade}\nSalario : ${salario}\nGenero : ${genero}\nEstado Civil : ${estadoCivil}`)