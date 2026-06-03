let num = [];
for (let i = 0; i < 5; i++) {
    num[i] = Number(window.prompt(`Digite seus números: `))
}

for (let i = 0; i < 5; i++) {
    if (num[i] > 10) {
        alert(num[i])
    }
}