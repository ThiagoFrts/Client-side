// 13. Contar números pares de 1 a N
// Crie uma função que receba um número n e retorne quantos números pares existem
// de 1 até n.

let cont = 0
function par(a) {
    for (let i = 0; i < a; i++)
        if (i % 2 == 0) {
            cont ++
        }
        return cont
}
let n = Number(window.prompt(`Digite um número para contar quantos pares eistem até ele: `))
let pares = par(n)

alert(pares)






















