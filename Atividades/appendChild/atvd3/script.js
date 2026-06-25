// Atividade 3 – Adicionar e Remover Mensagens
// Enunciado
// O administrador do sistema precisa ter controle sobre as mensagens exibidas. Além
// de adicionar novas mensagens, ele também deve conseguir remover a última
// mensagem criada.
// Requisitos
// • Botão Adicionar Mensagem.
// • Botão Remover Mensagem.
// • Utilizar appendChild() para adicionar.
// • Utilizar removeChild() para remover.
// • Caso não existam mensagens, não gerar erros.

let botao = window.document.getElementById("btn")
let msg = window.document.getElementById("msg")
let botao2 = window.document.getElementById("btn2")

botao.addEventListener("click", clicar)

function clicar() {
    let adicionar = document.createElement("p")
    adicionar.textContent = "Bem-vindo ao sistema!"
    msg.appendChild(adicionar)
}

botao2.addEventListener("click", remover)

function remover(){
    
    let ultimo = msg.lastElementChild
    if(!ultimo){
        alert ("Erro!")
    }
    msg.removeChild(ultimo)
}






