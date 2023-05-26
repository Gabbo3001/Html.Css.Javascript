
/* 1. Utiliza un "if/else" para imprimir un mensaje
si un número es positivo o negativoconst*/ 

var numero = -5;

if (numero > 0) {
  console.log("El número es positivo");
} else {
  console.log("El número es negativo");
}

/*2. Utiliza un "switch" para imprimir un mensaje dependiendo 
del día de la semana.*/
const diaSemana = new Date().getDay();

switch (diaSemana) {
  case 0:
    console.log("Hoy es domingo");
    break;
  case 1:
    console.log("Hoy es lunes");
    break;
  case 2:
    console.log("Hoy es martes");
    break;
  case 3:
    console.log("Hoy es miércoles");
    break;
  case 4:
    console.log("Hoy es jueves");
    break;
  case 5:
    console.log("Hoy es viernes");
    break;
  case 6:
    console.log("Hoy es sábado");
    break;
  default:
    console.log("Día no válido");
    break;
}

/* 3.Utiliza un "while" para imprimir los números del 1 al 10.
 */
let numero = 1;

while (numero <= 10) {
  console.log(numero);
  numero++;
}


/* 4. Utiliza un "do/while" para imprimir los números del 1 al 10.*/

let numero = 1;

do {
  console.log(numero);
  numero++;
} while (numero <= 10);

/*5. Utiliza un "for" para imprimir los números pares del 2 al 20. */

for (let numero = 2; numero <= 20; numero += 2) {
  console.log(numero);
}

/*6. Utiliza un "for" para imprimir los números impares del 1 al 19 */
for (let numero = 1; numero <= 19; numero += 2) {
  console.log(numero);
}
