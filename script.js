function filterForts(category) {

    let cards = document.querySelectorAll(".card");

    cards.forEach(card => {

        if (category === "all") {
            card.style.display = "block";
        }

        else if (card.classList.contains(category)) {
            card.style.display = "block";
        }

        else {
            card.style.display = "none";
        }

    });

}

function openPopup(imageSrc) {

    document.getElementById("popup").style.display = "flex";

    document.getElementById("popup-img").src = imageSrc;

}

function closePopup() {

    document.getElementById("popup").style.display = "none";

}