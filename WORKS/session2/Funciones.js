let nombre = "Gabriel"
function saludar(nombre) {
  return "Hola, como estas " + nombre;
}

function esPar(numero) {
    return numero % 2 === 0;
  }


function multiplicar(a, b) {
return a * b;
}


function sumarLista(lista) {
    let suma = 0;
    for (let i = 0; i < lista.length; i++) {
      suma = suma + lista[i];
    }
    return suma;
  }
  console.log(sumarLista([2, 3, 4, 5]));
  console.log(sumarLista([]));
  console.log(sumarLista([1.5, 2.5, 3.5]));
  
