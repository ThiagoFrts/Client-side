// Atividade 6 – Fundo Colorido
// Descrição
// Crie um botão Ativar Cor e outro Desativar Cor.
// Quando ativo, ao clicar em um retângulo, sua cor deve mudar para azul.


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




