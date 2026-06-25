// Atividade 3 – Contador Simples
// Descrição
// Crie um botão Ativar Contador e outro Desativar Contador.
// Enquanto o evento estiver ativo, cada clique em um botão principal deve aumentar
// um contador exibido na tela.



let ativar = document.getElementById("ativar")
let desativar = document.getElementById("desativar")
let qua = document.getElementById("qua")
let contador = 0


function cont() {

    alert(contador += 1 )
    
}

ativar.addEventListener("click", function () {

    qua.addEventListener("click", cont)

})


desativar.addEventListener("click", function () {

    qua.removeEventListener("click", cont)

})




