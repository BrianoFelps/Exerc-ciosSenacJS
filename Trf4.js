const verificaParImpar = (num) => {
    if(num%2 == 0){
        return `O número ${num} é par!`;
    } else if (num%2 != 0){
        return `O número ${num} não é par!`
    }
}

console.log(verificaParImpar(12.5));