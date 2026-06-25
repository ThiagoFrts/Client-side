// Atividade 6 – Cadastro de aluno
// Enunciado
// Uma escola deseja cadastrar aluno em uma lista. Sempre que um nome for
// informado, ele deverá aparecer na tela.
// Requisitos
// • Campo para digitar o nome.
// • Botão Cadastrar Aluno.
// • Exibir os nomes em uma lista.
// • Utilizar appendChild().


let botao = window.document.getElementById("btn")
botao.addEventListener("click", adicionar)

function adicionar() {
    let aluno = document.getElementById("aluno").value
    let item = document.createElement("li")
    item.textContent = aluno
    let lista = document.getElementById("lista")

    lista.appendChild(item)
}







