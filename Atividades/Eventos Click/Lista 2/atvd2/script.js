function somar() {
    let n1 = Number(window.prompt(`Digite um número: `))
    let n2 = Number(window.prompt(`Digite outro número: `))
    let resultado = n1 + n2
    alert(`A soma dos números é: ${resultado}`)

}


function multiplicar() {
    let n1 = Number(window.prompt(`Digite um número: `))
    let n2 = Number(window.prompt(`Digite outro número: `))
    let resultado = n1 * n2
    alert(`A multiplicação dos números é: ${resultado}`)

}


function comparar() {
    let n1 = Number(window.prompt(`Digite um número: `))
    let n2 = Number(window.prompt(`Digite outro número: `))
    
    if(n1 > n2){
        alert("O primeiro número é maior que o segundo.")
    }
    else if(n2 > n1){
        alert("O segundo número é maior.")
    }
    else{
        alert("Os números são iguais.")
    }

}
