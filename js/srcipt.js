const li = document.querySelectorAll(".nav__row > li");
const a = document.querySelectorAll(".nav__row > li > a");

if (li) {
    for (let x of li) {
        x.addEventListener("mouseenter", (e) => {
            if (e.target.querySelector(".content")) {
                e.target.querySelector(".content").classList.add("active");
                e.target.querySelector(".content").style.top = x.getBoundingClientRect().bottom + "px";
            }
        });
        x.addEventListener("mouseout", (e) => {
            if (e.target.querySelector(".content")) {
                e.target.querySelector(".content").classList.add("anim");
                setTimeout(() => {
                    e.target.querySelector(".content").classList.remove("anim")
                    e.target.querySelector(".content").classList.remove("active");
                }, 500);
            }
        });
        x.querySelector(".content").addEventListener("mouseover", (e) => {
            e.target.classList.add("active");
        });
        x.querySelector(".content").addEventListener("mouseout", (e) => {
            e.target.classList.add("anim");
            setTimeout(() => {
                e.target.classList.remove("anim")
                e.target.classList.remove("active");
            }, 500);
        });
    }
}