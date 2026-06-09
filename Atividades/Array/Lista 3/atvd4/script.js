// 4. Calcular a diferença entre o maior e o menor valor
// Ler 5 números inteiros, identificar o maior e o menor valor e mostrar a diferença entre
// eles.

let num = []
let maior = -Infinity;
let menor = Infinity;

alert("Digite 5 valores para descobrir o maior, \no menor e a diferença entre eles.")

for (let i = 1; i < 6; i++) {
    num[i] = Number(window.prompt(`Digite o ${i}° número: `))
    if (num[i] > maior) {
        maior = num[i]
    }

    if (num[i] < menor) {
        menor = num[i]

    }

}
alert(`O maior número digitado é: ${maior}\nO menor número digitado é: ${menor}
        \nA diferença entre eles é: ${maior - menor}\n`)
























