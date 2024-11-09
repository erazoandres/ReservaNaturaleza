
function filterCards(category) {
    //obtiene todas las tarjetas
    const cards = document.querySelectorAll('.card');

    //itera sobre cada tarjeta y verifica su categoria
    cards.forEach(card => {
        //si la categoria de tarjeta coincide con la seleccionada
        if (card.getAttribute('data-category') === category) {
            card.style.display = 'block';
        } else {
            //si no coincide se oculta
            card.style.display = 'none';
        }
    });
}
