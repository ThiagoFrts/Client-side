// Atividade 4 – Mostrar Coordenadas
// Descrição
// Crie um botão Ativar Mouse e outro Desativar Mouse.
// Quando ativo, ao mover o mouse pela página, as coordenadas X e Y devem
// aparecer na tela.
// Ao desativar, as coordenadas devem parar de atualizar.


let ativar = document.getElementById("ativar")
let desativar = document.getElementById("desativar")
let texto = document.getElementById("msg")

function cord(evento) {
    texto.innerHTML = "X: " + evento.clientX + " Y: " + evento.clientY
}

ativar.addEventListener("click", function () {
    document.addEventListener("mousemove", cord)
})

desativar.addEventListener("click", function () {
    document.removeEventListener("mousemove", cord)
})



