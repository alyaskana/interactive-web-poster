const shapesElement = document.querySelector('.shapes');

function handleResize() {
  if (this.innerWidth / this.innerHeight >= 16 / 9) {
    shapesElement.style.height = "calc(100vw*9/16)"; 
    shapesElement.style.width = "100vw"
  } else {
    shapesElement.style.height = "100vh"; 
    shapesElement.style.width = "calc(100vh*16/9)"
  }
}
handleResize()
window.addEventListener("resize", handleResize)