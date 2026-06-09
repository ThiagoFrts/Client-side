// 2. Contar números ímpares
// Ler 5 números inteiros e informar quantos deles são ímpares.


let num = [];
let impar = 0;
for (let i = 0; i < 5; i++) {
    num[i] = Number(window.prompt(`Digite seus números: `))
}

for (let i = 0; i < 5; i++) {
    if (num[i] % 2 != 0) {
        impar++
        
    }
}

alert(`Os números ímpares são: ${impar}`)


