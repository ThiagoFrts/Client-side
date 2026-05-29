// 5. Conversor de temperatura Apresente opções:
// 1 - Converter de Celsius para Fahrenheit
// 2 - Converter de Fahrenheit para Celsius
// 3 - Converter de Celsius para Kelvin
// Use switch case para aplicar a fórmula correta com base na escolha do usuário
// e exibir o resultado

let a = Number(window.prompt("Digite sua temperatura: "))

let c = Number(window.prompt(`Esolha uma opção:\n1 - Converter de Celsius para Fahrenheit\n
 2 - Converter de Fahrenheit para Celsius\n
 3 - Converter de Celsius para Kelvin\n`))

switch (c) {
    case 1:
        alert(`C° → F°: ${(a*1.8)+32}`)
        break
    case 2:
        alert(`F° → C°: ${((a - 32) * 5 / 9)}`)
        break
    case 3:
        alert(`C° → K°: ${a + 273,15}`)
        break
 default:
    alert(`ERRO!`)
  
}



