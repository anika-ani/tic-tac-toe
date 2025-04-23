let boxes = document.querySelectorAll('.box');
let resetButton = document.querySelector('#reset-btn');
let newGameButton = document.querySelector('#new-game-btn');
let msgContainer = document.querySelector('.msg-container');
let msg = document.querySelector('#msg');

let turnO= true;

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],    
]

const resetGame = () => {
    turnO = true;
    enableBoxes();
    msgContainer.classList.add('hide');
    
}


boxes.forEach((box) => {
    box.addEventListener("click",() =>{
       
        if(turnO) {
            box.innerText ="O";
            turnO = false;

        
        } else{
            box.innerText ="X";
            turnO = true;
        }
        box.disabled = true;

        checkWinner();
    })
})

const disableBoxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
}

const enableBoxes = () => {
    for(let box of boxes){
        box.disabled = true;
        box.innerText ="";
    }
}

const showWinner = (winner) => {
    msg.innerText = ` Congrats,   the winner is ${winner} !`;
    msgContainer.classList.remove('hide');
    disableBoxes();
}

const checkWinner = () => {
    for(let pattern of winPatterns){
        
        let posVal1 = boxes[pattern[0]].innerText;
        let posVal2 = boxes[pattern[1]].innerText;
        let posVal3 = boxes[pattern[2]].innerText;

        if (posVal1 !="" && posVal2 !="" && posVal3 !="") {
            if (posVal1 === posVal2 && posVal2 === posVal3) {
                console.log("winner is " + posVal1);                
                showWinner(posVal1);
            }
        }
    }
};

newGameButton.addEventListener("click", resetGame);
resetButton.addEventListener("click", resetGame);