// Crie um programa que leia a idade de uma pessoa e imprima uma mensagem
// de boas-vindas. Se a idade for maior ou igual a 18, imprima "Bem-vindo(a)",
// caso contrário, imprima "Acesso negado".

let a = Number(window.prompt("Digite sua idade: "))

if(a>18){
    alert(`Bem-vindo(a).`)
}

else{
    alert(`Acesso negado.`)
}