let accs = document.querySelectorAll(".accordion");
let current = null;

function click() {
  if (current !== this) {
    for (let i = 0; i < accs.length; i++) {
      if (!accs[i].lastElementChild.classList.contains("hidden")) {
        accs[i].lastElementChild.classList.toggle("hidden");
        accs[i].firstElementChild.lastElementChild.classList.toggle("rotate");
        accs[i].firstElementChild.firstElementChild.classList.remove("active");
      }
    }
    this.lastElementChild.classList.remove("hidden");
    this.firstElementChild.lastElementChild.classList.toggle("rotate");
    this.firstElementChild.firstElementChild.classList.add("active");
    current = this;
  } else {
    this.lastElementChild.classList.add("hidden");
    this.firstElementChild.lastElementChild.classList.remove("rotate");
    this.firstElementChild.firstElementChild.classList.remove("active");
    current = null;
  }
}

accs.forEach(function (ele) {
  ele.addEventListener("click", click);
});
