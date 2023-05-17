let nombre = "Gabriel"
    console.log(nombre);

let num1 = 8
let num2 = 5
let resultado = (num1 + num2)
    console.log(resultado)

    let esMayor = true;
        if (esMayor) {
            console.log("La variable esMayor es verdadera.");
        } else {
            console.log("La variable esMayor es falsa.");
        }
    

var listaparess = [2, 4, 6]
var total = 0;

for (var i = 0; i < listaparess.length; i++) {
    total = total + listaparess[i];
}
console.log(total)


let cadena1 = "Gabriel"
let cadena2 = "Bustinza"
let cadenaConcatenada = cadena1 + " " + cadena2
    document.write(cadenaConcatenada)


let pares = parseInt(prompt("Ingrese un número:"));
if (pares > 0) {
    console.log(`El número ${pares} es positivo.`);
} else if (pares < 0) {
    console.log(`El número ${pares} es negativo.`);
} else {
    console.log(`El número es 0.`);
}


let diaSemana = prompt("Ingrese un día de la semana (en formato numérico, 1-7):");

switch (diaSemana) {
  case "1":
    console.log("Es lunes");
    break;
  case "2":
    console.log("Es martes");
    break;
  case "3":
    console.log("Es miércoles");
    break;
  case "4":
    console.log("Es jueves");
    break;
  case "5":
    console.log("Es viernes");
    break;
  case "6":
    console.log("Es sábado");
    break;
  case "7":
    console.log("Es domingo");
    break;
  default:
    console.log("Día inválido");
    break;
}



let i = 1
while (i<=10){
  console.log(i)
  i++
}

do {
  console.log(i);
  i++;
} while (i <= 10);

for (let i = 1; i <= 10; i++) {
  let pares = i * 2;
  console.log(pares);
}

for (let i = 1; i <= 19; i += 2) {
  console.log(i);
}

for (let i = 0; i <= 10; i++) {
  let resultado = 5 * i;
  console.log("5 x " + i + " = " + resultado);
}

//Fibonacci

do {
  let numero = parseInt(prompt("Ingrese un número entre 1 y 10:"));
} while (numero < 1 || numero > 10);

console.log("El número ingresado es: " + numero);


let edad = parseInt(prompt("Numero/años"));
if (edad > 18) {
  console.log("Es mayor de 18 años.");
} else if (edad > 12) {
  console.log("Es mayor de 12 años y menor de 18.");
} else {
  console.log("Es menor de 12 años.");
}
