
let num = [];
let par = 0;

for (let i = 0; i < 5; i++) {
    num[i] = Number(window.prompt(`Digite seus números: `))
    if (num[i] % 2 == 0) {
        par++

    }
}

for (let i = 0; i < 5; i++) {
    alert(`Os números pares digitados são: ${par}`)
}



