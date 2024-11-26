const DEFAULT_SIZE = 16;

const container = document.querySelector(".container");

const changeButton = document.querySelector(".change");

changeButton.addEventListener("click", () => {
  let newSize;
  
  while (true) {
    newSize = +prompt("Number of squares per side for the new grid", 16);
    if (newSize >= 16 && newSize <= 100) {
      break;
    }
  }

  container.replaceChildren();
  createGrid(newSize);
})

function createGrid(size = DEFAULT_SIZE) {
  for (let i = 0; i < size; i++) {
    const grid = document.createElement("div");
    grid.classList.toggle("grid");
  
    for (let j = 0; j < size; j++) {
      const square = document.createElement("div");
      square.classList.toggle("square");
  
      square.addEventListener("mouseenter", () => {
        square.style.backgroundColor = "black";
      });
      
      grid.appendChild(square);
    }
  
    container.appendChild(grid);
  }
}

createGrid();