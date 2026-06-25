// 2. Função de soma
// Crie uma função que receba dois números inteiros e retorne a soma deles.

function soma(num1, num2) {

    return num1 + num2

}

let num1 = Number(window.prompt(`Digite um número: `))
let num2 = Number(window.prompt(`Digite outro número: `))
let resultado = soma(num1, num2)

alert(`A soma dos números é: ${resultado}`)



