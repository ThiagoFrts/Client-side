// Atividade 9 – Gerenciador de Quadrados
// Enunciado
// O usuário deve poder remover os quadrados criados caso não sejam mais
// necessários.
// Requisitos
// • Continuar a atividade anterior.
// • Botão Remover Quadrado.
// • Remover sempre o último quadrado criado.

let botao = window.document.getElementById("btn")
botao.addEventListener("click", adicionar)

let botao2 = window.document.getElementById("btn2")
let quadrado = document.getElementById("qua")


function adicionar() {
    let quad = document.createElement("div")

    quad.style.width = "50px"
    quad.style.height = "50px"
    quad.style.backgroundColor = "gray"

    quadrado.appendChild(quad)
}
botao2.addEventListener("click", remover)

function remover(){
    
    let ultimo = quadrado.lastElementChild
    if(!ultimo){
        alert ("Erro!")
          return
    }
  
    quadrado.removeChild(ultimo)
}




