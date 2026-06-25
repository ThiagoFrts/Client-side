// 9. Função de tabuada
// Crie uma função que receba um número e imprima a tabuada dele de 1 a 10.

function tabuada(num) {
    for (let i = 0; i <= 10; i++) {
        let tab = num * i
        alert ( `${num} X ${i} = ${tab}`)
    }
}

let num = Number(window.prompt(`Digite um número para calcular a tabuada: `))
let tabuada1 = tabuada(num)
























