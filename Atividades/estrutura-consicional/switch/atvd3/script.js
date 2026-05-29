let a = Number(window.prompt(
`CARDÁPIO
=============================
1 - X-Burguer ........ R$ 12,00
2 - X-Salada ......... R$ 15,00
3 - Cachorro-Quente .. R$ 10,00
4 - Batata Frita ..... R$ 8,00
5 - Refrigerante ..... R$ 6,00`
))

switch (a) {
    case 1:
        alert("Produto: X-Burguer\nPreço: R$ 12,00")
        break

    case 2:
        alert("Produto: X-Salada\nPreço: R$ 15,00")
        break

    case 3:
        alert("Produto: Cachorro-Quente\nPreço: R$ 10,00")
        break

    case 4:
        alert("Produto: Batata Frita\nPreço: R$ 8,00")
        break

    case 5:
        alert("Produto: Refrigerante\nPreço: R$ 6,00")
        break

    default:
        alert("Código inválido!")
}