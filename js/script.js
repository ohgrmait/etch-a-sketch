const DEFAULT_SIZE = 16;

const container = document.querySelector(".container");

const changeButton = document.querySelector(".change");

const randomBox = document.querySelector("#randomize");

const darkenBox = document.querySelector("#darkening");

changeButton.addEventListener("click", () => {
  let newSize;
  
  while (true) {
    newSize = +prompt("Number of squares per side for the new grid", 16);
    if (newSize >= 16 && newSize <= 100) {
      break;
    } else {
      alert("Only values between 16 and 100 (both inclusive) are allowed.");
    }
  }

  container.replaceChildren();
  createGrid(newSize);
});

function getRandomIntInclusive(min, max) {
  // Taken from https://shorturl.at/TSjlB
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

function randomizeColors(e) {
  const red = getRandomIntInclusive(0, 255);
  const green = getRandomIntInclusive(0, 255);
  const blue = getRandomIntInclusive(0, 255);
  e.target.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
}

function darkeningColors(e) {
  let opacity = window.getComputedStyle(e.target).opacity;
  if (opacity > 0) {
    opacity -= 0.1;
    e.target.style.opacity = opacity;
  }
}

function createGrid(size = DEFAULT_SIZE) {
  for (let i = 0; i < size; i++) {
    const grid = document.createElement("div");
    grid.classList.toggle("grid");
  
    for (let j = 0; j < size; j++) {
      const square = document.createElement("div");
      square.classList.toggle("square");
  
      square.addEventListener("mouseenter", function (e) {
        if (darkenBox.checked === true) {
          darkeningColors(e);
        }

        if (randomBox.checked === true) {
          randomizeColors(e);
        } else {
          e.target.style.backgroundColor = "orange";
        }
      });
      
      grid.appendChild(square);
    }
  
    container.appendChild(grid);
  }
}

createGrid();