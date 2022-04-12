//draw board (need border top, bottom, left and right to elements)

//need access to boxes

const boxes = Array.from(document.getElementsByClassName('box')); //change to array
console.log(boxes);

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
    })
}

drawBoard();