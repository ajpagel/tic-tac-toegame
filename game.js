//draw board (need border top, bottom, left and right to elements)

//need access to boxes
const gameboard = document.getElementById("gameboard");
const boxes = Array.from(document.getElementsByClassName('box')); //change to array
console.log(boxes);
const restartBtn = document.getElementById('restartBtn');
const playText = document.getElementById('playText');
//keep track of what is in boxes so users dont click there
const spaces = [null,null,null,null,null,null,null,null, null];
const O_TEXT = "O";
const X_TEXT = "X";
let currentPlayer = O_TEXT;

const drawBoard = () => {
    boxes.forEach((box, index) => {
        let styleString = '';
        if (index < 3) {
            styleString += 'border-bottom: 3px solid black;';
        }
        if(index % 3 == 0) {//this will be on the left
            styleString += 'border-right: 3px solid black;';
        }
        if(index % 3 == 2){ //this is a box on the right
            styleString += 'border-left: 3px solid black;';
        }
        if (index > 5) { //bottom row
            styleString += 'border-top: 3px solid black;';
        }
        box.style = styleString;
        box.addEventListener('click', boxClicked);
    });
};

function boxClicked(evt) {
    const id = evt.target.id;
    console.log(id); //check which box is clicked
    if(!spaces[id]) { //if null/nothing in there...
        spaces[id] = currentPlayer; //currentPlayer O will be placed in box
        evt.target.innerText = currentPlayer; //actual box set to innerText to be current Player
        //before updating check if player won
        if(playerHasWon(currentPlayer)) {
            startGameText.innerHTML = `${currentPlayer} wins!`;
            return;
        }
        currentPlayer = currentPlayer === O_TEXT ? X_TEXT : O_TEXT; //flipping players

    }
}

const playerHasWon = (currentPlayer) => {
    if(spaces[0] === currentPlayer) { //wins up top all three 
        if(spaces[1] === currentPlayer && spaces[2] === currentPlayer) {
            console.log(`${currentPlayer} wins up top`);
            return true;
        } //next check to see winning on left
        if(spaces[3] === currentPlayer && spaces[6] === currentPlayer) {
            console.log(`${currentPlayer} wins on the left`);
            return true;
        } //win diagonally
        if(spaces[4] === currentPlayer && spaces[8] === currentPlayer) {
            console.log(`${currentPlayer} wins diagonally`);
            return true;
        }
    } 
    if (spaces[8] === currentPlayer) { //wins right 
        if(spaces[2] === currentPlayer && spaces[5] === currentPlayer) {
            console.log(`${currentPlayer} wins on the right`);
            return true;
        } //next check to see winning bottom
        if(spaces[6] === currentPlayer && spaces[7] === currentPlayer) {
            console.log(`${currentPlayer} wins on bottom`);
            return true;
        }
    }  //check for middle rows horizontal and up and down
    if(spaces[4] === currentPlayer) {
        if(spaces[1] === currentPlayer && spaces[7] === currentPlayer) {
            console.log(`${currentPlayer} wins vertically in middle`);
            return true;
        }
        if(spaces[3] === currentPlayer && spaces[5] === currentPlayer) {
            console.log(`${currentPlayer} wins horizontally in middle`);
            return true;
        }
    }
};





restartBtn.addEventListener("click", () => {
    spaces.forEach((space, index) => {
      spaces[index] = null;
    });
    boxes.forEach((box) => {
      box.innerText = "";
    });
    startGameText.innerText = `Let's Play!!`;
  
    currentPlayer = O_TEXT;
  });
  
drawBoard();
  

//when box is clicked update the square
//figure out which player is up then switch after clicked