// ===========================
// LOVE LETTER SCRIPT
// ===========================

const envelope = document.getElementById("envelope");
const heartsContainer = document.getElementById("hearts-container");
// const music = document.getElementById("bgMusic");

let opened = false;

// ===========================
// OPEN ENVELOPE
// ===========================

envelope.addEventListener("click", () => {

    if (opened) return;

    opened = true;

    envelope.classList.add("open");

setTimeout(()=>{

    envelope.classList.add("show-letter");

},1200);

    // Optional music
    /*
    music.volume = 0.5;
    music.play();
    */

    // Hearts
    createHearts();

    // Sparkles
    createSparkles();

    // Fade then redirect
    setTimeout(() => {

        document.body.style.transition = "opacity 1.2s";
        document.body.style.opacity = "0";

    }, 2500);

setTimeout(() => {

window.location.href = "letter.html";

}, 4500);

});

// ===========================
// HEARTS
// ===========================

function createHearts() {

    for (let i = 0; i < 35; i++) {

        const heart = document.createElement("div");

        heart.innerHTML = "❤";

        heart.style.position = "fixed";

        heart.style.left =
            window.innerWidth / 2 +
            (Math.random() * 160 - 80) +
            "px";

        heart.style.top =
            window.innerHeight / 2 +
            "px";

        heart.style.fontSize =
            Math.random() * 18 + 16 + "px";

        heart.style.pointerEvents = "none";

        heart.style.zIndex = "999";

        heart.style.color =
            Math.random() > .5
                ? "#ff4f79"
                : "#ff89a5";

        heart.style.transition =
            "transform 3s ease-out, opacity 3s";

        heartsContainer.appendChild(heart);

        setTimeout(() => {

            const x = Math.random() * 400 - 200;
            const y = -(Math.random() * 350 + 150);

            heart.style.transform =
                `translate(${x}px,${y}px) rotate(${Math.random()*720}deg)`;

            heart.style.opacity = "0";

        }, 50);

        setTimeout(() => {

            heart.remove();

        }, 3000);

    }

}

// ===========================
// SPARKLES
// ===========================

function createSparkles() {

    for (let i = 0; i < 50; i++) {

        const star = document.createElement("div");

        star.innerHTML = "✨";

        star.style.position = "fixed";

        star.style.left =
            window.innerWidth / 2 +
            (Math.random() * 220 - 110) +
            "px";

        star.style.top =
            window.innerHeight / 2 +
            (Math.random() * 120 - 60) +
            "px";

        star.style.fontSize =
            Math.random() * 14 + 12 + "px";

        star.style.pointerEvents = "none";

        star.style.opacity = "0";

        star.style.transition = "all 2.5s ease";

        heartsContainer.appendChild(star);

        setTimeout(() => {

            star.style.opacity = "1";

            star.style.transform =
                `translate(
                    ${Math.random()*220-110}px,
                    ${Math.random()*220-110}px
                ) scale(1.5)`;

        }, 10);

        setTimeout(() => {

            star.style.opacity = "0";

        }, 1800);

        setTimeout(() => {

            star.remove();

        }, 2500);

    }

}
