//Peça dois números. Se os dois forem positivos, some. Senão, avise que a soma
// não será feita.

let a = Number(window.prompt("Digite o 1° número: "))
let b = Number(window.prompt("Digite o 2° número: "))

if(a>0 || b>0){

    alert(`A soma dos números é: ${a+b}`)
}
else {
    alert(`Números negativos. A soma não será feita.`)
    
}

