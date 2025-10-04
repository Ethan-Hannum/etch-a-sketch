const container = document.querySelector("#container");
// Values for what the user will input and the width/height of a div
let userInput = 16;
let totalSquares = userInput ** 2;
let divWidth = 960 / userInput;

// When mouse enters div, change it's color
function changeColor(e) {
    e.target.style.background = "blue";
}

// Loop to create X amount of "square" divs for the grid
for (i = 1; i <= totalSquares; ++i) {
    const div = document.createElement("div");
    div.setAttribute("id", `div${i}`);
    div.classList.add("grid");
    div.setAttribute("style", `width: ${divWidth}px;`)
    div.addEventListener("mouseenter", changeColor);
    container.appendChild(div);
}

