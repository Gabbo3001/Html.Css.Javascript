document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form");
  const usuario = document.getElementById("usuario");
  const contraseña = document.getElementById("contraseña");
  const parrafo = document.getElementById("warnings");

  // Agregar los datos de usuario y contraseña al almacenamiento local
  localStorage.setItem("usuario", "Gabriel");
  localStorage.setItem("contraseña", "3001");

  form.addEventListener("submit", e => {e.preventDefault();

    const storedUsuario = localStorage.getItem("usuario");
    const storedContraseña = localStorage.getItem("contraseña");

    if (usuario.value !== storedUsuario || contraseña.value !== storedContraseña) {
      parrafo.innerHTML = "Usuario o contraseña incorrectos";
      usuario.value = "";
      contraseña.value = "";
    } else {
      parrafo.innerHTML = ""; // Vaciar el contenido del párrafo si los datos son correctos
      window.location.href = "index.html"; // Redirigir a otra-pagina.html
    }
  });
});
