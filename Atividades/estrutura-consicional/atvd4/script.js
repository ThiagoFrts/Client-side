// Leia um número e informe se a soma desse número com 10 resulta em um
// valor positivo ou negativo.

let a = Number(window.prompt("Digite um número:"))
let b = a+10

if(b>=0){

    alert(`O número digitado (${a}) somado com 10 é positivo. \n Resultado: ${b}`)
}
else{
    alert(`O número digitado(${a}) somado com 10 é negativo \n Resultado: ${b}`)
}