function filterCard(category){
    const cards = document.querySelectorAll(".card");

    cards.forEach(card =>{
        if (card.getAttribute("category") == category){
            card.style.display = "block" ; 
        }else{
            card.style.display = "none";
        }
    });
}