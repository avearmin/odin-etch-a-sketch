function createGrid() {
    const gridContainer = document.getElementById("grid-container");
    for (let i = 0; i < 256; i++) {
        const newGridSquare = document.createElement("div");
        gridContainer.appendChild(newGridSquare);
    }
}