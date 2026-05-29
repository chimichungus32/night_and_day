const toggle = document.getElementById("toggle");

toggle.addEventListener("click", () => {
    document.documentElement.classList.toggle("dark");
});

function createStars(count) {
    for (let i = 0; i < count; i++) {
        const star = document.createElement("div");
        star.className = "star";
        star.style.left = `${Math.random() * 100}vw`;
        star.style.top = `${Math.random() * 100}vh`;
        star.style.animationDelay = `${Math.random() * 3}s`; // 0 to 3 seconds 
        star.style.animationDuration = `${1.5 + Math.random() * 2}s`; // 1.5 to 3.5 seconds 
        document.body.appendChild(star);
    }
}

createStars(80);
