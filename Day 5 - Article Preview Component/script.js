document.querySelector(".share__icon__d").addEventListener("mouseenter", function(){
    document.querySelector(".desktop").classList.remove("none");
});

document.querySelector(".desktop").addEventListener("mouseleave", function(){
    document.querySelector(".desktop").classList.add("none");
});

document.querySelector(".share__icon__m").addEventListener("click", function(){
        document.querySelector(".mobile").classList.remove("none");
        document.querySelector(".profile").classList.add("none");
});

document.querySelector(".share__icon__mv").addEventListener("click", function(){
        document.querySelector(".mobile").classList.add("none");
        document.querySelector(".profile").classList.remove("none");
});