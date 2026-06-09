// 7. Criar um vetor com os quadrados dos números
// Ler 5 números inteiros e criar um segundo vetor contendo o quadrado de cada
// elemento do primeiro vetor. Mostrar os dois vetores.


let num = [];
let quadrado = [];

for (let i = 1; i < 6; i++) {
    num[i] = Number(window.prompt(`Digite o ${i}° número: `))

}
for (let i = 1; i < 6; i++) {
    quadrado[i] = num[i] * num[i]
}
alert(`Vetor original: ${num} `)
alert(`Quadrado do vetor: ${quadrado} `)

























