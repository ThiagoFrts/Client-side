// Desafio Extra (Exercício 23)
// Desafio: Crie uma div vermelha e um botão chamado "Alternar Cor".
// Cada clique no botão deve alternar a cor da div:
// • Vermelho → Verde
// • Verde → Vermelho
// Dica: Será necessário verificar qual é a cor atual antes de alterar.

function cor() {
    
    if(document.getElementById("div").style.background == "red"){
        document.getElementById("div").style.background = "green"
    }
    else{
        document.getElementById("div").style.background = "red"
    }
}
