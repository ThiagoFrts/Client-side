// ✅ 4. Soma até digitar zero com while
// Escreva um programa que peça ao usuário para digitar vários números. O programa deve
// somar todos os números digitados e parar quando o número 0 for digitado. Ao final, exiba o
// valor total da soma.

 
let a = 1; 
let b = 0
 while(a!=0){
   a = Number(window.prompt("Digite um número: "))
   b += a 
 }
 alert(`A soma total dos números é: ${b}`)


