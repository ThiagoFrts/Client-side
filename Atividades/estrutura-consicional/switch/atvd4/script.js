// ● 1: Criança (0–12)
// ● 2: Adolescente (13–17)
// ● 3: Adulto (18–59)
// ● 4: Idoso (60+)


let a = Number(window.prompt(`Digite sua idade: `))
let c

if (a <= 12) {
    c = 1
}
else if (a >= 13 && a <= 17) {
    c = 2
}
else if (a >= 18 && a <= 59) {
    c = 3
}
else {
    c = 4
}

switch (c) {
    case 1:
        alert("Criança!")
        break

    case 2:
        alert("Adolescente!")
        break

    case 3:
        alert("Adulto!")
        break

    case 4:
        alert("Idoso!")
        break

}