
let soma = 0
let vNum = []

function addNum() {
    let num = Number(prompt("Digite um número para adicionar: "))
    vNum.push(num)
    soma += num
}

function mostarVetor() {

    alert(`Os números adicionados são: ${vNum}\n`)

}

function mostarSoma() {
    alert(`A soma dos números é: ${soma}`)
}