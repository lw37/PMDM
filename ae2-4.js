function findGreaterThan(x, values) {

    return values.every(a => a > x);
}


const x = 5;
const numeros = [32, 6, 43, 67, 6];
console.log(findGreaterThan(x, numeros))