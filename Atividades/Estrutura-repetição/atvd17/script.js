// 17. Contar quantos números negativos com while
// Peça ao usuário para digitar vários números (parando com zero). Conte quantos números
// negativos foram digitados.

let a;
let b = 0

while(a!=0){
    a = Number(window.prompt(`Digite um número negativo: `))
 if(a<0){
    b=b+1
 }
  
}
alert(`Os números negativod digitados são: ${b}`)