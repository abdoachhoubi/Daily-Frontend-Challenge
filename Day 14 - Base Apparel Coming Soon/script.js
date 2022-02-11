let button = document.querySelector("#btn");
let button2 = document.querySelector("#btn2");
let cta = document.querySelector(".cta");
let cta2 = document.querySelector(".cta2");
let email = document.querySelector("#email__dsk");
let email2 = document.querySelector("#email");
let icon = document.querySelector(".error__icon");
let icon2 = document.querySelectorAll(".error__icon")[1];
let text = document.querySelector(".error__text");
let text2 = document.querySelectorAll(".error__text")[1];
let valid = false;

function errorHandle() {
  if (email.value === "") {
    icon.classList.remove("hidden");
    text.innerHTML = "Please enter your email!";
    text.classList.remove("hidden");
    cta.classList.add("cta__error");
    cta.classList.remove("cta");
  } else {
    let arr = email.value.split("");
    for (let i = 0; i <= arr.length; i++) {
      if (arr[i] === "@") {
        valid = true;
      }
    }

    if (valid === false || email.value.startsWith("@")) {
      icon.classList.remove("hidden");
      text.innerHTML = "Please enter a valid email!";
      text.classList.remove("hidden");
      cta.classList.add("cta__error");
      cta.classList.remove("cta");
    }
  }
}

function errorHandle2() {
  if (email2.value === "") {
    icon2.classList.remove("hidden");
    text2.innerHTML = "Please enter your email!";
    text2.classList.remove("hidden");
    cta2.classList.add("cta__error");
    cta2.classList.remove("cta");
  } else {
    let arr = email2.value.split("");
    for (let i = 0; i <= arr.length; i++) {
      if (arr[i] === "@") {
        valid = true;
      }
    }

    if (valid === false || email2.value.startsWith("@")) {
      icon2.classList.remove("hidden");
      text2.innerHTML = "Please enter a valid email!";
      text2.classList.remove("hidden");
      cta2.classList.add("cta__error");
      cta2.classList.remove("cta");
    }
  }
}

button.addEventListener("click", errorHandle);
button2.addEventListener("click", errorHandle2);
email.addEventListener("focus", function () {
  icon.classList.add("hidden");
  text.classList.add("hidden");
  cta.classList.remove("cta__error");
  cta.classList.add("cta");
  valid = false;
});
email2.addEventListener("focus", function () {
  icon2.classList.add("hidden");
  text2.classList.add("hidden");
  cta2.classList.remove("cta__error");
  cta2.classList.add("cta");
  valid = false;
});
