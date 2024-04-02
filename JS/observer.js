const d = document;

export default function scrollSpy() {
    const $grid = d.querySelector(`.grid`);

    // Se define la función de devolución de llamada para el IntersectionObserver
    const cb = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.transform = "traslateX(-100%)"; // Aplicar el filtro sepia al elemento en la vista
            } else {
                entry.target.style.filter = "none"; // Restablecer el filtro si el elemento ya no está en la vista
            }
        });
    };

    // Seleccionar todos los elementos con la clase ".h2"
    const $sections = d.querySelectorAll(".h2");

    // Observar cada elemento con la clase ".h2"
    $sections.forEach(el => {
        const observer = new IntersectionObserver(cb, {
            threshold: [0.5, 0.75]
        });
        observer.observe(el);
    });
}

