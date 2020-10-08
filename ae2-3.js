function findMinimum(values) {

    return values.reduce((a, b) => {
        if (a < b)
            return a;
        else
            return b;
    });
}




//Comprobación
const numeros = [21,42,523,543,12,5];

console.log(findMinimum(numeros));