// 8. Verificar se existem números repetidos
// Ler 5 números inteiros e verificar se algum valor aparece mais de uma vez no vetor.


let num = []
let igual = false

for (let i = 0; i < 5; i++) {
    num[i] = Number(window.prompt(`Digite seus números: `))
}

for (let i = 0; i < 5; i++) {
    for (let j = i + 1; j < 5; j++) {
        if (num[j] == num[i]) {
            igual = true
            alert(`Você digitou números iguais.`)
            break 
        }
        else { alert(`Você não digitou números iguais.`) }

    }
}




























