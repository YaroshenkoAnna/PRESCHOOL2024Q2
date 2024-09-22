document.querySelector(".game").addEventListener("contextmenu", function(event){event.preventDefault()});

// main logik of game
const button = document.querySelector(".game__button");
const field = document.querySelector(".game__field");
let fieldIsReady;
let matrix;
const numberOfBombs = 60;
    
class Cell {
  constructor(coordinates) {
    this.coordinates = coordinates;
    this.isBomb = false;
    this.value = 0;
    this.isOpen = false;

  }
    
  createCellElem(){
    const fieldCell = document.createElement("div");
    fieldCell.classList.add("game__cell", "game__cell_not-open");
    field.appendChild(fieldCell);
    this.fieldCell = fieldCell;
    this.fieldCell.addEventListener("click", this.open.bind(this), { once: true });
    this.fieldCell.addEventListener("contextmenu", this.setFlag.bind(this));
  }

  open(){
      if (!fieldIsReady) {
          createBombs(this);
          generateValuesOfCells();
          fieldIsReady = true;
      }
      if(this.isOpen || this.isFlagged){
        return;
      }
     
      this.isOpen = true;

      if (this.isBomb) {
          
          this.fieldCell.textContent = "💣";
           if (!document.querySelector(".game__cell_wrong")) {
               this.fieldCell.classList.add("game__cell_wrong");
               gameOver();
           }  
      }else if (this.value === 0 ) {
          defineNeighbours(this.coordinates.j, this.coordinates.i).forEach(function(elem) {elem.open();} ) 
      }else{ 
          this.fieldCell.textContent = this.value;
      }
      this.fieldCell.classList.remove("game__cell_not-open");
      this.fieldCell.removeEventListener("contextmenu", this.setFlag.bind(this));
  }

  setFlag(){
    if (this.isOpen) {
        return;
    }
    if (this.isFlagged) {
        this.fieldCell.textContent = "";
        this.isFlagged = false;
    } else {
         this.fieldCell.textContent = "🚩";
         this.isFlagged = true;
    }
     
  }

}

function startGame(){
    fieldIsReady = false;
    matrix = [];
    field.textContent="";
    makeHappyEmoji();
    createField();
    field.addEventListener("mousedown", makeAmazeEmoji);
    field.addEventListener("mouseup", makeHappyEmoji);
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
               matrix[j][i].fieldCell.classList.add(`game__cell_${ matrix[j][i].value}`);
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

    const neighbours = defineNeighbours(j, i);
    neighbours.forEach(elem => {
       counter = elem.isBomb ? counter + 1 : counter;
    });
    return counter;
}

function defineNeighbours(j, i){
    const arrNeighbours = [];
    for (let x = j-1; x <= j+1; x++) {
        if (!isValid(x, matrix.length - 1)) {
            continue;

        }
        for (let y = i-1; y <= i+1; y++) {
            if (!isValid(y, matrix[0].length - 1)) {
                continue;
            }
            if (y==i && x ==j) {
                continue;
            }

            if(matrix[x][y].isOpen){
                continue;
            }
            arrNeighbours.push(matrix[x][y]);
        }  
    }  
    return arrNeighbours; 
}

function gameOver(){
    makeUpsetEmoji();
     for (let j = 0; j < matrix.length; j++) {
        for (let i = 0; i < matrix[0].length; i++) { 
             if (matrix[j][i].isOpen) {
                 continue;
             }  
             
             if (matrix[j][i].isBomb){
                 matrix[j][i].open();
             }
             matrix[j][i].isOpen = true;
             if (!matrix[j][i].isBomb && matrix[j][i].isFlagged) {
                 const cross = document.createElement("div");
                cross.classList.add("game__cross");
                cross.textContent = "x";
                matrix[j][i].fieldCell.appendChild(cross);
             }

         }
   }
}

startGame();



// emoji

function makeUpsetEmoji() {
    button.textContent = "🙁";
    field.removeEventListener("mousedown", makeAmazeEmoji);
    field.removeEventListener("mouseup", makeHappyEmoji);
}

function makeAmazeEmoji() {
    button.textContent = "😮";
}

function makeHappyEmoji() {
    button.textContent = "🙂"; 
}

button.addEventListener("click", startGame);


