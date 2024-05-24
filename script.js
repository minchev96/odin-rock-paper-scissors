const rockBtn = document.querySelector(".rock");
const paperBtn = document.querySelector(".paper");
const scissorsBtn = document.querySelector(".scissors");
const score = document.querySelector(".score");
const winner = document.querySelector(".result");
const cChoice = document.querySelector(".computer-choice")
let numberOfRounds = 0;
let humanScore = 0;
let computerScore = 0;

function checkEndOfGame(){
    if(numberOfRounds === 1) winner.innerHTML = "";
    if(numberOfRounds === 5) {
        checkWinner(humanScore, computerScore);
        numberOfRounds = 0;
        humanScore = 0;
        computerScore = 0;
    }
}

function getComputerChoice(){
    let number = Math.floor(Math.random() * 3);
    if(number === 0) return 'rock';
    if(number === 1) return 'scissors';
    if(number === 2) return 'paper';
}

function playRound(humanChoice, computerChoice){
    if(humanChoice === 'rock' && computerChoice === 'scissors'){
        humanScore++;
        score.innerHTML = "You win! Rock beats Scissors.";
    }
    if(humanChoice === 'scissors' && computerChoice === 'rock'){
        computerScore++;
        score.innerHTML = "You lose! Rock beats Scissors.";
    }
    if(humanChoice === 'rock' && computerChoice === 'paper'){
        computerScore++;
        score.innerHTML = "You lose! Paper beats Rock.";
    }
    if(humanChoice === 'paper' && computerChoice === 'rock'){
        humanScore++;
        score.innerHTML = "You win! Paper beats Rock.";
    }
    if(humanChoice === 'scissors' && computerChoice === 'paper'){
        humanScore++;
        score.innerHTML = "You win! Scissors beats Paper.";
    }
    if(humanChoice === 'paper' && computerChoice === 'scissors'){
        computerScore++;
        score.innerHTML = "You lose! Scissors beats Paper.";
    }
    if(humanChoice === 'rock' && computerChoice === 'rock'){
        score.innerHTML = 'Tie';
    }
    if(humanChoice === 'paper' && computerChoice === 'paper'){
        score.innerHTML = 'Tie';
    }
    if(humanChoice === 'scissors' && computerChoice === 'scissors'){
        score.innerHTML = 'Tie';
    }
}

function checkWinner(humanScore, computerScore){
    if(humanScore > computerScore) winner.innerHTML = 'You Win';
    else if(humanScore < computerScore) winner.innerHTML = 'You Lose'; 
    else winner.innerHTML = 'Tie!';
}
 
rockBtn.addEventListener("click", () => {
    numberOfRounds++;
    const humanChoice = "rock";
    const computerChoice = getComputerChoice();
    cChoice.innerHTML = computerChoice;
    playRound(humanChoice, computerChoice);
    checkEndOfGame();
})

paperBtn.addEventListener("click", () => {
    numberOfRounds++;
    const humanChoice = "paper";
    const computerChoice = getComputerChoice();
    cChoice.innerHTML = computerChoice;
    playRound(humanChoice, computerChoice);
    checkEndOfGame();
})

scissorsBtn.addEventListener("click", () => {
    numberOfRounds++;
    const humanChoice = "scissors";
    const computerChoice = getComputerChoice();
    cChoice.innerHTML = computerChoice;
    playRound(humanChoice, computerChoice);
    checkEndOfGame();
})
