// Atividade 1 – Ativar Mensagem
// Objetivo
// Praticar a adição e remoção de eventos.
// Descrição
// Crie um botão Ativar e um botão Desativar.
// Ao clicar em Ativar, um evento deve ser adicionado a um parágrafo.
// Quando o usuário clicar no parágrafo, deve aparecer a mensagem:
// Você clicou no parágrafo!
// Ao clicar em Desativar, o evento deve ser removido.

let ativar = document.getElementById("ativar")
let desativar = document.getElementById("desativar")
let p = document.getElementsByTagName("p")[0]

function mensagem() {
    alert("Você clicou no parágrafo")
}

ativar.addEventListener("click", function () {

    p.addEventListener("click", mensagem)

})


desativar.addEventListener("click", function () {

    p.removeEventListener("click", mensagem)

})




