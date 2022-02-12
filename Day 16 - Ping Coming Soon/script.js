let input = document.querySelector("input");
let target = document.querySelector(".input");
let button = document.querySelector("button");
let error = document.querySelector(".error");

target.addEventListener("mouseenter", function () {
  target.classList.remove("input");
  target.classList.remove("error__state");
  target.classList.add("focus__state");
  error.classList.add("hidden");
});

input.addEventListener("focus", function () {
  target.classList.remove("input");
  target.classList.remove("error__state");
  target.classList.add("focus__state");
  error.classList.add("hidden");
});

input.addEventListener("focus", function () {
  target.classList.remove("input");
  target.classList.remove("error__state");
  target.classList.add("focus__state");
  error.classList.add("hidden");
});

input.addEventListener("blur", function () {
  target.classList.remove("error__state");
  target.classList.remove("focus__state");
  target.classList.add("input");
});
button.addEventListener("mouseenter", function () {
  let valid = false;
  let arr = input.value.split("");
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "@") {
      valid = true;
    }
  }
  if (input.value === "") {
    error.innerHTML = "Please enter your email address!";
    error.classList.remove("hidden");
    target.classList.remove("input");
    target.classList.remove("focus__state");
    target.classList.add("error__state");
  } else if (
    input.value.startsWith("@") ||
    input.value.endsWith("@") ||
    input.value.startsWith(".") ||
    input.value.endsWith(".") ||
    input.value.startsWith("#") ||
    input.value.endsWith("#") ||
    input.value.startsWith("*") ||
    input.value.endsWith("*") ||
    valid === false
  ) {
    error.innerHTML = "Please enter a valid email address!";
    error.classList.remove("hidden");
    target.classList.remove("input");
    target.classList.remove("focus__state");
    target.classList.add("error__state");
  }
});
