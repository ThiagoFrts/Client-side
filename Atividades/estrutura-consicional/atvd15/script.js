// 15. Calcular o dobro ou o triplo
// Peça um número:
// ● Se for par, mostre o dobro
// ● Se for ímpar, mostre o triplo

alert(`informe um número, se for par será exibido o\ndobro dele. caso seja ímpar será exibido o triplo dele.`)
let a = Number(window.prompt("Digite um número: "))

if(a % 2 == 0){

    alert(`Número digitado: ${a} / Par\nO dobro deste número é: ${a*2}`)
}
else{
    alert(`Número digitado: ${a} / Ímpar\nO triplo deste número é: ${a*3}`)
}