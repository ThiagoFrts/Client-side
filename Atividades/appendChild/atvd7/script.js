// Atividade 7 – Cadastro de Alunos com Exclusão
// Enunciado
// A secretaria da escola percebeu que alguns nomes podem ser cadastrados
// incorretamente. Por isso, será necessário remover o último aluno cadastrado.
// Requisitos
// • Continuar a atividade anterior.
// • Criar botão Excluir Último Aluno.
// • Utilizar removeChild().


let botao = window.document.getElementById("btn")
botao.addEventListener("click", adicionar)

let botao2 = window.document.getElementById("btn2")

function adicionar() {
    let aluno = document.getElementById("aluno").value
    let item = document.createElement("li")
    item.textContent = aluno
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





