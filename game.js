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
        return 'playerWon'
    }
    else{
        return 'computerWon'
     }
}

const resultDiv = document.createElement('div');
document.body.appendChild(resultDiv);

// Rest of your code (getComputerChoice, playRound functions)...

const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorButton = document.getElementById('scissor');

let playerScore = 0;
let computerScore = 0;

function logMatchOutcome(playerSelection) {
    const computerChoice = getComputerChoice();
    const resultForMatch = playRound(playerSelection, computerChoice);

    resultDiv.innerHTML += `Player selected: ${playerSelection}, Computer Selected: ${computerChoice}, Result: ${resultForMatch}<br>`;

    if (resultForMatch === 'playerWon') {
        playerScore++;
    } else if (resultForMatch === 'computerWon') {
        computerScore++;
    }

    resultDiv.innerHTML += `Player Score: ${playerScore}, Computer Score: ${computerScore}<br><br>`;

    if (playerScore === 5) {
        resultDiv.innerHTML += "Player wins the game!";
        disableButtons();
    } else if (computerScore === 5) {
        resultDiv.innerHTML += "Computer wins the game!";
        disableButtons();
    }
}

rockButton.addEventListener('click', () => logMatchOutcome('rock'));
paperButton.addEventListener('click', () => logMatchOutcome('paper'));
scissorButton.addEventListener('click', () => logMatchOutcome('scissors'));

function disableButtons() {


    rockButton.disabled = true;
    paperButton.disabled = true;
    scissorButton.disabled = true;
}

