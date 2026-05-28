// Solicite dois números ao usuário e mostre qual é o maior número.

let a = Number(window.prompt("Digite um número:"))
let b = Number(window.prompt("Digite outro número:"))


if(a>b){

    alert(`O número ${a} é maior que o número ${b}.`)
}
else{
    alert(`O número ${b} é maior que o número ${a}.`)
}