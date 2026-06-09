// 5. Multiplicar todos os elementos por um número informado
// Ler 5 números inteiros e, em seguida, ler um número multiplicador. Multiplicar todos os
// elementos do vetor por esse valor e mostrar o resultado.

let num = []
let multiplicador;

for (let i = 1; i < 6; i++) {
    num[i] = Number(window.prompt(`Digite o ${i}° número: `))
}
multiplicador = Number(window.prompt(`Agora digte um valor para multiplicar.`))

for (let i = 1; i < 6; i++) {

    alert(`O número ${num[i]} X ${multiplicador} = ${num[i] * multiplicador}`)
}
























