/* 
    BONUS : Faca uma estrutura que mostre todas as combinacoes dos numeros de 1 ate 3; 
    como no exemplo abaixo : 

    1 - 1 - 1
    1 - 2 - 2
    2 - 2 - 2
    ...
*/

for (let numero1 = 1; numero1 <= 3; numero1++) {
    for (let numero2 = 1; numero2 <= 3; numero2++) {
        for (let numero3 = 1; numero3 <= 3; numero3++) {
            console.log(`${numero1} - ${numero2} - ${numero3}`)
        }
    }
}