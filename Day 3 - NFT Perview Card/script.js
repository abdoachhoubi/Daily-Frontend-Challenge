document.querySelector("#cover").addEventListener("mouseenter" , function(){
    document.querySelector("#view").classList.add("view__active");
});
document.querySelector("#view").addEventListener("mouseleave" , function(){
    document.querySelector("#view").classList.remove("view__active");
});
