
let soma = 0
let vNum = []
maior = -Infinity

function addNota() {
    let num = Number(prompt("Digite um nota para adicionar: "))
    vNum.push(num)
    soma += num
    if (num > maior) {
        maior = num
    }
}

function media() {
    med = soma / vNum.length
    alert(`A média é: ${med}\n`)
}

function mNota() {
    alert(`A maior nota é: ${maior}`)
}