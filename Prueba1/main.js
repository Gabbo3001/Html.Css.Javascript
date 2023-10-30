
const lista = document.getElementById("listaDeNotas");
const input = document.getElementById("ingresarNota");
const botonCrearNota = document.getElementById("crearNota");

botonCrearNota.addEventListener("click", function() {

    const textoNota = input.value.trim();

    if (textoNota !== "") {
        const nota = document.createElement("li");
        const botonBorrar = document.createElement("button");
        nota.textContent = textoNota;
        botonBorrar.textContent = "Borrar";
        botonBorrar.id = "borrar";
        botonBorrar.addEventListener("click", function() {
            nota.remove();
        });
        nota.appendChild(botonBorrar);
        lista.appendChild(nota);

        input.value = ""; //limpiar
    }
});
