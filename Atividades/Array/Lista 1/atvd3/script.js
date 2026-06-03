let num = [];
let soma = 0

for (let i = 0; i < 5; i++) {
    num[i] = Number(window.prompt(`Digite seus números: `))
    soma = soma + num[i]
    
}

for (let i = 0; i < 5; i++) {
    alert(`A soma é ${soma}`)
}
