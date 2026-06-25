// Atividade 2 – Botão Inteligente
// Descrição
// Crie um botão chamado Iniciar Clique e outro chamado Parar Clique.
// Quando o evento estiver ativo e o usuário clicar em um quadrado, a cor dele deve
// mudar para verde.
// Quando o evento for removido, o clique não deve produzir nenhuma alteração.

let ativar = document.getElementById("ativar")
let desativar = document.getElementById("desativar")
let qua = document.getElementById("qua")


function mensagem() {
    qua.style.backgroundColor = "#10a91a"
}

ativar.addEventListener("click", function () {

    qua.addEventListener("click", mensagem)

})


desativar.addEventListener("click", function () {

    qua.removeEventListener("click", mensagem)

})




