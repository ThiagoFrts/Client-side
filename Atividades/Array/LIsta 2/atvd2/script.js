// 2. Verificar existência de número
// Ler 5 números inteiros e perguntar ao usuário um número. Verificar se esse número
// está no vetor e mostrar uma mensagem informando se foi encontrado ou não.

let num = [];
let n1;
let encontrou = false;
for (let i = 0; i < 5; i++) {
    num[i] = Number(window.prompt(`Digite seus números: `))
}

n1 = Number(window.prompt(`Agora digite um número: `))


for (let i = 0; i < 5; i++) {
    if (num[i] == n1) {
        encontrou = true;
    }

}
if (encontrou) {
    alert(`Número encontrado.`);
} else {
    alert(`Número não encontrado.`);
}
