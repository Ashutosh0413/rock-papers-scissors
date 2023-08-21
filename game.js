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
        return `You win ${playerSelection} beats ${computerSelection}`
    }
    else{
        return `You lose ${computerSelection} beats ${playerSelection}`
     }
}

