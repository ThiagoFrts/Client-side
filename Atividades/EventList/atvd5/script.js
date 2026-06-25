// Atividade 5 – Alterar Texto
// Descrição
// Crie um texto qualquer.
// Ao clicar em Ativar Evento, o clique no texto deverá alterar seu conteúdo.
// Ao clicar em Remover Evento, o texto não deverá mais responder aos cliques.

let ativar = document.getElementById("ativar")
let desativar = document.getElementById("desativar")
let p = document.getElementById("texto")

function mensagem() {
    p.innerHTML = "Você mudou o texto"
}

ativar.addEventListener("click", function () {

    p.addEventListener("click", mensagem)

})


desativar.addEventListener("click", function () {

    p.removeEventListener("click", mensagem)

})




