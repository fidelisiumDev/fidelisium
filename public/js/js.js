// Buscamos el botón y el panel del menú.
const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector("#main-menu");

// Abrimos o cerramos el menú al pulsar el botón.
hamburger.addEventListener("click", () => {

    // Añade la clase si no existe y la elimina si ya existe.
    const isOpen = menu.classList.toggle("is-open");

    // Cambia el icono de hamburguesa a X y viceversa.
    hamburger.classList.toggle("is-open", isOpen);

    // Informa al navegador del estado del menú.
    hamburger.setAttribute("aria-expanded", isOpen);

    // Actualiza la descripción accesible del botón.
    hamburger.setAttribute(
        "aria-label",
        isOpen ? "Cerrar menú" : "Abrir menú"
    );
});


// Cerramos el menú al seleccionar un enlace en móvil.
menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {

        if (window.matchMedia("(max-width: 768px)").matches) {
            menu.classList.remove("is-open");
            hamburger.classList.remove("is-open");

            hamburger.setAttribute("aria-expanded", "false");
            hamburger.setAttribute("aria-label", "Abrir menú");
        }
    });
});


// Cerramos el menú con la tecla Escape.
document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && menu.classList.contains("is-open")) {
        menu.classList.remove("is-open");
        hamburger.classList.remove("is-open");

        hamburger.setAttribute("aria-expanded", "false");
        hamburger.setAttribute("aria-label", "Abrir menú");
        hamburger.focus();
    }
});


// Animación de palabras---------------------------------------
const word = document.querySelector("#changing-word");

const words = [
    "MODERN",
    "CREATIVE",
    "USEFUL",
    "INNOVATIVE"
];

let index = 0;

setInterval(() => {
    word.style.opacity = "0";
    word.style.transform = "translateY(10px)";

    setTimeout(() => {
        index = (index + 1) % words.length;
        word.textContent = words[index];

        word.style.transform = "translateY(-10px)";

        requestAnimationFrame(() => {
            word.style.opacity = "1";
            word.style.transform = "translateY(0)";
        });
    }, 350);
}, 2500);
// -------------------------------------------------------------