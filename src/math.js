function somaDobroNumerosParesFuncional(numeros) {
    return numeros
        .filter(num => num % 2 === 0)
        .map(num => num * 2)          
        .reduce((acc, num) => acc + num, 0); 
}

function somaDobroNumerosParesProcedural(numeros) {
    let soma = 0;
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] % 2 === 0) { 
            soma += numeros[i] * 2;
        }
    }
    return soma;
}

export { somaDobroNumerosParesFuncional, somaDobroNumerosParesProcedural };
