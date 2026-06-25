// Atividade 2 – Contador de Mensagens
// Enunciado
// Agora a empresa deseja saber quantas mensagens foram exibidas. Cada nova
// mensagem deve possuir uma numeração automática.
// Requisitos
// • Criar um botão chamado Adicionar.
// • Utilizar uma variável contador.
// • Exibir:
// Mensagem 1
// Mensagem 2
// Mensagem 3
// ...
// • Cada mensagem deve ser criada dinamicamente utilizando appendChild().


let cont = 0
let botao = window.document.getElementById("btn")
let msg = window.document.getElementById("msg")

botao.addEventListener("click", clicar)

function clicar() {
    let adicionar = document.createElement("p")
    adicionar.textContent = `Bem-vindo ao sistema! ${cont += 1}º msg`
    msg.appendChild(adicionar)
}






