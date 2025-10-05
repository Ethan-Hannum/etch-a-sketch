const container = document.querySelector("#container");
const btn = document.querySelector("#btn");
btn.addEventListener("click", changeSize);

// When mouse enters div, change it's color
function changeColor(e) {
    e.target.style.background = "blue";
}
// Loop to create X amount of "square" divs for the grid
function createGrid(size) {
    const totalSquares = size ** 2;
    // divWidth is the width or height of the container (960px) divded by size 
    const divWidth = 960 / size;

    for (i = 1; i <= totalSquares; ++i) {
        const div = document.createElement("div");
        div.setAttribute("id", `div${i}`);
        div.classList.add("grid");
        div.setAttribute("style", `width: ${divWidth}px;`)
        div.addEventListener("mouseenter", changeColor);
        container.appendChild(div);
    }
}

function changeSize() {
    const inputSize = +prompt("How many squares per side for the new grid?", 16);
    const grid = document.querySelectorAll(".grid");
    grid.forEach(square => container.removeChild(square));
    createGrid(inputSize);
}

createGrid(16);
