// 5. Calcular o produto dos elementos
// Ler 5 números inteiros e calcular o produto (multiplicação) de todos eles. Mostrar o
// resultado.

let num = [];
let n1;
let mult = 1
for (let i = 0; i < 5; i++) {
    num[i] = Number(window.prompt(`Digite seus números: `))
}


for (let i = 0; i < 5; i++) {

    mult = num[i] * mult

}
alert(`A multiplicação de todos os números digitados é: ${mult}`)


