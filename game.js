console.log('Working..')
// computer choice
function getComputerChoice(){
    const choices=['Rock','Paper','Scissors'];
    const randomIndex= Math.floor(Math.random()*choices.length);
    return choices[randomIndex];
}

// 1 round of game

function playRound(playerSelection,computerSelection){
    playerSelection= playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    if(playerSelection===computerSelection){
        return "Tie"
    }
    else if((playerSelection==='rock' && computerSelection==='scissors') || 
    (playerSelection==='paper' && computerSelection==='rock') || 
    (playerSelection==='scissors' && computerSelection==='paper')){
        return 'You won the round!'
    }
    else{
        return 'Computer won the round!'
     }
}


// Rest of your code (getComputerChoice, playRound functions)...

const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorButton = document.getElementById('scissor');
const playerCurrentScore = document.getElementById('playerScore');
const computerCurrentScore = document.getElementById('computerScore');
const matchResult = document.getElementById('roundResults');
const resetButton = document.querySelector('.resetBtn');
const resultsLabel = document.getElementById('resultsLabel');

let playerScore = 0;
let computerScore = 0;
let gameState = false;

function rockPaperScissor(playerSelection){
    if (gameState){
        return;
    }
    const inGameComputerChoice = getComputerChoice();
    const gameResult = playRound(playerSelection,inGameComputerChoice);

    matchResult.textContent= `Player Selected = ${playerSelection}, Computer Selected =${inGameComputerChoice}, Result = ${gameResult}`;

    if (gameResult === 'You won the round!') {
        playerScore++;
    } else if (gameResult === 'Computer won the round!') {
        computerScore++;
    }

    playerCurrentScore.textContent=`${playerScore}`;
    computerCurrentScore.textContent=`${computerScore}`;

    if (playerScore === 5) {
        resultsLabel.textContent = "Player wins the game!";
        gameState= true;
    } else if (computerScore === 5) {
        resultsLabel.textContent = "Computer wins the game!";
        gameState = true;

    }

    
    


}
rockButton.addEventListener('click', () => rockPaperScissor('rock'));
paperButton.addEventListener('click', () => rockPaperScissor('paper'));
scissorButton.addEventListener('click', () => rockPaperScissor('scissors'));
resetButton.addEventListener('click',()=>location.reload())

