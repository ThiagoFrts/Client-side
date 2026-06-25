// 8. Função para descobrir o maior número
// Crie uma função que receba dois números inteiros e retorne o maior entre eles.

function maior(a, b) {
    if (a > b) {
        return a
    }
    else{
        return b 
    }
}
let a = Number(window.prompt(`Digite um número: `))
let b = Number(window.prompt(`Digite outro número: `))
let maior1 = maior(a,b)

alert(`O maior número é: ${maior1}`)






















