// 14. Somar elementos das posições ímpares
// Ler 5 números inteiros e calcular a soma dos elementos que estão nas posições
// ímpares do vetor.


let num = [];
let quadrado = [];
let soma = 0;

for (let i = 0; i < 5; i++) {
    num[i] = Number(window.prompt(`Digite o ${i + 1}° número: `))
    if (i % 2 == !0) {
        soma += num[i]
    }
}

alert(`A soma dos elementos das posições ímpares é: ${soma}`)

























