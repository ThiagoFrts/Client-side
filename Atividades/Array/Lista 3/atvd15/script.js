// 15. Encontrar o segundo maior valor
// Ler 5 números inteiros e mostrar qual é o segundo maior número armazenado no vetor.

let num = [];
let maior = -Infinity

for (let i = 0; i < 5; i++) {
    num[i] = Number(window.prompt(`Digite o ${i + 1}° número: `))
    if(num[i] > maior){
        maior = num[i]
    }
}

num.sort((a,b) => a-b)
let maior2 = num[3]

alert(`O maior número é: ${maior}\nO segundo maior é: ${maio2}`)

























