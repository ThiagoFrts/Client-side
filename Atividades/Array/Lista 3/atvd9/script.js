// 9. Somar apenas os números pares
// Ler 5 números inteiros e calcular a soma apenas dos números pares armazenados no
// vetor.

let num = []
let soma = 0
let par = false

for (let i = 0; i < 5; i++) {
    num[i] = Number(window.prompt(`Digite seus números`))
    if (num[i] % 2 == 0) {
        soma += num[i]
    }
}
alert(`A soma dos números pares digitados é: ${soma}`)
























