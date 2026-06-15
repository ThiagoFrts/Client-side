
let saldo = 0
function Depositar() {
    let n1 = Number(window.prompt(`Seu saldo atual é: R$ ${saldo}\nDigite um valor para depositar: `))
    saldo += n1
    alert("Depósito realizado com sucesso!")
}

function sacar() {
    let n2 = Number(window.prompt(`Seu saldo atual é: R$ ${saldo}\nDigite um valor para sacar: `))
    if (n2 > saldo) {
        alert(`Saque inválido. Seu saldo é: ${saldo}`)
    }
    else if (n2 < 0) {
        alert("Erro! Você não pode sacar um valor negativo.")
    }
    else {
        saldo -= n2
    }
    alert("Saque realizado com sucesso!")
}

function consultar() {
    alert(`Seu saldo atual é: ${saldo}`)
}