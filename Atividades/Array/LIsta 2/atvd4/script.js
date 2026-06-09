// 4. Copiar valores pares para outro vetor
// Ler 5 números inteiros e copiar apenas os valores pares para um segundo vetor.
// Mostrar esse novo vetor.

let num = [];
let par = []
let n1;
for (let i = 0; i < 5; i++) {
    num[i] = Number(window.prompt(`Digite seus números: `))
}

for (let i = 0; i < 5; i++) {
    if (num[i] % 2 == 0) {
        par.push(num[i])
    }

}

alert(par)