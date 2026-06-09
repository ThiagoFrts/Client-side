// 6. Encontrar a posição do maior valor
// Ler 5 números inteiros e mostrar a posição onde se encontra o maior elemento do
// vetor.


let num = []
let maior = -Infinity

for (let i = 1; i < 6; i++) {
    num[i] = Number(window.prompt(`Digite o ${i}° número: `))
    if (num[i] > maior) {
        maior = num[i]
    }
}

let posM = num.indexOf(maior)
alert(`O maior número é: ${maior}, na posição ${posM}`)
























