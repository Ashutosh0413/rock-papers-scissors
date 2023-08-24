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

const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorButton = document.getElementById('scissor');

function logMatchOutcome(playerSelection){
    const computerChoice = getComputerChoice();
    const resultForMatch = playRound(playerSelection,computerChoice);
    console.log(`Player selected : ${playerSelection}, Computer Selected : ${computerChoice}, Result:${resultForMatch}`);

}

rockButton.addEventListener('click', () => logMatchOutcome('rock'));
paperButton.addEventListener('click', ()=> logMatchOutcome('paper'));
scissorButton.addEventListener('click',()=>logMatchOutcome('scissor'));



// 5 round game

/*
function game(){
    playerScore = 0;
    computerScore= 0;
    
    // looping through the rounds
    for (rounds=1;rounds<=5;rounds++){
        const playerChoice = prompt("Enter your weapon: ");
        const computerChoice= getComputerChoice();

        const result = playRound(playerChoice,computerChoice);
        if(result==='playerWon'){
            playerScore++;
        } else if(result ==='computerWon'){
            computerScore++;
        }

        console.log(`Round:${rounds} \n Player Weapon: ${playerChoice}\n Computer Weapon: ${computerChoice}`);
        console.log(`Result of round ${rounds}: ${result}`);
    }
    //game over scoreboard
    console.log("GAME OVER");
    console.log(`Player Score = ${playerScore}`);
    console.log(`Computer Score = ${computerScore}`);
    //results
    if (playerScore > computerScore) {
        console.log("You win the game!");
      } else if (playerScore < computerScore) {
        console.log("You lose the game!");
      } else {
        console.log("It's a tie game!");
      }
    }
    

*/




