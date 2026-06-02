// 19. Repetir menu até opção válida com do-while
// Simule um menu com 3 opções (1 - Iniciar, 2 - Ajuda, 3 - Sair). Use do-while para continuar
// mostrando o menu até o usuário escolher a opção 3.

let a;


do {
   a = Number(window.prompt(`1 - Iniciar\n 2 - Ajuda\n 3 - Sair\n`))


}
while (a != `3`)