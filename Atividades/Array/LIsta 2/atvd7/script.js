// // 7. Verificar se o vetor está em ordem crescente
// Ler 5 números inteiros e verificar se estão em ordem crescente. Mostrar uma
// mensagem confirmando ou não.

let num = [];
let crescente = false;
for (let i = 0; i < 5; i++) {
    num[i] = Number(window.prompt(`Digite seus números: `))
}


for (let i = 0; i < 5; i++) {
    if (num[i] > num[i + 1]) {
        crescente = true

    }

}
if (crescente == false) {
    alert(`Seus números estão em ordem crescente. `)
}
else {
    (alert(`Seus números não estão em ordem crescente. `))

}