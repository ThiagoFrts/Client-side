// ✅ 12. Média de 5 notas com for
// Crie um programa que leia 5 notas de um aluno usando a estrutura for, calcule a média e
// mostre o resultado.

let a;
let b = 0
for (let i = 1; i <= 5; i++) {
    a = Number(window.prompt(`Digite suas notas: `))
    b+=a


}

alert(`A média é: ${b/5}`)
