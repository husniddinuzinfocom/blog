// mobile menu started
const barsIcon = document.querySelector(".bars-icon");
const menu = document.querySelector(".navbar ul");
if (barsIcon) {
  barsIcon.addEventListener("click", menuOpen);
  function menuOpen() {
    barsIcon.classList.toggle("active");
    menu.classList.toggle("active");
    console.log("s");
  }
}
// mobile menu finished

// sign in change sign up functions started
const signInBtn = document.querySelector(".signin");
const signUpBtn = document.querySelector(".signup");
const logInForm = document.querySelector(".login-form");
const signTitle = document.querySelector(".login-title");
if (signInBtn && signUpBtn && logInForm && signTitle) {
  signInBtn.addEventListener("click", signIn);
  function signIn() {
    logInForm.classList.add("active");
    signInBtn.classList.add("active");
    signUpBtn.classList.remove("active");
    signTitle.textContent = "Вход";
  }

  signUpBtn.addEventListener("click", signUp);
  function signUp() {
    logInForm.classList.remove("active");
    signInBtn.classList.remove("active");
    signUpBtn.classList.add("active");
    signTitle.textContent = "Регистрация";
  }
}

// sign in change sign up functions finished
