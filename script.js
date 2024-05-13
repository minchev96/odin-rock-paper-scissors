const numberOfRounds = 5;
let humanScore = 0;
let computerScore = 0;

for(let i = 1; i <= numberOfRounds; i++){
    playGame(i);

    if(i == numberOfRounds){
        checkWinner(humanScore, computerScore);
    }
}


function getComputerChoice(){
    let number = Math.floor(Math.random() * 3);
    if(number === 0) return 'rock';
    if(number === 1) return 'scissors';
    if(number === 2) return 'paper';
}

function getHumanChoice(roundId){
    let choice = prompt(`Round ${roundId}\nChoose Rock Paper scissors`).toLowerCase();
    
    if(choice !== 'rock' && choice !== 'paper' && choice !== 'scissors'){
        console.log('Invalid Choise')
    }

    return choice;
}

function playRound(humanChoice, computerChoice){
    if(humanChoice === 'rock' && computerChoice === 'scissors'){
        humanScore++;
        console.log("You win! Rock beats Scissors.");
    }
    if(humanChoice === 'scissors' && computerChoice === 'rock'){
        computerScore++;
        console.log("You lose! Rock beats Scissors.");
    }
    if(humanChoice === 'rock' && computerChoice === 'paper'){
        computerScore++;
        console.log("You lose! Paper beats Rock.");
    }
    if(humanChoice === 'paper' && computerChoice === 'rock'){
        humanScore++;
        console.log("You win! Paper beats Rock.");
    }
    if(humanChoice === 'scissors' && computerChoice === 'paper'){
        humanScore++;
        console.log("You win! Scissors beats paper.");
    }
    if(humanChoice === 'paper' && computerChoice === 'scissors'){
        computerScore++;
        console.log("You lose! Scissors beats paper.");
    }
    if(humanChoice === 'rock' && computerChoice === 'rock'){
        console.log('Tie');
    }
    if(humanChoice === 'paper' && computerChoice === 'paper'){
        console.log('Tie');
    }
    if(humanChoice === 'scissors' && computerChoice === 'scissors'){
        console.log('Tie');
    }
}

function checkWinner(humanScore, computerScore){
    if(humanScore > computerScore) console.log('You Win');
    else if(humanScore < computerScore) console.log('You Lose'); 
    else console.log('Tie!');
}

function playGame(round){
    const humanChoice = getHumanChoice(round);
    const computerChoice = getComputerChoice();
    
    playRound(humanChoice, computerChoice);
}
