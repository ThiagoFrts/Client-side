// Exercício 16
// Desafio: Crie um retângulo branco e um botão chamado "Modo Escuro".
// Ao clicar no botão:
// • O fundo do retângulo deve ficar preto.
// • O texto dentro do retângulo deve ficar branco.

function escuro() {
    document.getElementById("ret").style.background = "#050311"
    document.getElementById("ret").style.color = "#ffffff"
}
function normal() {
    document.getElementById("ret").style.background = "#ffffff"
    document.getElementById("ret").style.color = "#000000"
}




