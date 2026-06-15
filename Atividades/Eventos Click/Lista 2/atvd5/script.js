
let cont = 0
let vName = []

function addName() {
    let nome = prompt("Digite um nome para adicionar: ")
    vName.push(nome)
    cont += 1
}

function mostrarName() {

    alert(`Os nomes adicionados são: ${vName}\n`)

}

function contName() {
    alert(`A quantidade de nomes é: ${cont}`)
}