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
      let row = this.createRow();
      this.gridContainer.appendChild(row);
      for (let i = 0; i < this.slider.value; i++) {
        let cell = this.createCell();
        row.appendChild(cell);
      }
    }
    if (this.mode.isDraw) {
        this.mode.setToDraw();
      } else {
        this.mode.setToErase();
      }
  }
  
  createRow() {
    let row = document.createElement("div");
    row.classList.add("grid-row");
    return row;
  }

  createCell() {
    let cell = document.createElement("div");
    cell.classList.add("grid-square");
    return cell;
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