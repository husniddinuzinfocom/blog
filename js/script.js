const barsIcon = document.querySelector(".bars-icon");
const menu = document.querySelector(".navbar ul");
barsIcon.addEventListener("click", menuOpen);
function menuOpen() {
    barsIcon.classList.toggle("active");
    menu.classList.toggle("active");
    console.log("s")
}