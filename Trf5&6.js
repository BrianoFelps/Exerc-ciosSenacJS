
console.log("Contagem REGRESSIVA");

const contagReg = (tempo) => {
    for (let i = tempo; i >= 0; i--) {
        console.log(i);
    }
}

contagReg(10);

console.log("Contagem PROGRESSIVA");

const contagPro = (valorMax) => {
    for (let i = 0; i <= valorMax; i++) {
        console.log(i);
    }
}

contagPro(20);