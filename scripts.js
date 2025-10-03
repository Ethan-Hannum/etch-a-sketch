const container = document.querySelector("#container");
// Loop to create X amount of "square" divs for the grid
for (i = 1; i <= 16; ++i) {
    const div = document.createElement("div");
    div.setAttribute("id", `div${i}`);
    div.classList.add("grid");
    container.appendChild(div);
}
// Append divs to container div

