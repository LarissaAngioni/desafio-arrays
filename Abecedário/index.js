const letra = "m";
const palavras = ["mamao", "maca", "melao", "melancia", "laranja"];
let erros = 0;

for (let palavra of palavras) {
    if (palavra[0] !== letra) {
        erros++
    }
}
console.log(erros);
