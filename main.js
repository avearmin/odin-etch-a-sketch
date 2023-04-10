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

function changeGridDimensions(isEraserBtnOn) {
    const gridContainer = document.getElementById("grid-container");
    const slider = document.getElementById("slider");
    slider.addEventListener("input", () => {
        removeChildNodes(gridContainer);
        createGrid(getSliderValue());
        isEraserBtnOn = false ? drawOnHover() : eraseOnHover();
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
    clearBtn.addEventListener("click", () => {    
        const gridSquares = document.querySelectorAll(".grid-square");
        gridSquares.forEach(gridSquare => {
            gridSquare.style.backgroundColor = null;
        });
    });
}

function toggleEraserBtn(isEraserBtnOn) {
    const eraserBtn = document.getElementById("eraser-btn");
    eraserBtn.addEventListener("click", () => {
        if (isEraserBtnOn === false) {
            changeEraserBtnColor(isEraserBtnOn);
            eraseOnHover();
            isEraserBtnOn = true;
        } else {
            changeEraserBtnColor(isEraserBtnOn);
            drawOnHover();
            isEraserBtnOn = false;
        }
    });
}

function changeEraserBtnColor(isEraserBtnOn) {
    const eraserBtn = document.getElementById("eraser-btn");
    if (isEraserBtnOn === false) {
        eraserBtn.style.backgroundColor = "#006C84";
        eraserBtn.style.color = "#ffffff";
    }
    if (isEraserBtnOn === true) {
        eraserBtn.style.backgroundColor = null;
        eraserBtn.style.color = null;
    }
}

function eraseOnHover() {
    const gridSquares = document.querySelectorAll(".grid-square");
    gridSquares.forEach(gridSquare => {
        gridSquare.addEventListener("mouseover", () => {
                gridSquare.style.backgroundColor = null;
        });  
    });
}

function main() {
    let isEraserBtnOn = false;
    createGrid(getSliderValue());
    displaySliderValue();
    changeGridDimensions(isEraserBtnOn);
    drawOnHover();
    displayRGBValues();
    displayRGBColor();
    clearGridOnBtnClick();
    toggleEraserBtn(isEraserBtnOn);
}

main();