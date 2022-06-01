const inpPass = document.querySelector(".password");
const iconEye = document.querySelector(".icon");

iconEye.addEventListener("mousedown", () => {
    inpPass.setAttribute("type", "text");
});

iconEye.addEventListener("mouseup", () => {
    inpPass.setAttribute("type", "password");
});