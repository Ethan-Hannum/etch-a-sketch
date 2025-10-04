const container = document.querySelector("#container");
// Values for what the user will input and the width/height of a div
let userInput = 16;
let divWidth = 960 / userInput;
// Loop to create X amount of "square" divs for the grid
for (i = 1; i <= 256; ++i) {
    const div = document.createElement("div");
    div.setAttribute("id", `div${i}`);
    div.classList.add("grid");
    div.setAttribute("style", `width: ${divWidth}px`)
    container.appendChild(div);
}

