
document.querySelector(".game").addEventListener("contextmenu", function (event) { event.preventDefault() });

// main logic of game
const button = document.getElementById("emoji");
const field = document.querySelector(".game__field");
const time = document.querySelector(".game__timer");
const rest = document.querySelector(".game__rest");
const settings = document.getElementById("settings");
const settingsAgreeButton = document.getElementById("ok");
const areaSettings = document.querySelector(".game__settings");
const areaRating = document.querySelector(".game__ranking");
const modalVictory = document.querySelector(".game__victory");
const ranking = document.getElementById("ranking");
let difficult = "Beginner";
let fieldIsReady;
let matrix;
let pressTimer;
let timer, numberOfBombs, restOfBombs, numberValueCells, width, height;
createRanking("Beginner");
//audio
const applause = new Audio("assets/audios/applause.mp3");
const explosion = new Audio("assets/audios/explosion.mp3");
const click = new Audio("assets/audios/click.mp3");
const flag = new Audio("assets/audios/flag.mp3");
const sounds = [applause, explosion, click, flag];

class Cell {
    constructor(coordinates) {
        this.coordinates = coordinates;
        this.isBomb = false;
        this.value = 0;
        this.isOpen = false;

    }

    createCellElem() {
        const fieldCell = document.createElement("div");
        fieldCell.classList.add("game__cell", "game__cell_not-open");
        field.appendChild(fieldCell);
        this.fieldCell = fieldCell;
        this.fieldCell.addEventListener("click", this.open.bind(this));
        this.fieldCell.addEventListener("contextmenu", this.setFlag.bind(this));
        this.fieldCell.addEventListener("touchstart", this.isLongPress.bind(this));
        this.fieldCell.addEventListener('touchend', function() {clearTimeout(pressTimer);});
        this.fieldCell.addEventListener('touchcancel', function() {clearTimeout(pressTimer)}); 
    }
    

    open() {
        if (!fieldIsReady) {
            startTimer();
            createBombs(this);
            generateValuesOfCells();
            fieldIsReady = true;
            
        }
        if (this.isOpen || this.isFlagged) {
            return;
        }

        this.isOpen = true;
        this.fieldCell.classList.add(`game__cell_${this.value}`);

        if (this.isBomb) {
            explosion.play();
            this.fieldCell.textContent = "💣";
            if (!document.querySelector(".game__cell_wrong")) {
                this.fieldCell.classList.add("game__cell_wrong");
                gameOver();
            }
        } else if (this.value === 0) {
            click.currentTime = 0;
            click.play();
            isAllValueOpen();
            defineNeighbours(this.coordinates.j, this.coordinates.i).forEach(function (elem) { elem.open(); })
        } else {
            click.currentTime = 0;
             click.play();
            isAllValueOpen();
            this.fieldCell.textContent = this.value;
        }
        this.fieldCell.classList.remove("game__cell_not-open");
        this.fieldCell.removeEventListener("contextmenu", this.setFlag.bind(this));
        this.fieldCell.removeEventListener("touchstart", this.isLongPress.bind(this));
    }

    isLongPress(){
        pressTimer = setTimeout(setFlag.bind(this), 250);
    };

    setFlag(event) {
        event.preventDefault();

        if (this.isOpen) {
            return;
        }

        if (this.isFlagged) {
            this.fieldCell.textContent = "";
            this.isFlagged = false;
            restOfBombs++; 
        } else {
            if (navigator.vibrate) {
                navigator.vibrate(250);
            } 
            flag.currentTime = 0;
            flag.play();
            this.fieldCell.textContent = "🚩";
            this.isFlagged = true;
            restOfBombs--;
        }
            showRest();
    }

}

