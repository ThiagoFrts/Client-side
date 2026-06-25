// Atividade 7 – Exibir Alerta
// Descrição
// Crie um botão Ligar Alerta e outro Desligar Alerta.
// Quando ativo, clicar em uma imagem deve exibir um alerta.
// Quando desativado, nada deve acontecer.

let ativar = document.getElementById("ativar")
let desativar = document.getElementById("desativar")
let imagem = document.getElementsByTagName("img")[0]

function mensagem() {
    alert("Você clicou na imagem.")
}

ativar.addEventListener("click", function () {

    imagem.addEventListener("click", mensagem)

})


desativar.addEventListener("click", function () {

    imagem.removeEventListener("click", mensagem)

})




