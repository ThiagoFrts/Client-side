let a = Number(window.prompt("Digite um número de 1-7: "))

switch (a) {
    case 1:
        alert('1 - Domingo')
        break

    case 2:
        alert('2 - Segunda-feira')
        break

    case 3:
        alert('3 - Terça-feira')
        break

    case 4:
        alert('4 - Quarta-feira')
        break

    case 5:
        alert('5 - Quinta-feira')
        break

    case 6:
        alert('6 - Sexta-feira')
        break

    case 7:
        alert('7 - Sábado')
        break

    default:
        alert('Número inválido! Digite de 1 a 7.')
}