const disparos = [0, 50, 90, 80, 100, 80, 40];
let pontuacao = 0;

for (let pontos of disparos) {
    if (pontos >= 70) {
        pontuacao++
    }
}

if (pontuacao < 3) {
    console.log("ELIMINADO");
} else {
    console.log(pontuacao);
}
