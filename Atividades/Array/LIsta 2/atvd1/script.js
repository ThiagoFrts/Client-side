// 1. Inverter os valores
// Ler 5 números inteiros e mostrar os valores na ordem inversa da que foram digitados.

let num = [];
for (let i = 0; i < 5; i++) {
    num[i] = Number(window.prompt(`Digite seus números: `))
} 

for (let i = 4; i >= 0; i--) {
    alert(num[i])
}
