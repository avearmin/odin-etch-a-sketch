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
                gridSquare.style.backgroundColor = `rgb(${getRedValue()}, ${getGreenValue()}, ${getBlueValue()})`;
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

function getRedValue() {
    const redSlider = document.getElementById("red-slider");
    return redSlider.value;
}

function getGreenValue() {
    const greenSlider = document.getElementById("green-slider");
    return greenSlider.value;
}

function getBlueValue() {
    const blueSlider = document.getElementById("blue-slider");
    return blueSlider.value;
}

function displayRGBValues() {
    const redSlider = document.getElementById("red-slider");
    const greenSlider = document.getElementById("green-slider");
    const blueSlider = document.getElementById("blue-slider");
    const redText = document.getElementById("red-text-value");
    const greenText = document.getElementById("green-text-value");
    const blueText = document.getElementById("blue-text-value");
    redSlider.addEventListener("input", () => {
        redText.textContent = `${getRedValue()}`;
    });
    greenSlider.addEventListener("input", () => {
        greenText.textContent = `${getGreenValue()}`;
    });
    blueSlider.addEventListener("input", () => {
        blueText.textContent = `${getBlueValue()}`;
    });
}

function displayRGBColor() {
    const redSlider = document.getElementById("red-slider");
    const greenSlider = document.getElementById("green-slider");
    const blueSlider = document.getElementById("blue-slider");
    const currentRGBColor = document.getElementById("current-rgb-color");
    redSlider.addEventListener("input", () => {
        currentRGBColor.style.backgroundColor = `rgb(${getRedValue()}, ${getGreenValue()}, ${getBlueValue()})`;
    });
    greenSlider.addEventListener("input", () => {
        currentRGBColor.style.backgroundColor = `rgb(${getRedValue()}, ${getGreenValue()}, ${getBlueValue()})`;
    });
    blueSlider.addEventListener("input", () => {
        currentRGBColor.style.backgroundColor = `rgb(${getRedValue()}, ${getGreenValue()}, ${getBlueValue()})`;
    });
}

function clearGridOnBtnClick() {
    const clearBtn = document.getElementById("clear-all-btn");
    const gridContainer = document.getElementById("grid-container");
    clearBtn.addEventListener("click", () => {
        removeChildNodes(gridContainer);
        createGrid(getSliderValue());
        drawOnHover();
    });
}

createGrid(getSliderValue());
displaySliderValue();
changeGridDimensions();
drawOnHover();
displayRGBValues();
displayRGBColor();
clearGridOnBtnClick();

