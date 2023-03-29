function createGrid() {
    const gridContainer = document.getElementById("grid-container");
    for (let i = 0; i < 16; i++) {
        const newGridRow = createGridRow();
        gridContainer.appendChild(newGridRow);
        for (let i = 0; i < 16; i++) {
            const newGridSquare = createGridSquare();
            newGridRow.appendChild(newGridSquare);
        }
    }
}

function createGridRow() {
    const newGridRow = document.createElement("div");
    newGridRow.classList.add("grid-row");
    return newGridRow;
}

function createGridSquare() {
    const newGridSquare = document.createElement("div");
    newGridSquare.classList.add("grid-square");
    return newGridSquare;
}

function drawOnHover() {
    const gridSquares = document.querySelectorAll(".grid-square");
    gridSquares.forEach(gridSquare => {
        gridSquare.addEventListener("mouseover", (event) => {
                gridSquare.style.backgroundColor = "black";
        });
    });
}

createGrid();
drawOnHover();