// Atividade 9 – Trocar Emoji
// Descrição
// Crie um emoji na tela.
// Quando o evento estiver ativo, clicar nele deverá trocar para outro emoji.
// Quando removido, o emoji não deverá mudar.


let ativar = document.getElementById("ativar")
let desativar = document.getElementById("desativar")
let retangulo = document.getElementById("ret")

function mensagem() {
    retangulo.style.backgroundColor = "#0e1681"
}

ativar.addEventListener("click", function () {

    retangulo.addEventListener("click", mensagem)
   

})


desativar.addEventListener("click", function () {

    retangulo.removeEventListener("click", mensagem)

})




