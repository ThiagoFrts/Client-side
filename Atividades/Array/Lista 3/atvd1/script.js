// 1. Encontrar o menor número
// Ler 5 números inteiros e mostrar qual foi o menor número digitado.

let num = [];
let menor = Infinity;
for (let i = 0; i < 5; i++) {
    num[i] = Number(window.prompt(`Digite seus números: `))
    if (num[i] < menor) {
        menor = num[i]
    }
}
alert(`O menor número digitado é: ${menor}`)


