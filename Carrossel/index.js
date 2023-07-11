const sequencia = [">", ">", ">", ">", ">", ">", ">", ">", ">"];
let i = 0;
const carrossel = 6;

for (let item of sequencia) {
    if (item === ">") {
        i++;
        if (i > carrossel) {
            i = 0;
        }
    } else if (item === "<") {
        i--;
        if (i < 0) {
            i = carrossel;
        }
    }
}
console.log(i);
