// Crie um programa que leia um número e verifique se ele é divisível por 3, por
// 5 ou por ambos. Exiba a mensagem correspondente.

let a = Number(window.prompt("Digite um número para saber se\nele é divisível por 3, por 5 ou por ambos:"))

if(a % 5 == 0 && a % 3 == 0){
    alert("Seu número é divisível por ambos.")
}

else if(a % 3 == 0){
    alert("Seu número é divisível por 3.")
}

else if(a % 5 == 0){
    alert("Seu número é divisível por 5.")
}
else {
    alert("Seu número não é divisível por 3 nem por 5")
}

