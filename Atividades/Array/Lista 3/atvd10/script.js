// 10. Trocar o maior valor pelo menor
// Ler 5 números inteiros, localizar o maior e o menor valor e trocar suas posições no
// vetor. Mostrar o vetor atualizado.

let num = [];
let maior = -Infinity
let menor = Infinity
let temp;
for (let i = 0 + 1; i <= 5; i++) {
    num[i] = Number(window.prompt(`Digite o ${i}° número: `))
    if (num[i] > maior) {
        maior = num[i]
    }
    if (num[i] < menor) {
        menor = num[i]
    }
}
let pMaior = num.indexOf(maior)
let pMenor = num.indexOf(menor)

temp = num[pMaior]
num[pMaior] = num[pMenor]
num[pMenor] = temp

alert(`VETOR ATUALIZADO
=================
${num}
`)
























