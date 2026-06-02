// // 13. Verificar número ímpar com do-while
// Faça um programa que continue pedindo números ao usuário até que ele digite um número
// ímpar.

let a;
do {
    a = Number(window.prompt(`Digite um número: `))
}
while (a % 2 == 0)
alert(`O número ${a} é ímpar`)