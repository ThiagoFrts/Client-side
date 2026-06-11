// 11. Rotacionar o vetor para a direita
// Ler 5 números inteiros e mover todos os elementos uma posição para a direita. O
// último elemento deve passar para a primeira posição.

let num = [];


for (let i = 0; i < 5; i++) {
    num[i] = Number(window.prompt(`Digite o ${i + 1}° número: `))
}
let last = num.pop()
num.unshift(last)
alert(num)

























