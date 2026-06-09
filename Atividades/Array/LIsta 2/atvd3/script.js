// 3. Contar quantas vezes um número aparece
// Ler 5 números inteiros e perguntar ao usuário um número. Mostrar quantas vezes esse
// número aparece no vetor.


let num = [];
let n1;
let encontrou = false;
let acho = 0;
for (let i = 0; i < 5; i++) {
    num[i] = Number(window.prompt(`Digite seus números: `))
}

n1 = Number(window.prompt(`Agora digite um número: `))


for (let i = 0; i < 5; i++) {
    if (num[i] == n1) {
        encontrou = true;
        acho++
    }

}
if (encontrou) {
    alert(`Número encontrado. x${acho}`);
} else {
    alert(`Número não encontrado.`);
}
