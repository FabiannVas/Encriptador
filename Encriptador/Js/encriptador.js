
// Selección de los elementos
const btnEncriptar = document.querySelector(".btn-encriptar");
const txtEncriptar = document.querySelector(".Encriptar"); // Asegúrate de que la clase coincida exactamente con tu HTML
const aviso = document.querySelector(".texto-aviso");
const respuesta = document.querySelector(".evaluar");
const contenido = document.querySelector(".tarjeta-contenedor");
const btnCopiar = document.querySelector(".btn-copiar");
const btnDesencriptar = document.querySelector(".btn-desencriptar"); // Corregido el selector de clase

// Botón de encriptar
btnEncriptar.addEventListener("click", (e) => {
    e.preventDefault();
    let texto = txtEncriptar.value;

    // Normalización del texto y eliminación de caracteres especiales
    let txt = texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]><:"`;,\u0300-\u036f']/g, "");

    // Validación del texto
    if (texto === "") {
        aviso.style.background = "#0A3871";
        aviso.style.color = "#FFFFFF"; // Corregido a blanco completo
        aviso.style.fontWeight = "400"; 
        aviso.textContent = "El campo de texto no debe estar vacío";

        // Remover el estilo después de 1.5 segundos
        setTimeout(() => {
            aviso.removeAttribute("style");
        }, 1500);

    } else if (texto !== txt) {
        aviso.style.background = "#0A3871";
        aviso.style.color = "#FFFFFF"; // Corregido a blanco completo
        aviso.style.fontWeight = "400"; 
        aviso.textContent = "No debe tener acentos, ni caracteres especiales";

        // Remover el estilo después de 1.5 segundos
        setTimeout(() => {
            aviso.removeAttribute("style");
        }, 1500);

    } else if (texto !== texto.toLowerCase()) {
        aviso.style.background = "#0A3871";
        aviso.style.color = "#FFFFFF"; // Corregido a blanco completo
        aviso.style.fontWeight = "400"; 
        aviso.textContent = "El texto debe ser en minúscula";

        // Remover el estilo después de 1.5 segundos
        setTimeout(() => {
            aviso.removeAttribute("style");
        }, 1500);
    } else {
        texto = texto.replace(/e/mg, "enter");
        texto = texto.replace(/i/mg, "imes");
        texto = texto.replace(/a/mg, "ai");
        texto = texto.replace(/o/mg, "ober");
        texto = texto.replace(/u/mg, "ufat");

        respuesta.innerHTML = texto;
        btnCopiar.style.visibility = "visible"; // Corregido para mostrar el botón
        contenido.remove();
    }
});

// Botón de desencriptar
btnDesencriptar.addEventListener("click", (e) => {
    e.preventDefault();
    let texto = txtEncriptar.value;

    // Normalización del texto y eliminación de caracteres especiales
    let txt = texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]><:"`;,\u0300-\u036f']/g, "");

    // Validación del texto
    if (texto === "") {
        aviso.style.background = "#0A3871";
        aviso.style.color = "#FFFFFF"; // Corregido a blanco completo
        aviso.style.fontWeight = "400"; 
        aviso.textContent = "El campo de texto no debe estar vacío";

        // Remover el estilo después de 1.5 segundos
        setTimeout(() => {
            aviso.removeAttribute("style");
        }, 1500);

    } else if (texto !== txt) {
        aviso.style.background = "#0A3871";
        aviso.style.color = "#FFFFFF"; // Corregido a blanco completo
        aviso.style.fontWeight = "400"; 
        aviso.textContent = "No debe tener acentos, ni caracteres especiales";

        // Remover el estilo después de 1.5 segundos
        setTimeout(() => {
            aviso.removeAttribute("style");
        }, 1500);

    } else if (texto !== texto.toLowerCase()) {
        aviso.style.background = "#0A3871";
        aviso.style.color = "#FFFFFF"; // Corregido a blanco completo
        aviso.style.fontWeight = "400"; 
        aviso.textContent = "El texto debe ser en minúscula";

        // Remover el estilo después de 1.5 segundos
        setTimeout(() => {
            aviso.removeAttribute("style");
        }, 1500);
    } else {
        texto = texto.replace(/enter/mg, "e");
        texto = texto.replace(/imes/mg, "i");
        texto = texto.replace(/ai/mg, "a");
        texto = texto.replace(/ober/mg, "o");
        texto = texto.replace(/ufat/mg, "u");

        respuesta.innerHTML = texto;
        btnCopiar.style.visibility = "visible"; // Corregido para mostrar el botón
        contenido.remove();
    }
});

//Boton Copiar
btnCopiar.addEventListener("click", (e) => {
    e.preventDefault();
    let copiar = respuesta;
    copiar.select();
    document.execCommand("copy")
});
    