const container = document.getElementById("container");
const gridBtn = document.getElementById('gridBtn');

// builds grid
function generateGrid(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (m = 0; m < (rows * cols); m++) {
    let cell = document.createElement("div");
    // cell.classList.add("cell");
    container.appendChild(cell).className = "cell";
  };
};
// calls grid function
generateGrid(16, 16);


// change color of cells when hovered over
function blkCell() {
  const blk = "blue";
  return blk;
}
container.addEventListener('mouseover', (e) => e.target.style.backgroundColor = blkCell());



gridBtn.onclick = function(event) {
let userInput = 0;
  do {
 userInput = parseInt(prompt("Enter a number between 1 and 100", "0"));
} while (userInput <= 0 || userInput >= 101);

while(container.firstChild){
  container.removeChild(container.firstChild);
}

generateGrid(userInput, userInput);
}

