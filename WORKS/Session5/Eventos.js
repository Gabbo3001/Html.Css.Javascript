let boton = document.getElementById("miBoton");
boton.addEventListener("click", function(){
    let input = document.getElementById("miInput");
    console.log(input.value);
    });




let swapBoton = document.getElementById("swap");
let imagen = document.getElementById("imagen");
let urls = [
    "https://arc-anglerfish-arc2-prod-copesa.s3.amazonaws.com/public/2GO6MVOPAZHQTCOVGDZIX5SXLY.jpg",
    "https://arc-anglerfish-arc2-prod-copesa.s3.amazonaws.com/public/XORO2GUXKJFYJL7LYXN25OWBII.jpg",
    "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2018/04/vengadores-infinity-war-posters-individuales-superheroes_18.jpg?tf=2048x",
    "https://peru21.pe/resizer/MhYRwP5X3b9RCvqGajh6Pqm97Q4=/620x0/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/HHIOFW3EGFB2TFLXDWJICMFVIM.jpg"
            ];

    let index = 0;
    let imagenesCargadas = [];
    
    urls.forEach(url => {
        let img = new Image();
        img.src = url;
        imagenesCargadas.push(img);
    });
    
    swapBoton.addEventListener("click", function(){
        index = (index + 1) % urls.length;
        imagen.src = imagenesCargadas[index].src;
    });

//Muestra en consola contenido del formulario

let formulario = document.getElementById("miFormulario");
formulario.addEventListener("submit", function(event){
    event.preventDefault();
    let campoTexto = document.getElementById("miCampoTexto");
    console.log(campoTexto.value);
});



let BotonSeleccionador = document.getElementById("mostrarBoton");
		let lista = document.getElementById("opciones");

    BotonSeleccionador.addEventListener("click", function(){
        let opcionSeleccionada = lista.options[lista.selectedIndex];
        console.log(opcionSeleccionada.value);
    });

/*

5.  Crea una página HTML con un campo de texto y un botón.
    Cuando se hace clic en el botón, el texto del campo de texto
    debe ser copiado al portapapeles.

6.  Crea una página HTML con un elemento div. Cuando se mueve
    el mouse sobre el div, debe cambiar de color.

7.  Crea una página HTML con un botón y un campo de texto.
    Cuando se hace clic en el botón, el texto del campo de texto 
    debe ser enviado por correo electrónico utilizando la API
    de correo electrónico del navegador.

8.  Crea una página HTML con una imagen. Cuando se carga la página,
    la imagen debe moverse lentamente de derecha a izquierda.

9.  Crea una página HTML con un campo de texto. Cuando se escribe
    algo en el campo de texto, el texto debe mostrarse en otro
    elemento HTML en tiempo real.

10. Crea una página HTML con un botón. Cuando se hace clic en el
    botón, se debe descargar un archivo desde el servidor y 
    guardarlo en el disco local del usuario.

    */