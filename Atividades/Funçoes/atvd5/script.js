// 5. Função de verificação de par
// Crie uma função que receba um número inteiro e retorne true se for par, e false se
// for ímpar.

function par(a) {
    return a % 2 == 0
}

let a = Number(window.prompt(`Digite um número para saber se ele é par: `))
if (par(a)) {
    alert(`True`)
}

else {
    alert(`False`)
}



















