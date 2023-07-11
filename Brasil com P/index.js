const primeiraLetra = "a";
const segundaLetra = "v";
const palavras = ["aveia", "manha", "ave"];
let tem = false;

for (let palavra of palavras) {
    if (palavra[0] === primeiraLetra && palavra[1] === segundaLetra) {
        console.log(palavra);
        tem = true;
    }
}
if (!tem) {
    console.log("NENHUMA");
}
