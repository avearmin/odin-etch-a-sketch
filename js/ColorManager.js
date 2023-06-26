class ColorManager {
  constructor() {
    this.red = document.getElementById("red-slider");
    this.blue = document.getElementById("blue-slider");
    this.green = document.getElementById("green-slider");
    this.rgb = document.getElementById("current-rgb-color");
    
    this.displayRGBColor();
    this.displayRGBValues();
  }
  
  displayRGBColor() {
    this.red.addEventListener("input", () => {
      this.rgb.style.backgroundColor = `rgb(${this.red.value}, ${this.green.value}, ${this.blue.value})`;
    });
    this.green.addEventListener("input", () => {
      this.rgb.style.backgroundColor = `rgb(${this.red.value}, ${this.green.value}, ${this.blue.value})`;
    });
    this.blue.addEventListener("input", () => {
      this.rgb.style.backgroundColor = `rgb(${this.red.value}, ${this.green.value}, ${this.blue.value})`;
    });
  }
  
  displayRGBValues() {
    let redText = document.getElementById("red-text-value");
    let greenText = document.getElementById("green-text-value");
    let blueText = document.getElementById("blue-text-value");
    this.red.addEventListener("input", () => {
        redText.textContent = `${this.red.value}`;
    });
    this.green.addEventListener("input", () => {
        greenText.textContent = `${this.green.value}`;
    });
    this.blue.addEventListener("input", () => {
        blueText.textContent = `${this.blue.value}`;
    });
  }
}