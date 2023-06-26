class ModeManager {
  constructor(colorManager) {
    this.colorManager = colorManager;
    this.isDraw = true;
  }
  
  setToDraw() {
    this.isDraw = true;
    let gridSquares = document.querySelectorAll(".grid-square");
    gridSquares.forEach(gridSquare => {
      gridSquare.addEventListener("mouseover", () => {
        gridSquare.style.backgroundColor = `rgb(
          ${this.colorManager.red.value},
          ${this.colorManager.green.value},
          ${this.colorManager.blue.value}
        )`;
      });
    });
  }
  
  setToErase() {
    this.isDraw = false;
    let gridSquares = document.querySelectorAll(".grid-square");
    gridSquares.forEach(gridSquare => {
      gridSquare.addEventListener("mouseover", () => {
        gridSquare.style.backgroundColor = null;
      });  
    });
  }
}