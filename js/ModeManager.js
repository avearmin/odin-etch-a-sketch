class ModeManager {
  constructor(colorManager) {
    this.colorManager = colorManager;
    this.isDraw = true;
  }
  
  setToDraw() {
    this.isDraw = true;
    let cells = document.querySelectorAll(".grid-square");
    cells.forEach(cell => {
      cell.addEventListener("mouseover", () => {
        cell.style.backgroundColor = `rgb(
          ${this.colorManager.red.value},
          ${this.colorManager.green.value},
          ${this.colorManager.blue.value}
        )`;
      });
    });
  }
  
  setToErase() {
    this.isDraw = false;
    let cells = document.querySelectorAll(".grid-square");
    cells.forEach(cell => {
      cell.addEventListener("mouseover", () => {
        cell.style.backgroundColor = null;
      });  
    });
  }
}