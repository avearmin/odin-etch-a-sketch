function createGrid() {
    const gridContainer = document.getElementById("grid-container");
    for (let i = 0; i < 16; i++) {
        const newGridRow = document.createElement("div");
        newGridRow.classList.add("grid-row");
        gridContainer.appendChild(newGridRow);
        for (let i = 0; i < 16; i++) {
            const newGridSquare = document.createElement("div");
            newGridSquare.classList.add("grid-square");
            newGridRow.appendChild(newGridSquare);
        }
    }
}

createGrid();