// ✅ 8. Número positivo com do-while
// Escreva um programa que peça ao usuário para digitar um número positivo. Enquanto ele
// digitar um número negativo, o programa deve continuar pedindo um novo valor.

let a;
do {
    a = Number(window.prompt(`Digite um número positivo: `))
}

    while(a<=0);
