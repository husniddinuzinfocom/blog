// mobile menu started
const barsIcon = document.querySelector(".bars-icon");
const menu = document.querySelector(".navbar ul");
if (barsIcon) {
  barsIcon.addEventListener("click", menuOpen);
  function menuOpen() {
    barsIcon.classList.toggle("active");
    menu.classList.toggle("active");
  }
}
// mobile menu finished

// sign in change sign up functions started
const signInBtn = document.querySelector(".signin");
const signUpBtn = document.querySelector(".signup");
const signUpForm = document.querySelector(".sign-up-form");
const signInForm = document.querySelector(".sign-in-form");
const signTitle = document.querySelector(".login-title");
if (signInBtn && signUpBtn && signTitle) {
  signInBtn.addEventListener("click", signIn);
  function signIn() {
    signUpForm.classList.remove("active");
    signInForm.classList.add("active");
    signUpBtn.classList.remove("active");
    signInBtn.classList.add("active");
  }

  signUpBtn.addEventListener("click", signUp);
  function signUp() {
    signUpForm.classList.add("active");
    signInForm.classList.remove("active");
    signUpBtn.classList.add("active");
    signInBtn.classList.remove("active");
  }
}
// sign in change sign up functions finished

// send email started
const form = document.querySelector(".mail-send-form");
if (form) {
  form.addEventListener("submit", sendMail);
  async function sendMail(e) {
    e.preventDefault();
    const url = "/email";
    const data = JSON.stringify({
      email: form.querySelector("input").value,
      referer: window.location.pathname,
    });
    const headers = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: data,
    };
    if (form.querySelector("input").value !== "") {
      const response = fetch(url, headers);
      await response.then((res) => res.status);
      form.querySelector("input").value = "";
    }
  }
}
// send email finished