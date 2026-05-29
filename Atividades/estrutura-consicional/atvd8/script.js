// // Crie um programa que leia a nota de um aluno e informe se ele foi
// aprovado ou reprovado. O aluno será aprovado se a nota for 7 ou mais,
// caso contrário, será reprovado.

let a = Number(window.prompt("Digite sua nota: "))

if(a>+7){

    alert(`Sua nota é: ${a}\nResultado: Aprovado`)
}
else{
    alert(`Sua nota é: ${a}\nResultado: Reprovado `)
}
