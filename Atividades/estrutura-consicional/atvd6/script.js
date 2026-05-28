// Solicite dois números e pergunte ao usuário qual operação ele deseja realizar:
// soma, subtração, multiplicação ou divisão. Realize a operação escolhida e
// mostre o resultado.

let a = Number(window.prompt("Digite um número: "))
let b = Number(window.prompt("Digite outro número: "))
let op = (window.prompt("Qual operação você deseja fazer: "))

if(op=='+'){

    alert(`Soma\n=================\n${a} + ${b} = ${a+b}`)
}
else if (op=='*'){
    alert(`Multiplicação\n=================\n${a} * ${b} = ${a*b}`)
}
else if (op=='-'){
    alert(`Subtração\n=================\n${a} - ${b} = ${a-b}`)
}
else if (op=='/'){
    alert(`Divisão\n=================\n${a} / ${b} = ${a/b}`)
}