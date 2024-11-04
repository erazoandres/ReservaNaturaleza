document.addEventListener("DOMContentLoaded", () => {
    let indiceActual = 0; // Índice de la imagen actual
    const elementos = document.querySelectorAll('.carrusel-item');

    if (elementos.length === 0) {
        console.error("No se encontraron elementos del carrusel.");
        return;
    }

    function mostrarSlide(indice) {
        elementos.forEach((elemento) => {
            elemento.classList.remove('active'); // Quita la clase 'active' de todas las imágenes
        });
        elementos[indice].classList.add('active'); // Añade la clase 'active' a la imagen actual
    }

    function siguienteSlide() {
        indiceActual = (indiceActual + 1) % elementos.length; // Aumenta el índice y vuelve al inicio si es necesario
        mostrarSlide(indiceActual); // Muestra la imagen en el nuevo índice
    }

    function anteriorSlide() {
        indiceActual = (indiceActual - 1 + elementos.length) % elementos.length; // Disminuye el índice y va al final si es necesario
        mostrarSlide(indiceActual); // Muestra la imagen en el nuevo índice
    }

    mostrarSlide(indiceActual); // Muestra la primera imagen al cargar

    // Control automático del carrusel cada 3 segundos
    setInterval(siguienteSlide, 3000);
});