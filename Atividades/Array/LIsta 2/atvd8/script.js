// 8. Calcular a média e mostrar quem ficou acima da média
// Ler 5 números reais, calcular a média e mostrar apenas os números que estão acima
// da média.


let num = [];
let soma = 0;
let med;
for (let i = 0; i < 5; i++) {
    num.push(Number(window.prompt(`Digite suas notas: `)))
    soma += num[i] 
}
med = soma / 5
let mensagem = ""
for (let i = 0; i < 5; i++) {
    if (num[i] > med) {
        mensagem += (`\nNota acima da média: ${num[i]}\n`)
    }

}
alert("Média: " + med + mensagem)



