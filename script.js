
let playerSelection = ("Rock, Scissor, Paper");
const computerSelection = getComputerChoice();
var playerScore = 0;
var computerScore = 0;

const restartBtn = document.getElementById('restartBtn')
restartBtn.addEventListener('click', restartGame)


function game(){
    while(playerScore != 5 && computerScore != 5){

        console.log(playerScore);
        console.log(computerScore);

        var result = play(playerSelection, computerSelection);
        if (result == "Win"){
            playerScore++;
        }
        if (result == "Lose"){
            computerScore++;
        }
        
    }
    console.log(playerScore);
    console.log(computerScore);
    console.log("Game has ended");
}


function play(playerSelection, computerSelection){

    var playerSelection = prompt("Rock, Scissor, Paper");

    var playerSelection = playerSelection.toLowerCase();
    computerSelection = getComputerChoice().toLowerCase();

    console.log(playerSelection);
    console.log(computerSelection);

    if(playerSelection === "rock" && computerSelection === "rock"){
        return "draw"
    }
    if(playerSelection === "paper" && computerSelection === "paper"){
        return "draw"
    }
    if(playerSelection === "scissor" && computerSelection === "scissor"){
        return "draw"
    }
    if(playerSelection === "rock" && computerSelection === "scissor"){
        return "Win"
    }
    if(playerSelection === "rock" && computerSelection === "paper"){
        return "Lose"
    }
    if(playerSelection === "scissor" && computerSelection === "rock"){
        return "Lose"
    }
    if(playerSelection === "scissor" && computerSelection === "paper"){
        return "Win"
    }
    if(playerSelection === "paper" && computerSelection === "rock"){
        return "Win"
    }
    if(playerSelection === "paper" && computerSelection === "scissor"){
        return "Lose"
    }


}

function getComputerChoice(){
    const rockScissorPaperArray =["Rock", "Scissor", "Paper"];
    const randomPick = Math.random();
    const index = Math.floor(randomPick * rockScissorPaperArray.length);

    const randomVariable = rockScissorPaperArray[index];
    return randomVariable;
}

function restartGame(){
    playerScore = 0
    computerScore = 0
    console.log("restart")
    alert('Button wurde geklickt')
    game();
}


