// 11. Função para verificar se é maior de idade
// Receba a idade como parâmetro e retorne true se for 18 ou mais, e false se for
// menor.

function idade(a) {
    if (a > 18) {
        return true
    }
    else{
        return false
    }
}
let a = Number(window.prompt(`Digite um número: `))
let maior = idade(a)

alert(maior)






















