// Atividade 8 – Caixa Surpresa
// Descrição
// Crie uma caixa quadrada.
// Ao clicar em Ativar Evento, a caixa deverá aumentar de tamanho quando for
// clicada.
// Ao clicar em Remover Evento, ela não deverá mais aumentar.


let ativar = document.getElementById("ativar")
let desativar = document.getElementById("desativar")
let quadrado = document.getElementById("qua")
let wid = 110
let heig = 100


function mensagem() {
    wid +=30
    heig +=30
    quadrado.style.height = wid + "px"
    quadrado.style.width = heig + "px"
}


ativar.addEventListener("click", function () {

    quadrado.addEventListener("click", mensagem)


})


desativar.addEventListener("click", function () {

    quadrado.removeEventListener("click", mensagem)

})




