const li =document.querySelectorAll(".nav__row > li");
const a =document.querySelectorAll(".nav__row > li > a");

if(li) {
    for(let x of li) {
        x.addEventListener("mouseover", (e) => {
            e.target.querySelector(".content").classList.add("active");
        });
        x.addEventListener("mouseout", (e) => {
            e.target.querySelector(".content").classList.remove("active");
        });
        x.querySelector("a").addEventListener("mouseover", (e) => {
            e.target.nextElementSibling.nextElementSibling.classList.add("active");
        });
        x.querySelector("a").addEventListener("mouseout", (e) => {
            e.target.nextElementSibling.nextElementSibling.classList.remove("active");
        });
        x.querySelector(".content").addEventListener("mouseover", (e) => {
            e.target.classList.add("active");
        });
        x.querySelector(".content").addEventListener("mouseout", (e) => {
            e.target.classList.remove("active");
        });
        x.querySelector("span").addEventListener("mouseover", (e) => {
            e.target.nextElementSibling.classList.add("active");
        });
        x.querySelector("span").addEventListener("mouseout", (e) => {
            e.target.nextElementSibling.classList.remove("active");
        });
    }
}