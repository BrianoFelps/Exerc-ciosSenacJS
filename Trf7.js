const GerarTabuada = (num) => {
    for (let i = 1; i <= 10; i++) {
        var multRes = num * i;
        console.log(num, '*', i, "=" , multRes);
    }
}

GerarTabuada(7);