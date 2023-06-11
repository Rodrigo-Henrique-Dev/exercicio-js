/*
    14 - Quadrado mágico. Um quadrado mágico é aquele dividido em linhas e colunas, com um número em cada posição e no qual a soma das linhas, colunas e diagonais é a mesma. Por exemplo, veja um quadrado mágico de lado 3, com números de 1 a 9:

    8  3  4 
    1  5  9
    6  7  2
     
    Elabore uma função que identifica e mostra na tela todos os quadrados mágicos com as características acima. Dica: produza todas as combinações possíveis e verifique a soma quando completar cada quadrado. Usar um vetor de 1 a 9 parece ser mais simples que usar uma matriz 3x3.
*/


function ehQuadradoValido(quadrado) {
    // Linhas
    if (quadrado[0] + quadrado[1] + quadrado[2] !== 15) return false;
    if (quadrado[3] + quadrado[4] + quadrado[5] !== 15) return false;
    if (quadrado[6] + quadrado[7] + quadrado[8] !== 15) return false;

    //Colunas
    if (quadrado[0] + quadrado[3] + quadrado[6] !== 15) return false;
    if (quadrado[1] + quadrado[4] + quadrado[7] !== 15) return false;
    if (quadrado[2] + quadrado[5] + quadrado[8] !== 15) return false;

    //Diagonais
    if (quadrado[0] + quadrado[4] + quadrado[8] !== 15) return false;
    if (quadrado[2] + quadrado[4] + quadrado[6] !== 15) return false;

    //Todos os Numeros 
    let soma = 0
    for (let i = 0; i < quadrado.length; i++) {
        soma = soma + quadrado[i]
    }
    if (soma !== 45) return false;

    return true
}

function imprimiQuadrado(numeros) {
    console.log(numeros[0] + " " + numeros[1] + " " + numeros[2])
    console.log(numeros[3] + " " + numeros[4] + " " + numeros[5])
    console.log(numeros[6] + " " + numeros[7] + " " + numeros[8])
}

//---------------------------------------------------------------------------------------//

const numeros = [8, 3, 4, 1, 0, 9, 6, 7, 2]
let resposta = ehQuadradoValido(numeros)

if (resposta) {
    imprimiQuadrado(numeros)
} else {
    console.log(`A sequencia de numeros ${numeros}, nao da um Quadrado Magico`)
}


//---------------------------------------------------------------------------------------//