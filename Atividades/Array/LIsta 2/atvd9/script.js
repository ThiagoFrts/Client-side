// 9. Somar dois vetores
// Ler dois vetores de 5 posições cada (valores inteiros) e criar um terceiro vetor com a
// soma dos elementos correspondentes. Mostrar o vetor resultante.

let num = [];
let num2 = [];
let v3 = []
for (let i = 0; i < 5; i++) {
    num[i] = Number(window.prompt(`Digite valores para o primeiro vetor: `))
}

for (let i = 0; i < 5; i++) {
    num2[i] = Number(window.prompt(`Digite valores para o segunddo vetor: `))
}

for( let i = 0; i < 5; i++){
    v3[i] = num[i] + num2[i]
    alert(`1° Vetor  ${num[i]} + 2° Vetor${num2[i]} = ${v3}`)
} 




