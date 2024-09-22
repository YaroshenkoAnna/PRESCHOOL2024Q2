const field = document.querySelector(".game__field");
let fieldIsReady = false;
const matrix = [];
const numberOfBombs = 99;
    
class Cell {
  constructor(coordinates) {
    this.coordinates = coordinates;
    this.isBomb = false;
    this.value = 0;
  }
    
  createCellElem(){
    const fieldCell = document.createElement("div");
    fieldCell.classList.add("game__cell");
    field.appendChild(fieldCell);
    this.fieldCell = fieldCell;
    this.fieldCell.addEventListener("click", this.open.bind(this), { once: true });
  }

  open(){
      if (!fieldIsReady) {
          createBombs(this);
          generateValuesOfCells();
          fieldIsReady = true;
      }
      console.log(this);
  }

}

function startGame(){
    createField();
}

function createField( width = 18, height = 18 ){
    field.style.maxWidth = `${width * 30}px `;
    field.style.maxHeight = `${height * 30}px `;
    matrix.length = height;
    for (let j = 0; j < height; j++) {
        matrix[j] = [];
        matrix[j].length = width;
       for (let i = 0; i < width; i++) {
        matrix[j][i] = createCell({i, j});
       }
        
    }

}

function createCell(x, y){
    const newCell = new Cell(x, y);
    newCell.createCellElem();
    return newCell;
}

function createBombs(cell){
    let currentNumberOfBombs = 0;
    while (currentNumberOfBombs < numberOfBombs ) {
      let j = getRandomInt(0, matrix.length);
      let i = getRandomInt (0, matrix[0].length);
      let checkElem = matrix[j][i]; 
      if (!checkElem.isBomb && checkElem !== cell) {
          checkElem.isBomb = true;
          currentNumberOfBombs++; 
          checkElem.fieldCell.textContent = "💣";
      }
    }   
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

function generateValuesOfCells(){
   for (let j = 0; j < matrix.length; j++) {
        for (let i = 0; i < matrix[0].length; i++) { 
              matrix[j][i].value = countBombs(j, i);
         }
   }
}

function isValid(currentValue, maxValue){
  return  currentValue >= 0 && currentValue <= maxValue ? true : false;
}

function countBombs(j, i){
    if (matrix[j][i].isBomb) {
        return;
    }
    let counter = 0;
    for (let x = j-1; x <= j+1; x++) {
        if (!isValid(x, matrix.length - 1)) {
            continue;

        }
        for (let y = i-1; y <= i+1; y++) {
            if (!isValid(y, matrix[0].length - 1)) {
                continue;
            }
            counter = matrix[x][y].isBomb ? counter + 1 : counter;
        }  
    }
     matrix[j][i].fieldCell.textContent =  counter; 
    return counter;
}


startGame();


