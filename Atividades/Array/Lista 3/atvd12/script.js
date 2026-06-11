// 12. Rotacionar o vetor para a esquerda
// Ler 5 números inteiros e mover todos os elementos uma posição para a esquerda. O
// primeiro elemento deve passar para a última posição.
// Exemplo:
// [10, 20, 30, 40, 50]
// Resultado:
// [20, 30, 40, 50, 10]


let num = [];

for (let i = 0; i < 5; i++) {
    num[i] = Number(window.prompt(`Digite o ${i + 1}° número: `))
}
let start = num.shift()
num.push(start)
alert(num)


























