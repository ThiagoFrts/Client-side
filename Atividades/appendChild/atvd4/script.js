// Atividade 4 – Lista de Compras
// Enunciado
// Você foi contratado para desenvolver uma pequena lista de compras digital. O
// usuário deverá digitar o nome de um produto e adicioná-lo à lista.
// Requisitos
// • Campo de texto.
// • Botão Adicionar Produto.
// • Cada produto deve ser exibido em um <li>.
// • Utilizar appendChild().
// • Não utilizar innerHTML.



let botao = window.document.getElementById("btn")
botao.addEventListener("click", adicionar)

function adicionar() {
    let produto = document.getElementById("produto").value
    let item = document.createElement("li")
    item.textContent = produto
    let lista = document.getElementById("lista")

    lista.appendChild(item)
}






