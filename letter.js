// Check if all pages have been viewed
function checkFinished() {

    const done =
        localStorage.getItem("panpan") &&
        localStorage.getItem("pinky") &&
        localStorage.getItem("flower") &&
        localStorage.getItem("outing");

    if (done) {

        // Open last.html in a new tab
        window.open("Last.html", "_blank");

        // Para hindi paulit-ulit mag-open
        localStorage.removeItem("panpan");
        localStorage.removeItem("pinky");
        localStorage.removeItem("flower");
        localStorage.removeItem("outing");
    }

}

// Run every time letter.html is opened
window.onload = checkFinished;


// Open selected page
function imageClick(url) {

    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {
        card.style.pointerEvents = "none";
    });

    document.body.style.transition = "opacity .8s ease";
    document.body.style.opacity = "0";

    setTimeout(() => {
        window.location.href = url;
    }, 800);

}