function startGame() {
     stopTimer();
     matrix = [];
     fieldIsReady = false;
     field.textContent = "";
     makeHappyEmoji();
     time.textContent = "000";
     createField();
     restOfBombs = numberOfBombs;
     showRest();
   
    field.addEventListener("mousedown", makeAmazeEmoji);
    field.addEventListener("mouseup", makeHappyEmoji);
    field.addEventListener("touchstart", makeAmazeEmoji);
    field.addEventListener("touchend", makeHappyEmoji);
}

function createField() {
    if (!width) {
        width = 8; 
        height = 8; 
        numberOfBombs = 10;
    }
    numberValueCells = width * height - numberOfBombs;
    field.style.maxWidth = `${width * 30}px `;
    field.style.maxHeight = `${height * 30}px `;
    matrix.length = height;
    for (let j = 0; j < height; j++) {
        matrix[j] = [];
        matrix[j].length = width;
        for (let i = 0; i < width; i++) {
            matrix[j][i] = createCell({ i, j });
        }

    }

}

function createCell(x, y) {
    const newCell = new Cell(x, y);
    newCell.createCellElem();
    return newCell;
}

function createBombs(cell) {
    let currentNumberOfBombs = 0;
    while (currentNumberOfBombs < numberOfBombs) {
        let j = getRandomInt(0, matrix.length);
        let i = getRandomInt(0, matrix[0].length);
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

function generateValuesOfCells() {
    for (let j = 0; j < matrix.length; j++) {
        for (let i = 0; i < matrix[0].length; i++) {
            matrix[j][i].value = countBombs(j, i);
           
        }
    }
}

function isValid(currentValue, maxValue) {
    return currentValue >= 0 && currentValue <= maxValue ? true : false;
}

function countBombs(j, i) {
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

function defineNeighbours(j, i) {
    const arrNeighbours = [];
    for (let x = j - 1; x <= j + 1; x++) {
        if (!isValid(x, matrix.length - 1)) {
            continue;

        }
        for (let y = i - 1; y <= i + 1; y++) {
            if (!isValid(y, matrix[0].length - 1)) {
                continue;
            }
            if (y == i && x == j) {
                continue;
            }

            if (matrix[x][y].isOpen) {
                continue;
            }
            arrNeighbours.push(matrix[x][y]);
        }
    }
    return arrNeighbours;
}

function isAllValueOpen(){
    numberValueCells--;
    if (!numberValueCells) {
       victory(); 
    }
}

function victory(){
    applause.play();
    makeVictoryEmoji();
    stopTimer();  
    window.setTimeout(flagBombs, 200)
    restOfBombs = 0;
    showRest(); 
    getAndSetResults();
    field.removeEventListener("mousedown", makeAmazeEmoji);
    field.removeEventListener("mouseup", makeHappyEmoji);
    field.removeEventListener("touchstart", makeAmazeEmoji);
    field.removeEventListener("touchend", makeHappyEmoji);

    function flagBombs(){
        for (let j = 0; j < matrix.length; j++) {
            for (let i = 0; i < matrix[0].length; i++) {
                if (matrix[j][i].isOpen) {
                    continue;
                }

                if (matrix[j][i].isBomb) {
                    matrix[j][i].fieldCell.textContent = "🚩";
                    matrix[j][i].isOpen = true;
                }
            }
        }
    }
  
    
}

function gameOver() {
   stopTimer();
    makeUpsetEmoji();
    for (let j = 0; j < matrix.length; j++) {
        for (let i = 0; i < matrix[0].length; i++) {
            if (matrix[j][i].isOpen) {
                continue;
            }

            if (matrix[j][i].isBomb) {
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
    field.removeEventListener("touchstart", makeAmazeEmoji);
    field.removeEventListener("touchend", makeHappyEmoji);
}

function makeAmazeEmoji() {
    button.textContent = "😮";
}

function makeHappyEmoji() {
    button.textContent = "🙂";
}

function makeVictoryEmoji() {
    button.textContent = "😎";
}

button.addEventListener("click", startGame);


// timer

function startTimer() {
    let seconds = 1 ;
    time.textContent = seconds.toString().padStart(3, '0');
    timer = setInterval(function () {
        seconds++;
         time.textContent = seconds.toString().padStart(3, '0');
        if (seconds === 1000) {
            stopTimer();
        }
    }, 1000);
}

function stopTimer(){
        clearInterval(timer);
}

//rest of bombs

function showRest(){
    rest.textContent = restOfBombs.toString().padStart(3, '0');
}

//settings

settings.addEventListener("click", showModal);
ranking.addEventListener("click", showModal);
settingsAgreeButton.addEventListener("click", applySettings);
areaSettings.addEventListener("click", closeModal);
areaRating.addEventListener("click", closeModal);

function showModal(event){
    let chooseModal;
    if (event == modalVictory) {
        let winTime = document.getElementById("winTime");
        winTime.textContent =`Victory! Your Time is ${parseInt(time.textContent, 10)}s.`;
        chooseModal = modalVictory;
    } else if (event.target.closest("#settings")) {
        chooseModal = areaSettings;
    }else if (event.target.closest("#ranking")) {
        let active = document.querySelector(".modal__ranking-option_active");
        createRanking(active.textContent.trim());
        chooseModal = areaRating;
    }

   
    chooseModal.classList.add("modal_open");
}
const widthInput = document.getElementById('width');
const heightInput = document.getElementById('height');
const minesInput = document.getElementById('mines');

function applySettings(event){
     const selectedOption = document.querySelector('input[name="settings"]:checked').value;

        if (selectedOption === 'Beginner') {
            width = 8;
            height = 8;
            numberOfBombs = 10;
            difficult = "Beginner";
        } else if (selectedOption === 'Intermediate') {
            width = 16;
            height = 16;
            numberOfBombs = 40;
            difficult = "Intermediate";
        } else if (selectedOption === 'Expert') {
            width = 30;
            height = 16;
            numberOfBombs = 99;
            difficult = "Expert";
        } else if (selectedOption === 'Custom') {

            width = widthInput.value < 8 ? 8 : widthInput.value;
            height = heightInput.value < 8 ? 8 : heightInput.value;
            numberOfBombs = minesInput.value < 1 ? 1 : minesInput.value;
            difficult = null;
        }

        closeModal(event);
        startGame();
}

function closeModal(event){
    if (event.target.classList.contains("modal__button") || (event.target.classList.contains("modal") && !event.target.classList.contains("game__victory"))) {
        event.target.closest(".modal").classList.remove("modal_open");
    }
  
}

const radioButtons = document.querySelectorAll('input[name="settings"]');
    radioButtons.forEach(radio => {
        radio.addEventListener('change', function() {
            if (this.value === 'Custom') {
                enableCustomSettings(true);
            } else {
                enableCustomSettings(false);
            }
        });
    });


    function enableCustomSettings(enable) {
        const customSettings = document.querySelectorAll('.modal__number');
        customSettings.forEach(input => {
            input.disabled = !enable; 
            if (enable) {
                input.parentElement.classList.remove('modal__item_disabled'); 
            } else {
                input.parentElement.classList.add('modal__item_disabled');
            }
        });
    }




function updateMinesMax(event) {
     if (widthInput.value > 30) {
        widthInput.value = 30;
    }

    if (heightInput.value > 16) {
        heightInput.value = 16;
    }

    const customWidth = Number(widthInput.value);
    const customHeight = Number(heightInput.value);
    const maxMines = Math.floor(customWidth * customHeight * 0.9); 
    minesInput.max = maxMines; 
     
    if (minesInput.value > maxMines) {
        minesInput.value = maxMines;
    }
   
}

widthInput.addEventListener('input', updateMinesMax);
heightInput.addEventListener('input', updateMinesMax);
minesInput.addEventListener('input', updateMinesMax);


// ranking
modalVictory.addEventListener("click", closeModal);
document.getElementById("ranking-option").addEventListener("click", makeActive);

function makeActive(event){
    const eClass = event.target.classList;
 if (eClass.contains("modal__ranking-option") && !eClass.contains("modal__ranking-option_active")) {
     document.querySelector(".modal__ranking-option_active").classList.remove("modal__ranking-option_active");
     eClass.add("modal__ranking-option_active");
     const level = event.target.textContent.trim();
     createRanking(level);
 }
}




function getAndSetResults(){
    
    if (!difficult) {
        hideNameInput();
        showModal(modalVictory);
        return;
    }
   
    let leaderboard =[];
    let gameTime = parseInt(time.textContent, 10);
    if (localStorage.getItem(`leaderboard${difficult}`)) {
      leaderboard = JSON.parse(localStorage.getItem(`leaderboard${difficult}`));
      if (leaderboard[9] && leaderboard[9].gameTime < gameTime) {
          hideNameInput();
          showModal(modalVictory);
          return;
      } 
    } 
   showNameInput();
   showModal(modalVictory);
   const victoryOk = document.getElementById("victoryOk");
   victoryOk.addEventListener("click", setResults);
   document.getElementById("name").addEventListener("keydown", isEnter);

   function isEnter(event){
      if (event.code === "Enter" || event.keyCode === 13) {
        setResults();   
      }
    }

   function setResults(){
      const winner = document.getElementById("name").value; 
      leaderboard.push({winner, gameTime });
      leaderboard.sort((a, b) => a.gameTime - b.gameTime);
      leaderboard.length > 10 ? leaderboard.length  = 10 : ""; 
      localStorage.setItem(`leaderboard${difficult}`, JSON.stringify(leaderboard));
      victoryOk.removeEventListener("click", setResults);
      document.getElementById("name").removeEventListener("keydown", isEnter);
   }   
}

const nameInput = document.getElementById("nameVictory");

function hideNameInput(){
    nameInput.classList.add("modal__option-wraper_hide");
}

function showNameInput(){
    nameInput.classList.remove("modal__option-wraper_hide");
}

function createRanking(schowedRanking){
    let rankingList = document.getElementById("rankingList");
    rankingList.textContent = "";
    let leaderboard = [];
    if (localStorage.getItem(`leaderboard${schowedRanking}`)) {
      leaderboard = JSON.parse(localStorage.getItem(`leaderboard${schowedRanking}`));
    }

        let rankingTitle = document.createElement("li");
        rankingTitle.classList.add("modal__option", "modal__option_title");
        
        let rankingName = document.createElement("span");
         rankingName.classList.add("modal__option-title");
         rankingName.textContent = "Name";

        let rankingTime = document.createElement("span");
        rankingTime.classList.add("modal__option-title");
        rankingTime.textContent = "Time";

        rankingTitle.append(rankingName);
        rankingTitle.append(rankingTime);
        rankingList.append(rankingTitle);


    for (let i = 0; i < 10; i++) {
        let position = document.createElement("li");
        position.classList.add("modal__option");
        
        let winner = document.createElement("span");
         winner.classList.add("modal__option-title");
         winner.textContent = leaderboard[i] ? leaderboard[i].winner : "Anonymous";

        let winnerTime = document.createElement("span");
        winnerTime.classList.add("modal__option-title");
        winnerTime.textContent = leaderboard[i] ? leaderboard[i].gameTime : "999";

        position.append(winner);
        position.append(winnerTime);
        rankingList.append(position);
    }
}

// SOUND

const soundButton = document.getElementById("sound");
const soundImage = document.getElementById("sound-image");
soundButton.addEventListener("click", toggleSound);
let isMuted = false;

function toggleSound(){
    if (isMuted) {
        isMuted = false;
        sounds.forEach(sound =>{sound.volume = 1});
        soundImage.src = "assets/images/sound-on.png";
    }else{
        isMuted = true;
        sounds.forEach(sound =>{sound.volume = 0});
        soundImage.src = "assets/images/sound-off.png";
    }
}



