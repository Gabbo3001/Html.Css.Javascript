let boton = document.getElementById("miBoton");
boton.addEventListener("click", function(){
    let input = document.getElementById("miInput");
    console.log(input.value);
    });




let swapBoton = document.getElementById("swap");
let imagen = document.getElementById("imagen");
let urls = [
    "https://th.bing.com/th/id/R.57fd0dee14a392d06c0b369f77d9ad06?rik=EQMlPMuFFb8u9g&riu=http%3a%2f%2fwallpapercave.com%2fwp%2fmJRWj5T.jpg&ehk=4mvA0hrt7zbfxeNP1RH5VXPHqTaQRiWlizT5P9L%2bcXM%3d&risl=&pid=ImgRaw&r=0",
    "https://th.bing.com/th/id/R.e8b65800b9963b795411bab4855a5e38?rik=%2fC0x5SzbM05FeQ&pid=ImgRaw&r=0",
    "https://th.bing.com/th/id/R.9aef71598ca9e9506837349cc62788ea?rik=%2bd0M%2fF4%2f%2bT1JPw&riu=http%3a%2f%2fwallpapercave.com%2fwp%2fKdIBAWO.jpg&ehk=B5Kik7eoGjXT5POS%2b1VIyP6%2f1CHWumdFXbyYcil%2bpOA%3d&risl=&pid=ImgRaw&r=0",
    "https://th.bing.com/th/id/OIP.DSEkxrt99uU3L_fbBg1n6gHaEo?pid=ImgDet&rs=1"
            ];

let index = 0;

swapBoton.addEventListener("click", function(){
    index = (index + 1) % urls.length;
    imagen.src = urls[index];
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