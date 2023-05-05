/*
    17 - Faça um Programa para uma loja de tintas. O programa deverá pedir o tamanho em metros quadrados da área a ser pintada. Considere que a cobertura da tinta é de 1 litro para cada 6 metros quadrados e que a tinta é vendida em latas de 18 litros, que custam R$ 80,00 ou em galões de 3,6 litros, que custam R$ 25,00.
    Informe ao usuário as quantidades de tinta a serem compradas e os respectivos preços em 3 situações:
    A - comprar apenas latas de 18 litros;
    B - comprar apenas galões de 3,6 litros;
    C - misturar latas e galões, de forma que o desperdício de tinta seja menor. Acrescente 10% de folga e      sempre arredonde os valores para cima, isto é, considere latas cheias.
*/

const area = prompt("Escreva quantos Metros Quadrados deseja Pintar : ")
const litros = (area / 6) * 1.1
const lata = Math.ceil(litros / 18)
const valorLata = latas * 80
const galao = Math.ceil(litros / 3.6)
const valorGalao = galao * 25
let mixLatas = Math.round(litros / 18)
let mixGaloes = Math.round((litros - mixLatas * 18) / 3.6)

if (litros - (mixLatas * 18) % 3.6 !== 0) {
    mixGaloes++;

}

let mixTotal = (mixLatas * 80) + (mixGaloes * 25)

alert(`Comprando latas de 18 Litros, voce precisara de ${lata} lata(s), que custarao ${valorLata} Reais`)
alert(`Comprando galoes de 3.6 Litros, voce precisara de ${galao} galao(s), que custarao ${valorGalao} Reais`)
alert(`Misturando latas e galoes, voce precisara de ${lata} lata(s) e de ${galao} galao(oes) e custara 
${mixTotal}`)