document.addEventListener('DOMContentLoaded', function() {
    // Obtener el modal, el botón de cerrar, el botón de reservar y los elementos de la tarjeta
    var modal = document.getElementById("modal");
    var closeBtn = document.getElementsByClassName("close-btn")[0];
    var closeModalBtn = document.getElementById("closeModalBtn");
    var reserveBtn = document.getElementById("reserveBtn");  // Botón de reservar

    // Función para abrir el modal con la información de la tarjeta
    function openModal(card) {
        // Obtener los datos de la tarjeta seleccionada
        var title = card.querySelector("h3").textContent;
        var description = card.querySelector("p").textContent;

        // Actualizar el modal con la información de la tarjeta
        document.getElementById("modal-title").textContent = title;
        document.getElementById("modal-description").textContent = description;

        // Puedes agregar más información dinámica aquí
        document.getElementById("modal-hours").textContent = "Horario: " + "9:00 AM - 5:00 PM";  // Ejemplo
        document.getElementById("modal-price").textContent = "Precio: " + "$50";  // Ejemplo
        document.getElementById("modal-persons").textContent = "Personas: " + "10 personas";  // Ejemplo

        // Mostrar el modal
        modal.style.display = "block";
    }

    // Función para cerrar el modal
    function closeModal() {
        modal.style.display = "none";
    }

    // Asignar el evento de clic para cerrar el modal con la X
    closeBtn.onclick = closeModal;

    // Asignar el evento de clic para cerrar el modal con el botón "Cerrar"
    closeModalBtn.onclick = closeModal;

    // Cerrar el modal si el usuario hace clic fuera de él
    window.onclick = function(event) {
        if (event.target == modal) {
            closeModal();
        }
    }

    // Asignar el evento de clic a las tarjetas
    var cards = document.querySelectorAll(".card");
    cards.forEach(function(card) {
        card.addEventListener("click", function() {
            openModal(card);
        });
    });

    // Función para redirigir al formulario de reserva
    reserveBtn.onclick = function() {
        // Redirige a la página de reservas (Formulario/index.html)
        window.location.href = "/public/Formulario/index.html"; 
    };
});
