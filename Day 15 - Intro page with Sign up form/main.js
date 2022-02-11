let input = document.querySelectorAll("input");
let first__name = document.querySelector("#first_name");
let last__name = document.querySelector("#last_name");
let email = document.querySelector("email");
let password = document.querySelector("password");
let button = document.querySelector("button");

function empty() {
  input.forEach(function (el) {
    if (el.value === "") {
      el.parentElement.nextElementSibling.classList.remove("hidden");
      el.parentElement.classList.add("input_error");
      el.nextElementSibling.classList.remove("hidden");
    }
  });
}

function hide__error() {
  console.log(this);
  this.parentElement.nextElementSibling.classList.add("hidden");
  this.parentElement.classList.remove("input_error");
  this.parentElement.classList.add("focus");
  this.nextElementSibling.classList.add("hidden");
}

function blur() {
  this.parentElement.classList.remove("focus");
}

button.addEventListener("click", empty);

input.forEach(function (el) {
  el.addEventListener("focus", hide__error);
  el.addEventListener("blur", blur);
});
