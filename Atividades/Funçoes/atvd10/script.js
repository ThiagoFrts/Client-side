// 10. Função de fatorial
// Crie uma função que receba um número inteiro e retorne o fatorial dele.

let total = 1
function fatorial(num) {
    for (i = 1; i < num; i++) {
        total = total * i 
        `${total}`
    }
}
let num = Number(window.prompt(`Digite um número para calcular o fatorial: `))
let fat1 = fatorial(num)





















