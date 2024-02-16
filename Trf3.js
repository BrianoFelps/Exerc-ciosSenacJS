const alunoIdiota = [4, 5, 2, 5];
const alunoInteligente = [9, 10, 9, 7];

const media = (aluno) =>{
    for (let i = 0; i < aluno.length; i++){
        const sum = aluno.reduce((acumulador, valor) => acumulador + valor,0);
        var res = sum/aluno.length;
    }
    return res;
}

console.log(media(alunoIdiota));

const passou = (aluno) => {
    if (media(aluno) >= 7){
        console.log('Aprovado!')
    } else {
        console.log('Reprovado!')
    }
}

passou(alunoIdiota);