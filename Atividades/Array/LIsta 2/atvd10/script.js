// Ler dois vetores de 5 posições cada e criar um terceiro vetor com os elementos
// intercalados (ex: A[0], B[0], A[1], B[1], ...). Mostrar o vetor resultante.


let v1 = []
let v2 = []
let v3 = []

for (let i = 0; i < 5; i++) {
    v1[i] = Number(window.prompt(`Digite os números do 1° vetor: `))
}

for (let i = 0; i < 5; i++) {
    v2[i] = Number(window.prompt(`Digite os números do 2° vetor: `))
}
for (let i = 0; i < 5; i++) {
    v3.push (v1[i])
    v3.push (v2[i])
}
alert(v3)







