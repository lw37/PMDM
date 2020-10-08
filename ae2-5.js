function multipleFactorial(values) {

    return values.map(numero => {
        let total = 1;
        for (let i = 1; i <= numero; i++) total = total * i;
        return total;
    });
}


const numeros = [1, 2, 3, 4, 13];

console.log(multipleFactorial(numeros))