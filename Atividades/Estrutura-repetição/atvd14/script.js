// 14. Fatorial com while
// Crie um programa que calcule o fatorial de um número digitado pelo usuário, usando a
// estrutura while.
// (Ex: fatorial de 5 é 5 × 4 × 3 × 2 × 1 = 120)


let fat = 1;
let num = Number(window.prompt(`Digite um número: `))

while (num > 1) {
    fat = num * fat
    num--

}
alert(`O fatorial do número digitado é: ${fat}`)

