
let yourName = prompt("¿Como te llamas?");

function welcome(yourName) {
 alert("Bienvenid@ "+ yourName);
   
 }

 welcome(yourName);

let answer = prompt ("¿Quieres multiplicar algún número? Si=1 / No=2");

     
do {
if (answer == 1 ){
    let num1= prompt ("Escribe un numero");
    
    let num2 = prompt ("Dime otro numero");
    let result = num1 * num2;
   answer = prompt ("Este es el resultado " + result + " ¿si quieres volver a mutiplicar pulsa 1, para salir pulsa 2" );
} 

}while (answer ==1) ;

 alert ("Ya puedes entrar en la página ");




