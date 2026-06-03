
let num = [];
let negativo;

for (let i = 0; i < 5; i++) {
    num[i] = Number(window.prompt(`Digite seus números: `))

}

for (let i = 0; i < 5; i++) {
    if (num[i] < 0)
        alert(`Posição do número negativo: [${i}] = ${num[i]}`)
}



