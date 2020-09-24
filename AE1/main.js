//1.
const ALERT_MESSAGE ="Soy el primer script";
let a=ALERT_MESSAGE+"y estoy funcionando sobre chrom" 
alert(a);
//2.
let meses = ['Enero', 'Febrero','Marzo','Abril','Mayo','Junio',
            'Julio','Agosto','Septiembre','Octubre','Novienbre','Diciembre'];


console.table(meses)
//3

const values = [true, false, 5, "hola", [1,2,3], {age: 2, gender: 'male'}];
for (let i = 0; i < values.length; i++) {
    
    console.log(typeof values[i]);
}
//4
let n1=5;
let n2=8;

if(n1<n2){
    console.log("numero1  no es mayor que numero2");
}

if(n2>0){
    console.log("numero2 es positivo");
}

if(n1<0 || n1!=0){
    console.log("n1 es negativo o distinto de 0. ");
}
if(n1++<=n2){
    console.log("incrementar en 1 unidad de numero1 no lo hace mayor o igula que numero2 ");
}
//5
var total = 1; 
for (i=1; i<=15; i++) {
    total = total * i;
}
console.log("factorial de 15 es :",total);
//6

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
//7

function Numero(num) {
    if(num<0){
        num=num*-1
    };
    return num;
}

//8
let cod=prompt("introduce un numero entre 1 - 12","1");
let bingo = Math.floor(Math.random() * 13);
do{
    cod=prompt("introduce un numero entre 1 - 12","1");
    do{
        alert("Animo vuelve a intentarlo!")
        cod=prompt("introduce un numero entre 1 - 12","1");
        
    }while(bingo!=cod)
     alert("Felicidades ,has aceptado!")
}while(cod>12 || cod <1)