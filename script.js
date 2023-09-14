
// variables
let playerSelection = ("Rock, Scissor, Paper");
const computerSelection = getComputerChoice();
var playerScore = 0;
var computerScore = 0;

//scoreboard
var p1 = document.getElementById('playerScore')
var p2 = document.getElementById('computerScore')


//restart button
const restartBtn = document.getElementById('restartBtn')
restartBtn.addEventListener('click', restartGame)

const sbContainer = document.querySelector('.scoreboard')
const contentPlayer = document.createElement('p')
contentPlayer.classList.add('score')
contentPlayer.textContent = 'You win!'

const sbContainer2 = document.querySelector('.scoreboard')
const contentComputer = document.createElement('p')
contentComputer.classList.add('score')
contentComputer.textContent = 'You lose!'


const rock = document.getElementById('rock')
rock.addEventListener('click', () => {
    playerSelection = "rock";
    game();
});

const scissor = document.getElementById('scissor')
scissor.addEventListener('click', () => {
    playerSelection = "scissor";
    game();
});

const paper = document.getElementById('paper')
paper.addEventListener('click', () => {
    playerSelection = "paper";
    game();
});


function game(){
        var result = play(playerSelection, computerSelection);
        if(playerScore == 5){
            return sbContainer.appendChild(contentPlayer)
        }
        if(computerScore == 5){
            return sbContainer.appendChild(contentComputer)
        }
        if (result == "Win" && playerScore !== 5){
            playerScore++;
            p1.textContent = playerScore;
        }
        if (result == "Lose" && computerScore !==5){
            computerScore++;
            p2.textContent = computerScore;
        }
        if(playerScore == 5){
            return sbContainer.appendChild(contentPlayer)
        }
        if(computerScore == 5){
            return sbContainer.appendChild(contentComputer)
        }
        console.log(playerScore);
        console.log(computerScore);
}


function play(playerSelection, computerSelection){
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
    p1.textContent = playerScore
    p2.textContent = computerScore
    console.log("restart")
    contentPlayer.remove(sbContainer)
}


