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