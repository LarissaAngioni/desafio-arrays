const stringCorrompida = "*Canis %lupus )familiaris";
let stringPurificada = "";

for (let caracteres of stringCorrompida) {
    if (caracteres === "!" ||
        caracteres === "@" ||
        caracteres === "#" ||
        caracteres === "$" ||
        caracteres === "%" ||
        caracteres === "&" ||
        caracteres === "*" ||
        caracteres === "(" ||
        caracteres === ")") {
    } else {
        stringPurificada += caracteres;
    }
}
console.log(stringPurificada);
