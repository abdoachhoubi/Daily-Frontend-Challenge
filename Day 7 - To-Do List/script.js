let addtask = document.querySelector("#push");
let target = document.querySelector(".tasks");
let content = document.querySelector("#task__value");
let err = document.querySelector(".error");
let keys = [];
let map = new Map();
let key = "";
let ver = "";

addtask.addEventListener("click", function(){
    if (content.value !== ""){
        key = "item" + Date.now();
        keys.push(key);
        window.localStorage.setItem("keys", keys);
        map.set(key, content.value);
        localStorage.myMap = JSON.stringify(Array.from(map.entries()));
        newElement(content.value, key);
        content.value = "";
    } else {
        err.classList.remove("none");
    }
});

content.addEventListener("focus", function(){
    err.classList.add("none");
});

// Adding new tasks to the list
function newElement(ele, key){
    
    let container = document.createElement("div");
    let button = document.createElement("button");
    button.setAttribute("class", "delete");
    button.setAttribute("key", key);

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
        localStorage.clear();
        ver = button.getAttribute("key");
        keys.splice(keys.indexOf(ver) , 1);
        window.localStorage.setItem("keys", keys);
        map.delete(ver);
        localStorage.myMap = JSON.stringify(Array.from(map.entries()));
        button.parentElement.remove();
    });
};

window.addEventListener("load", function() {
    if(localStorage.getItem("keys") !== ""){
        keys = localStorage.getItem("keys").split(",");
        map = new Map(JSON.parse(localStorage.myMap));
        for (let i = 0; i < keys.length; i++){
            newElement(map.get(keys[i]), keys[i]);
        }
    }
    err.classList.add("none");
});
