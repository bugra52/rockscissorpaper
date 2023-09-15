
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

//container playerScore
const sbContainer = document.querySelector('.scoreboard')
const contentPlayer = document.createElement('p')
contentPlayer.classList.add('score')
contentPlayer.textContent = 'You win!'

//container computerScore
const sbContainer2 = document.querySelector('.scoreboard')
const contentComputer = document.createElement('p')
contentComputer.classList.add('score')
contentComputer.textContent = 'You lose!'


// listener for player choices
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

//container cpuImg
document.getElementById("cpuImg").src="images/question.png";

//function for starting the game
function game(){
    if((playerScore || computerScore) == 5){
        return;}
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
            document.getElementById("cpuImg").src="images/question.png";
            return sbContainer.appendChild(contentPlayer)
        }
        if(computerScore == 5){
            document.getElementById("cpuImg").src="images/question.png";
            return sbContainer.appendChild(contentComputer)
        }
        console.log(playerScore);
        console.log(computerScore);
}

//function for getting the result of a round
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

//function for getting the computer choice for the playing function
function getComputerChoice(){

    const rockScissorPaperArray =["Rock", "Scissor", "Paper"];
    const randomPick = Math.random();
    const index = Math.floor(randomPick * rockScissorPaperArray.length);
    const randomVariable = rockScissorPaperArray[index];
    
    if (randomVariable === "Rock") {
        //computerImg.src = "images/stone.png";
        document.getElementById("cpuImg").src="images/stone.png";
    } else if (randomVariable === "Scissor") {
        //computerImg.src = "images/scissor.png";
        document.getElementById("cpuImg").src="images/scissor.png";
    } else if (randomVariable === "Paper") {
        //computerImg.src = "images/paper.png";
        document.getElementById("cpuImg").src="images/paper.png";
    }
    
    
    return randomVariable; 
}

//function to restart the game 
function restartGame(){
    playerScore = 0
    computerScore = 0
    p1.textContent = playerScore
    p2.textContent = computerScore
    console.log("restart")
    contentPlayer.remove(sbContainer)
    contentComputer.remove(sbContainer2)
}

