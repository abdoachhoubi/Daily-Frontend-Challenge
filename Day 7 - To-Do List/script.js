let addtask = document.querySelector("#push");
let target = document.querySelector(".tasks");
let content = document.querySelector("#task__value");
let err = document.querySelector(".error");
let keys = [];

addtask.addEventListener("click", function(){
    if (content.value !== ""){
        keys.push(content.value);
        window.localStorage.setItem("keys", keys);
        window.localStorage.setItem(content.value, content.value);
        newElement(content.value);
        content.value = "";
    } else {
        err.classList.remove("none");
        console.log(content.value);
    }
});

content.addEventListener("focus", function(){
    err.classList.add("none");
});

// Adding new tasks to the list
function newElement(ele){
    
    let container = document.createElement("div");
    let button = document.createElement("button");
    button.setAttribute("class", "delete");

    container.setAttribute("id", "task");
    container.setAttribute("class", "task");

    let text = document.createElement("p");
    text.setAttribute("class", "paragraph");

    let task = document.createTextNode(ele);
    let btn = document.createTextNode("delete");

    button.append(btn);
    text.append(task);
    container.append(text);
    container.append(button);
    target.append(container);

    button.addEventListener("click", function(){
        let ver = keys.indexOf(button.previousElementSibling.textContent);
        let del__it = button.previousElementSibling.textContent;
        keys.splice(ver , 1);
        window.localStorage.setItem("keys", keys);
        window.localStorage.removeItem(del__it);
        button.parentElement.remove();
    });
};

function addElement(ele){
    let container = document.createElement("div");
    let button = document.createElement("button");
    button.setAttribute("class", "delete");

    container.setAttribute("id", "task");
    container.setAttribute("class", "task");

    let text = document.createElement("p");
    text.setAttribute("class", "paragraph");

    let task = document.createTextNode(ele);
    let btn = document.createTextNode("delete");

    button.append(btn);
    text.append(task);
    container.append(text);
    container.append(button);
    target.append(container);

    button.addEventListener("click", function(){
        let ver = keys.indexOf(button.previousElementSibling.textContent);
        let del__it = button.previousElementSibling.textContent;
        keys.splice(ver , 1);
        window.localStorage.setItem("keys", keys);
        window.localStorage.removeItem(del__it);
        button.parentElement.remove();
    });
}

window.addEventListener("load", function() {
    if(localStorage.getItem("keys") !== ""){
        keys = localStorage.getItem("keys").split(",");
        for (let i = 0; i < keys.length; i++){
            newElement(localStorage.getItem(keys[i]));
        }
    }
    err.classList.add("none");
});
