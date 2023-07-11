const precos = [30, 10, 54, 76, 1, 4, 35];
let dif = 0;
let menorDif = 9999999999;

for (let i = 0; i < precos.length; i++) {
    for (let j = i + 1; j < precos.length; j++) {
        dif = (precos[i] - precos[j]);
        if (dif > 0) {
            if (dif < menorDif) {
                menorDif = dif;
            }
        }
    }
}
console.log(menorDif);
