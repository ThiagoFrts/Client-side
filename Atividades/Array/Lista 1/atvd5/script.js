// ● Ler 5 números inteiros, multiplicar cada um por 2 e exibir os resultados.

let num = [];
let dobro = [];

for (let i = 0; i < 5; i++) {
    num[i] = Number(window.prompt(`Digite seus números: `))
    dobro[i] = num[i] * 2
}

for (let i = 0; i < 5; i++) {
    alert(`O dobro dos números digitados: ${dobro[i]}`)
}


