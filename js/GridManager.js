class GridManager {
  constructor(modeManager) {
    this.gridContainer = document.getElementById("grid-container");
    this.slider = document.getElementById("slider");
    this.mode = modeManager;
    
    this.createGrid();
    this.changeGridDimensions();
    this.displayGridDimensions();
  }
  
  createGrid() {
    for (let i = 0; i < this.slider.value; i++) {
      let newGridRow = this.createGridRow();
      this.gridContainer.appendChild(newGridRow);
      for (let i = 0; i < this.slider.value; i++) {
        let newGridSquare = this.createGridSquare();
        newGridRow.appendChild(newGridSquare);
      }
    }
    if (this.mode.isDraw) {
        this.mode.setToDraw();
      } else {
        this.mode.setToErase();
      }
  }
  
  createGridRow() {
    let newGridRow = document.createElement("div");
    newGridRow.classList.add("grid-row");
    return newGridRow;
  }

  createGridSquare() {
    let newGridSquare = document.createElement("div");
    newGridSquare.classList.add("grid-square");
    return newGridSquare;
  }
  
  changeGridDimensions() {
    this.slider.addEventListener("input", () => {
      this.removeChildNodes();
      this.createGrid(this.slider.value);
    });
  }
  
  removeChildNodes() {
    while (this.gridContainer.firstChild) {
      this.gridContainer.removeChild(this.gridContainer.firstChild);
    }
  }
  
  displayGridDimensions() {
    let sliderValue = document.getElementById("slider-value");
    slider.addEventListener("input", () => {
        sliderValue.textContent = `${this.slider.value}x${this.slider.value}`;
    });
  }
}