let humanScore = 0;
let computerScore = 0;

const humanChoice = getHumanChoice();
const computerChoice = getComputerChoice();

playRound(humanChoice, computerChoice);

function getComputerChoice(){
    let number = Math.floor(Math.random() * 3);
    if(number === 0) return 'rock';
    if(number === 1) return 'scissors';
    if(number === 2) return 'paper';
}

function getHumanChoice(){
    let choice = prompt("Choose Rock Paper scissors").toLowerCase();
    
    if(choice !== 'rock' && choice !== 'paper' && choice !== 'scissors'){
        return 'Invalid Choise'
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


console.log(humanChoice);
console.log(computerChoice);
console.log(humanScore);
console.log(computerScore);
