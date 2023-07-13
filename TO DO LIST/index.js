window.addEventListener('DOMContentLoaded', (event) => {
    // Obtener los elementos del DOM
    const input = document.getElementById('inputTareas');
    const agregar = document.getElementById('agregar');
    const noPendientes = document.getElementById('noPendientes');
    const pendientes = document.getElementById('pendientes');
    const tareas = document.querySelector('#tareas ol');

    window.addEventListener("load", () => {
        alternarVisualizacion(); // Llamar a la función para alternar la visualización inicialmente
    });

    // Función para alternar la visualización de los elementos pendientes y noPendientes
    function alternarVisualizacion() {
        if (tareas.childElementCount > 0) {
            pendientes.style.display = "block";
            noPendientes.style.display = 'none';
        } else {
            pendientes.style.display = "none";
            noPendientes.style.display = 'block';
        }
    }

    // Agregar un evento al botón de agregar
    agregar.addEventListener('click', function(event) {
        event.preventDefault(); // Evitar el envío del formulario

        const tareaLimpia = input.value.trim(); // Obtener el valor del input sin espacios en blanco al inicio y al final

        if (tareaLimpia !== '') {
            const tarea = document.createElement('li'); // Crear un nuevo elemento de lista (<li>)
            const textoTarea = document.createElement('p'); // Crear un nuevo elemento de párrafo (<p>)
            const botonEliminar = document.createElement('button'); // Crear un nuevo elemento de botón (<button>)
            botonEliminar.textContent = 'x'; // Establecer el texto del botón
            botonEliminar.id = 'eliminar'; // Establecer el ID del botón

            textoTarea.textContent = tareaLimpia; // Establecer el texto del párrafo con el valor del input

            tarea.appendChild(textoTarea); // Agregar el párrafo como hijo del elemento de lista
            tarea.appendChild(botonEliminar); // Agregar el botón como hijo del elemento de lista
            tareas.appendChild(tarea); // Agregar el elemento de lista como hijo de la lista de tareas

            alternarVisualizacion(); // Llamar a la función para alternar la visualización

            botonEliminar.addEventListener('click', function() {
                tareas.removeChild(tarea); // Eliminar el elemento <li> al hacer clic en el botón
                alternarVisualizacion(); // Llamar a la función para alternar la visualización
            });
        }

        input.value = ''; // Limpiar el valor del input
    });
});
