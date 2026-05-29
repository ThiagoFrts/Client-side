// Leia duas notas de um aluno, calcule a média e diga se está APROVADO,
// REPROVADO, RECUPERAÇÃO...
// Nota >= 6 Aprovado Nota =
// 5 Recuperação Nota < 5
// Reprovado

let a = Number(window.prompt("Digite sua 1° nota: "))
let b = Number(window.prompt("Digite sua 2° nota: "))

let med = (a+b)/2

if(a>10 || b>10){

    alert(`Erro! as notas digitadas devem ser menores que 10.`)
}
else {
    if(med>=6)
    alert(`Sua nota é: ${med}\nResultado: Aprovado `)

    else if(med>5){
    alert(`Sua nota é: ${med}\nResultado: Em recuperação `)

    }
    else if(med<5){
    alert(`Sua nota é: ${med}\nResultado: Em recuperação `)

}

}
