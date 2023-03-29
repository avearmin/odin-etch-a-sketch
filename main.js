function createGrid(sliderValue) {
    const gridContainer = document.getElementById("grid-container");
    for (let i = 0; i < sliderValue; i++) {
        const newGridRow = createGridRow();
        gridContainer.appendChild(newGridRow);
        for (let i = 0; i < sliderValue; i++) {
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
        gridSquare.addEventListener("mouseover", () => {
                gridSquare.style.backgroundColor = "black";
        });
    });
}

function getSliderValue() {
    const slider = document.getElementById("slider");
    return slider.value;
}

function displaySliderValue() {
    const slider = document.getElementById("slider");
    const sliderValue = document.getElementById("slider-value");
    slider.addEventListener("input", () => {
        sliderValue.textContent = `${getSliderValue()}x${getSliderValue()}`;
    });
}

function changeGridDimensions() {
    const gridContainer = document.getElementById("grid-container");
    const slider = document.getElementById("slider");
    slider.addEventListener("input", () => {
        removeChildNodes(gridContainer);
        createGrid(getSliderValue());
        drawOnHover();
    });
}

function removeChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

createGrid(getSliderValue());
displaySliderValue();
changeGridDimensions();
drawOnHover();


