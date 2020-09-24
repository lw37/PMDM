function esPar(num) {
    if (num % 2 == 0) {
        return true;
    } else {
        return false;
    }
}
let x;
let numero=prompt("Introduce un numero","4");
if (esPar(numero) == true) { 
    console.log(numero + ' es PAR');
} else {
    console.log(numero + ' es IMPAR');
}