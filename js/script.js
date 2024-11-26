const container = document.querySelector(".container");

for (let i = 0; i < 16; i++) {
  const grid = document.createElement("div");
  grid.classList.toggle("grid");

  for (let j = 0; j < 16; j++) {
    const square = document.createElement("div");
    square.classList.toggle("square");
    
    grid.appendChild(square);
  }

  container.appendChild(grid);
}