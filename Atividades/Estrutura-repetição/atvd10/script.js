// ✅ 10. Contador de positivos com while
// Faça um programa que leia números do usuário até que ele digite 0. Para cada número
// positivo digitado, o programa deve contar. No final, exiba quantos números positivos foram
// digitados.


let a;
let b = 0

while(a!=0){
    a = Number(window.prompt(`Digite um número positivo: `))
 if(a>0){
    b=b+1
 }
  
}
alert(`Os númeoros positivos digitados são: ${b}`)