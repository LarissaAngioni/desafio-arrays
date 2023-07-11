const notas = [100, 100, 100, 20, 50, 30, 14, 100, 100, 100];
let maiorNota = notas[0];
let menorNota = notas[0];
let notaFinal = 0;
let qnt = 0;

for (let nota of notas) {
    notaFinal += nota;
    if (nota > maiorNota) {
        maiorNota = nota;
    } else if (nota < menorNota) {
        menorNota = nota;
    }
}
notaFinal = (notaFinal - menorNota - maiorNota) / (notas.length - 2);
console.log(notaFinal);
