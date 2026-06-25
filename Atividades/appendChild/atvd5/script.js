// Atividade 5 – Controle da Lista de Compras
// Enunciado
// A lista de compras precisa permitir que o usuário remova produtos inseridos por
// engano.
// Requisitos
// • Continuar a atividade anterior.
// • Criar um botão Remover Último Produto.
// • O último item da lista deve ser removido utilizando removeChild().



let botao = window.document.getElementById("btn")
botao.addEventListener("click", adicionar)

let botao2 = window.document.getElementById("btn2")

function adicionar() {
    let produto = document.getElementById("produto").value
    let item = document.createElement("li")
    item.textContent = produto
    let lista = document.getElementById("lista")

    lista.appendChild(item)
}

botao2.addEventListener("click", remover)

function remover(){
    
    let ultimo = lista.lastElementChild
    if(!ultimo){
        alert ("Erro!")
    }
    lista.removeChild(ultimo)
}





