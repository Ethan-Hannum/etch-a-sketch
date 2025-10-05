const container = document.querySelector("#container");
const btn = document.querySelector("#btn");
btn.addEventListener("click", changeSize);

let darkness = 10;

function randomHex() {
    const maxVal = 0xFFFFFF;
    const randomNum = Math.floor(Math.random() * (maxVal + 1));
    const hexColor = randomNum.toString(16);
    const lowerHex = hexColor.padStart(6, "0");
    return `#${lowerHex.toUpperCase()}`;
}

// When mouse enters div, change it's color
function changeColor(e) {
    if (darkness <= 99) {
        e.target.style.opacity = `${darkness}%`;
        darkness =+ darkness + 10;
    } else if (darkness >= 100) {
        e.target.style.opacity = "1";
    }
    e.target.style.background = `${randomHex()}`;
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

// Function changeSize will ask user for size, then delete current grid...
// and then call createGrid with inputSize to create new grid
function changeSize() {
    const inputSize = +prompt("How many squares per side for the new grid?", 16);
    const grid = document.querySelectorAll(".grid");
    grid.forEach(square => container.removeChild(square));
    darkness = 10;
    createGrid(inputSize);
}

createGrid(16);
