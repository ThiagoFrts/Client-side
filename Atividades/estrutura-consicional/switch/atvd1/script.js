let a = Number(window.prompt("Digite um número: "))
let b = Number(window.prompt("Digite outro número: "))

let c = Number(window.prompt(`Agora escolha qual operação você deseja realizar.\n===========================================\n1- Soma\n2- Subtração\n3- Multiplicação\n4- Divisão`))

switch (c) {
    case 1:
        alert(`A soma é: ${a + b}`)
        break
    case 2:
        alert(`A Subtração é: ${a - b}`)
        break
    case 3:
        alert(`A Multipliação é: ${a * b}`)
        break
    case 4:
        alert(`A Divisão é: ${a / b}`)
        break
  
}



