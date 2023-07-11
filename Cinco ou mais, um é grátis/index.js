const precos = [100, 500, 100, 200, 50];
let menorPreco = precos[0];
let precoTotal = 0;

if (precos.length < 5) {
    for (let preco of precos) {
        precoTotal += preco;
    }
    console.log(precoTotal);
} else {

    for (let preco of precos) {
        precoTotal += preco;
        if (preco < menorPreco) {
            menorPreco = preco;
        }
    }
    precoTotal -= menorPreco;
    console.log(precoTotal);
}
