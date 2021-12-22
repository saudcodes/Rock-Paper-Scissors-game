const rock = document.querySelector("#rock")
const paper = document.querySelector("#paper")
const scissors = document.querySelector("#scissors")
let playerChoice = document.querySelector("#playerchoice")
let computerChoice = document.querySelector("#computerchoice")
let playerPoints = document.querySelector("#playerpoints")
let computerPoints = document.querySelector("#computerpoints")
let whoWon = document.querySelector("#whowon")
let playerSelection = "";


// Player selection buttons
rock.addEventListener("click", function () {
    const computerSelection = computerPlay();
    playerSelection = "rock";
    playerChoice.textContent = playerSelection;
    computerChoice.textContent = computerSelection;
    console.log(round(playerSelection, computerSelection))
    console.log(playerScore)
})

paper.addEventListener("click", function () {
    const computerSelection = computerPlay();
    playerSelection = "paper";
    computerChoice.textContent = computerSelection;
    playerChoice.textContent = playerSelection;
    console.log(round(playerSelection, computerSelection))
    console.log(playerScore)
})

scissors.addEventListener("click", function () {
    const computerSelection = computerPlay();
    playerSelection = "scissors";
    computerChoice.textContent = computerSelection;
    playerChoice.textContent = playerSelection;
    console.log(round(playerSelection, computerSelection))
    console.log(playerScore)
})




// default score set to 0
let playerScore = 0;
let computerScore = 0;


// random computer number/choice function
function computerPlay() {
    let randomNum = Math.floor(Math.random() * 3) + 1;
    if (randomNum === 1) {
        return "rock"
    } else if (randomNum === 2) {
        return "paper"
    } else if (randomNum === 3) {
        return "scissors"
    }
}

const computerSelection = computerPlay();
// plays a round and increaments score
function round(playerSelection, computerSelection) {

    if (playerSelection === computerSelection) {
        console.log("Its a Tie, Try agian!!")
    } else if (playerSelection === "rock") {
        if (computerSelection === "scissors") {
            playerScore++

            playerPoints.textContent = playerScore;

            console.log("you won Rock crushed Scissor")
        } else if (computerSelection === "paper") {
            computerScore++
            computerPoints.textContent = computerScore;
            console.log("oops Paper won")
        }
    } else if (playerSelection === "paper") {
        if (computerSelection === "scissors") {
            computerScore++
            computerPoints.textContent = computerScore;
            console.log("you lose Scissor won")
        } else if (computerSelection === "rock") {
            playerScore++
            playerPoints.textContent = playerScore;
            console.log("you won Rock Lost")
        }
    } else if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            computerScore++
            computerPoints.textContent = computerScore;
            console.log("Computer chose Rock you lose")
        } else if (computerSelection === "paper") {
            playerScore++
            playerPoints.textContent = playerScore;
            console.log("Computer chose Paper you win")
        }
    }

    // decides who won after a game of 5 rounds
    if (playerScore === 5 && computerScore < 5) {
        whoWon.textContent = "Yay you won !!! XD ";
        document.getElementById('reset-popover').click();



    } else if (computerScore === 5 && playerScore < 5) {
        whoWon.textContent = "Oops you lost :("
        document.getElementById('reset-popover').click();



    }

}



function reloadPage() {
    window.location.reload();
}






  

  