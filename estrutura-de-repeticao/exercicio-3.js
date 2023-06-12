/*
    3 - Faça um programa que leia e valide as seguintes informações:
    Nome: maior que 3 caracteres;
    Idade: entre 0 e 150;
    Salário: maior que zero;
    Sexo: 'f' ou 'm';
    Estado Civil: 's', 'c', 'v', 'd';
*/

let nome = prompt("Escreva Seu Nome :")
while (nome.length === 3) {
    nome = prompt("Escreva um Nome Valido (Maior que 3 Letras)")
}

let idade = parseInt(prompt("Escreva sua Idade : "))
while (idade < 0 || idade > 150) {
    idade = parseInt(prompt("Escreva uma Idade Valida (0 ate 150)"))
}

let salario = parseInt(prompt("Escreva Seu Salario : "))
while (salario <= 0) {
    salario = parseInt(prompt("Escreva um Salario Valido (Maior que 0) : "))
}

let sexo = prompt("Escreva M-Masculino ou F-Feminino").toLowerCase()
while (sexo !== "m" && sexo !== "f") {
    sexo = prompt("Escreva M-Masculino ou F-Feminino").toLowerCase()
}

let estadoCivil = prompt("Escreva seu Estado Civil (s-Solteiro, c-Casado, v-Viuvo, d-Divorciado").toLowerCase()
while (estadoCivil !== "s" && estadoCivil !== "c" && estadoCivil !== "v" && estadoCivil !== "d") {
    estadoCivil = prompt("Escreva seu Estado Civil (s-Solteiro, c-Casado, v-Viuvo, d-Divorciado").toLowerCase()
}

console.log(`NOME : ${nome}\nIDADE : ${idade}\nSALARIO : ${salario}\nSEXO : ${sexo}\nESTADO CIVIL : ${estadoCivil} `)
