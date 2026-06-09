// // 6. Substituir negativos por zero
// Ler 5 números inteiros e substituir os valores negativos por zero. Mostrar o vetor
// resultante.


let num = [];

for (let i = 0; i < 5; i++) {
    num[i] = Number(window.prompt(`Digite seus números: `))
}

for (let i = 0; i < 5; i++) {
    if (num[i] < 0) {
        num[i] = 0
    }

}

alert(num)



