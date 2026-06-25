// Atividade 8 – Criador de Quadrados
// Enunciado
// Uma empresa de design deseja criar uma ferramenta para gerar elementos gráficos
// simples. Cada clique deve criar um novo quadrado na tela.
// Requisitos
// • Botão Criar Quadrado.
// • Criar uma <div> de 50px por 50px.
// • Inserir a nova div em uma área específica.
// • Utilizar appendChild().


let botao = window.document.getElementById("btn")
botao.addEventListener("click", adicionar)


function adicionar() {
    let quadrado = document.getElementById("qua")

    let quad = document.createElement("div")

    quad.style.width = "50px"
    quad.style.height = "50px"
    quad.style.backgroundColor = "gray"

    quadrado.appendChild(quad)
}




