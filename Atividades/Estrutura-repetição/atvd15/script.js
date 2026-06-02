// 15. Validar número entre 1 e 10 com do-while
// Peça ao usuário que digite um número entre 1 e 10. Enquanto ele digitar fora desse intervalo,
// repita a solicitação.

let a;
do {
    a = Number(window.prompt(`Digite um número: `))
}
while (a < 0 || a > 10)



