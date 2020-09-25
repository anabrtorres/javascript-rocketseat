// EXERCISE #1 
var btnElement = document.getElementById("btn");
var boxElement = document.getElementById("box");

btnElement.onclick = function() {
    var box = document.createElement("div");

    box.style.width = "100px";
    box.style.height = "100px";
    box.style.backgroundColor = "#F00";
    box.style.margin = "10";

    boxElement.appendChild(box);
};


// EXERCISE #2
function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

var btnElement = document.getElementById("btn");
var boxElement = document.getElementById("box");

btnElement.onclick = function() {
    var box = document.createElement("div");

    box.style.width = "100px";
    box.style.height = "100px";
    box.style.backgroundColor = "#F00";
    box.style.margin = "10";

    box.onmouseover = function() {
        box.style.backgroundColor = getRandomColor();
    };
    boxElement.appendChild(box);
};


// EXERCISE #3



// EXERCISE #4


