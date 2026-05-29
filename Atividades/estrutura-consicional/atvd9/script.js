// Solicite ao usuário três lados e verifique se é possível formar um triângulo
// com eles. Para ser triângulo, a soma de dois lados deve ser sempre maior que o
// terceiro lado.

let a = Number(window.prompt("Digite o 1° lado: "))
let b = Number(window.prompt("Digite o 2° lado: "))
let c = Number(window.prompt("Digite o 3° lado: "))

if(a+b>c){
    alert(`É possível formar um triângulo.`)
}

else{
    alert(`Não é possível formar um triângulo.`)
}