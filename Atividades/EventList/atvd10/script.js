// Atividade 10 – Contador de Teclas
// Descrição
// Crie um botão Ativar Teclado e outro Desativar Teclado.
// Enquanto ativo, cada tecla pressionada deve aumentar um contador.

let ativar = document.getElementById("ativar")
let desativar = document.getElementById("desativar")
let cont = 0
let campo = document.getElementsByTagName("input")[0]

function click() {
    cont+=1
  
}

ativar.addEventListener("click", function () {

    campo.addEventListener("keyup", click).value

})


desativar.addEventListener("click", function () {

    campo.removeEventListener("keyup", click)

})




