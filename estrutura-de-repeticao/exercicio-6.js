/*
    6 - Faça um programa que imprima na tela os números de 1 a 20, um abaixo do outro. Depois modifique o programa para que ele mostre os números um ao lado do outro.
*/

// Imprimindo um do lado do outro 

let contador = []

for (let numero = 0; numero <= 20; numero++) {
    contador = contador + "," + numero
}

console.log(contador)

/*
    // Imprimindo um embaixo do outro

    for (let numero = 0; numero <= 20; numero++) {
     console.log(numero)
    }
*/