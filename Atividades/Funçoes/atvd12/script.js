// 12. Função de conversão de temperatura
// Crie uma função que receba uma temperatura em Celsius e retorne em Fahrenheit.
// Fórmula: F = (C × 9/5) + 32

function temperatura(a) {
   return (a * 9 / 5) + 32;
    
}
let celsius = Number(window.prompt(`Digite sua temperatura em celsisus: `))
let novaTemp = temperatura(celsius)

alert(`Convertida para Fahrenheit é: ${novaTemp}`)






















