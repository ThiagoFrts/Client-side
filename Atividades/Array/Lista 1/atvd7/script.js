
let num = [];
let maior = 0


for (let i = 0; i < 5; i++) {
    num[i] = Number(window.prompt(`Digite seus números: `))
    if( num[i] > maior){
        maior = num[i]

    }

    }


for (let i = 0; i < 5; i++) {
    alert(`O maior número digitado é: ${maior}`)
}



