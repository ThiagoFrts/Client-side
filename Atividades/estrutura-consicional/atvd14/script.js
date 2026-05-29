// Peça a idade da pessoa e classifique:
// ● Criança: até 12 anos
// ● Adolescente: 13 a 17

// ● Adulto: 18 a 59

// ● Idoso: 60+

let a = Number(window.prompt("Digite o 1° número: "))

if (a <= 12) {
    alert(`Idade: ${a}\nCriança.`)
}
else if (a >= 13 && a <= 17 ) {
    alert(`Idade: ${a}\nAdolescente.`)
}
else if (a >= 18 && a <= 59 ) {
    alert(`Idade: ${a}\nAdulto.`)
}
else{
    alert(`Idade: ${a}\nIdoso.`)
}