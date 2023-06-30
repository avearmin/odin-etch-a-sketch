class UtilitiesManager {
  constructor(modeManager) {
    this.clearAll = document.getElementById("clear-all-btn");
    this.eraser = document.getElementById("eraser-btn");
    this.mode = modeManager;
    
    this.initalizeClearAllBtn();
    this.initalizeEraserBtn();
  }
  
  initalizeClearAllBtn() {
    this.clearAll.addEventListener("click", () => {    
      let cells = document.querySelectorAll(".grid-square");
      cells.forEach(cell => {
        cell.style.backgroundColor = null;
      });
    });
  }

  initalizeEraserBtn() {
    this.eraser.addEventListener("click", () => {
      if (this.mode.isDraw) {
        this.mode.setToErase();
        this.changeEraserBtnColor();
      } else {
        this.mode.setToDraw();
        this.changeEraserBtnColor();
      }
    });
  }

  changeEraserBtnColor() {
    if (this.mode.isDraw) {
      this.eraser.style.backgroundColor = null;
      this.eraser.style.color = null;
    } else {
      this.eraser.style.backgroundColor = "#006C84";
      this.eraser.style.color = "#ffffff";
    }
  }
}