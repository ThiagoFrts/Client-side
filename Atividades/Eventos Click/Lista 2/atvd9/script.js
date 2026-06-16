
let vNum = []
maior = -Infinity
menor = Infinity

function inserirNumero() {
    let num = Number(prompt("Digite um número para adicionar: "))
    vNum.push(num)
    if (num > maior) {
        maior = num
    }
    if (num < menor) {
        menor = num
    }
}

function mostrarMenor() {
    alert(`A menor número é: ${menor}`)
}

function mostrarMaior() {
    alert(`A maior número é: ${maior}`)
}