/*    
    16 - A série de Fibonacci é formada pela seqüência 0,1,1,2,3,5,8,13,21,34,55,... Faça um programa que gere a série até que o valor seja maior que 500.
*/

let a = 0
let b = 1
let resultado = 0

for (let i = 1; i < 500; i++) {
    resultado = a + b;
    a = b
    b = resultado
    console.log(resultado)
}