
// 3. Mostrar apenas os números positivos
// Ler 5 números inteiros e exibir apenas os números positivos armazenados no vetor.

let num = [];

for (let i = 0; i < 5; i++) {
    num[i] = Number(window.prompt(`Digite seus números: `))

}

for (let i = 0; i < 5; i++) {
    if (num[i] > 0) {
        alert(`Os números positivos são: ${num[i]}`)
    }
}
