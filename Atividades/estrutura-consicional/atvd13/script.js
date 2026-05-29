//Peça dois números e diga se o primeiro é múltiplo do segundo.

let a = Number(window.prompt("Digite o 1° número: "))
let b = Number(window.prompt("Digite o 2° número: "))

if(a%b==0){
    alert(`O primeiro número (${a}), é múltiplo do segundo (${b}).`)
}
else{
    alert(`O primeiro número (${a}), não é múltiplo do segundo (${b}).`)
}